<template>
  <div class="d-flex justify-content-center">
    <div class="row">
      <div v-for="d in dados" :key="d.id" class="card m-3" style="width: 25rem; background-color: lightgrey">
        <div class="card-body">
          <h6 class="card-title">{{ d.league }}</h6>
          <div class="d-flex justify-content-around">
            <button class="btn btn-success" @click="addNoBilhete(d.teams.home, d.odds.homeWin)"> {{ d.teams.home }}</button>
            <button class="btn btn-warning" @click="addNoBilhete('Draw', d.odds.draw)">X</button>
            <button class="btn btn-success" @click="addNoBilhete(d.teams.away, d.odds.awayWin)">{{ d.teams.away }}</button>
          </div>
          <div class="mt-3 d-flex justify-content-around">
            <span class="badge bg-secondary">{{ d.odds.homeWin }}</span>
            <span class="badge bg-secondary">{{ d.odds.draw }}</span>
            <span class="badge bg-secondary">{{ d.odds.awayWin }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Jogos",
  data() {
    return {
      dados: {},
      // bet: []
    };
  },
  methods: {
    // mounted() {
    //   fetch("http://localhost:5000/events")
    //     .then(response => response.json)
    //     .then(dados => this.dados = dados)
    // },

    getDadosApi() {
      fetch("http://localhost:5000/events")
        .then((response) => response.json())
        .then((response) => {
          this.dados = response;
        })
        .catch((error) => {
          console.error("Bola fora! A página não está disponível: ", error);
        });
    },
    addNoBilhete(team, odd) {
      console.log(this.addNoBilhete, 'chamou')
      const bet = {
        team: team,
        odd: odd,
        id: Date.now()
      };
      this.$store.dispatch('addNoBilhete', bet);
    },
    estaNoBilhete(bet) {
      return this.betsNoBilhete.find(i => i.id == bet.id);
    }
  },
  computed: 
  mapState([
    'betsNoBilhete'
  ]),
  created() {
    this.getDadosApi();
  },
};
</script>

<style scoped>
</style>
