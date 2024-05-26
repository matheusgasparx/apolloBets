<template>
  <div class="card">
    <div class="bilheteStyle">
      <button
        class="btn btn-success"
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
      <div class="offcanvas-body">...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bilhete"
};
</script>

<style scoped>
  .bilheteStyle {
    position: absolute;
    background-color: rgb(47, 80, 47);
    z-index: 1;
    bottom: 25px;
    right: 20px;
  }
</style>