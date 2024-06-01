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
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">
          Minhas Apostas
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>


      <div class="m-10">
        <h4>..</h4>
      </div>


    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Bilhete",

  methods: {
    oddTotal() {
      var total = 0
      this.betsNoBilhete.forEach(i => {
        total += i.odds * i.quantity
      })
      return total.toFixed(2)
    }
  },
  computed: mapState([
    'betsNoBilhete'
  ])
};
</script>

<style scoped>
  .bilheteStyle {
    position: fixed;
    z-index: 1050;
    bottom: 25px;
    right: 20px;
  }
</style>
