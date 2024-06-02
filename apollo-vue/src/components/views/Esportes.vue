<template>
  <div class="container py-4">

    <div id="carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div class="carousel-indicators">
 
<!-- CARROSSEL -->
        <button
          type="button"
          data-bs-target="#carousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://assets.pixbet.com.br/desktop_image/2024-04-23-184301.webp"
            class="d-block w-100"
            alt="Slide 1"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://assets.pixbet.com.br/desktop_image/2024-04-23-184301.webp"
            class="d-block w-100"
            alt="Slide 2"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://assets.pixbet.com.br/desktop_image/2024-04-23-184301.webp"
            class="d-block w-100"
            alt="Slide 3"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
      </button>
    </div>

<!-- CARD DE BILHETES -->
    <div style="display: flex; flex-direction: row;">
        <div style="flex-basis: 50%; margin: 10px;">
          <Jogos></Jogos>
        </div>
        <div style="flex-basis: 50%; margin: 10px;">
          <Jogos></Jogos>
        </div>
        <div style="flex-basis: 50%; margin: 10px;">
          <Jogos></Jogos>
        </div>
    </div>

  </div>
</template>

<script>
import Jogos from "@/components/comuns/Jogos.vue";

export default {
  name: "esportes",
  components: {
     Jogos
  },
  /*
  mounted() {
    setInterval(this.nextSlide, 4000);
  },
  methods: {
    nextSlide() {
      let carousel = document.getElementById("carousel");
      
      let carouselInstance = new carousel.Carousel(carousel);
      carouselInstance.next();
    }
  }
  */
};
</script>

<style>
</style>