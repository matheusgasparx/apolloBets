<template>
  <div class="flex items-center">
    <img class="w-8 border rounded-full" src="../assets/imgs/logo.png" alt="Logo" />
    <p class="ml-2 lobster">{{ texto }}</p>
  </div>
</template>

<script>
export default {
  props: {
    imagem: {
      type: String,
      default: "",
    },
    texto: {
        type: String,
        default: ''
    }
  },
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
      },
    ],
  },
};
</script>

<style scoped>
.lobster {
  font-family: "Lobster", "cursive";
}
</style>