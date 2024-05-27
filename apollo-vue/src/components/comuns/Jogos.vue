<template>
  <div class="d-flex justify-content-center">
    <div class="row">
      <div v-for="d in dados" :key="d.id" class="card m-3" style="width: 25rem; background-color: lightgrey">
        <div class="card-body">
          <h6 class="card-title">{{ d.league }}</h6>
          <div class="d-flex justify-content-between">
            <a href="#" class="btn btn-success">{{ d.teams.home }}</a>
            <a href="#" class="btn btn-warning">X</a>
            <a href="#" class="btn btn-success">{{ d.teams.away }}</a>
          </div>
          <div class="mt-3 d-flex justify-content-between">
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
export default {
  name: "Jogos",
  data() {
    return {
      dados: null,
    };
  },
  methods: {
    getDadosApi() {
      fetch("http://localhost:5000/events")
        .then((response) => response.json())
        .then((response) => {
          this.dados = response;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
  created() {
    this.getDadosApi();
  },
};
</script>

<style scoped>
/* @media (max-width: 576px) {
  .card-body .d-flex {
    flex-direction: column;
    align-items: center;
  }
  .card-body .btn {
    width: 100%;
    margin-bottom: 0.5rem;
    margin: 2px;
  }
  .card-body .badge {
    width: 100%;
    text-align: center;
    margin: 2px;
  }
  */
</style>
