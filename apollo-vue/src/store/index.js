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
        loadBilhete() {
            state.betsNoBilhete = bets
        },
        addNoBilhete(state, bet) {
            state.betsNoBilhete.push(bet)
            localStorage.setItem("betsNoBilhete", JSON.stringify(state.betsNoBilhete))
        },
        removeDoBilhete(state, betID) {
            var bilheteAtualizado = state.betsNoBilhete.filter(i => betID != i.id)
            state.betsNoBilhete = bilheteAtualizado
            localStorage.setItem('betsNoBilhete', JSON.stringify(state.betsNoBilhete))
        }
    },
    actions: {
        loadBets({ commit }) {
            axios
                .get('apollo-vue/babel.config.js')
                .then(res => {
                    commit('loadBets', res.data)
                })
        },

        loadBilhete({ commit }) {
            if (localStorage.getItem('betsNoBilhete')) {
                commit('loadBilhete', JSON.parse(localStorage.getItem('betsNoBilhete')))
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