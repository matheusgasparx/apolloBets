<template>
  <div class="container py-4">

    <div id="carousel" class="carousel slide">
        <div class="carousel-indicators">
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
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://assets.pixbet.com.br/desktop_image/2024-04-23-184301.webp"
              class="d-block w-100"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://assets.pixbet.com.br/desktop_image/2024-04-23-184301.webp"
              class="d-block w-100"
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
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>

    <div class="row mt-5">
      <div class="row">
        <div class="col-6">
          <Bilhete />
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="row">
        <div class="col-6">
          <Jogos 
          liga="Serie A"
          time1="Palmeiras"
          time2="Flamengo"
          Odds1='1.25'
          Odds2='2.89'
          ></Jogos>
        </div>
        <div class="col-6">
          <Jogos 
          liga="Premier League"
          time1="Real Madrid"
          time2="Manchester City"
          Odds1='2.00'
          Odds2='1.35'
          ></Jogos>
        </div>
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
};
</script>

<style>
</style>