import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        bets: [],
        betsNoBilhete: [],
    },
    mutations: {
        loadBets(state, bets) {
            state.bets = bets
        },
        loadBilhete(state, betsNoBilhete) {
            state.betsNoBilhete = betsNoBilhete
        },
        addNoBilhete(state, bet) {
            state.betsNoBilhete.push(bet)
            localStorage.setItem("betsNoBilhete", JSON.stringify(state.betsNoBilhete))
        },
        removeDoBilhete(state, betID) {
            const bilheteAtualizado = state.betsNoBilhete.filter(i => betID != i.id)
            state.betsNoBilhete = bilheteAtualizado
            localStorage.setItem('betsNoBilhete', JSON.stringify(state.betsNoBilhete))
        }
    },
    actions: {
        loadBets({ commit }) {
            axios
                .get('http://localhost:5000/events')
                .then(res => {
                    commit('loadBets', res.data)
                })
        },

        loadBilhete({ commit }) {
            const storedBets = localStorage.getItem('betsNoBilhete')
            if (storedBets) {
                commit('loadBilhete', JSON.parse(storedBets))
            }
        },

        addNoBilhete({ commit }, bet) {
            commit('addNoBilhete', bet)
        },

        removeDoBilhete({ commit }, betID) {
            commit('removeDoBilhete', betID)
        }
    }
})
