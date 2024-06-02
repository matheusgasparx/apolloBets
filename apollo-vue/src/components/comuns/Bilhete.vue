<template>
  <div class="card">
    <div class="bilheteStyle">
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Seu Bilhete
      </button>
    </div>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <h3 class="m-5">Bilhete da aposta: </h3>
     
      <div class="container-center">
        <div class="card" style="width: 20rem">
          
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Primeira Bet</li>
            <li class="list-group-item">Segunda Bet</li>
            <li class="list-group-item">Terceira Bet</li>
          </ul>
        </div>
      </div>

      <span class="card-footer mt-2" style="width: 100vh">
        <input class="mt-1" type="number" style="width: 20vh;"/>
        <br />
      </span>
      <span class="card-footer" style="width: 100vh; background-color: lightsteelblue;"> Total Win: </span>
      <hr>
      <span>
        <input type="radio" class="m-3" disabled> Aceitar qualquer alteração de Odds.
      </span>
      <Button class="btn btn-success mt-3">FAZER APOSTA</Button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Bilhete",
  data: () => ({
    dados: {}
  }),
  methods: {
    getDadosApi() {
      fetch(`http://localhost:5000/events/${this.$route.params.id}`)
        .then((response) => response.json())
        .then((response) => {
          this.dados = response;
        })
        .catch((error) => {
          console.error("Bola fora! A página não está disponível: ", error);
        });
    },
    created(){
      this.getDadosApi()
    },

    oddTotal() {
      var total = 0;
      this.betsNoBilhete.forEach((i) => {
        total += i.odds * i.quantity;
      });
      return total.toFixed(2);
    },
  },
  computed: mapState(["betsNoBilhete"]),
};
</script>

<style scoped>
.bilheteStyle {
  position: fixed;
  z-index: 1050;
  bottom: 25px;
  right: 20px;
}

.container-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>

