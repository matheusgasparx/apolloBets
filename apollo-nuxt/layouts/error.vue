<template>
  <div>
        <h1>Ocorreu um erro</h1>
        <h2 v-if="error.statusCore === 404">Página não encontrada</h2>
        <h2 v-else>{{ error.message }}</h2>
    <nuxt-link to="/">Voltar para o Início</nuxt-link>
  </div>
</template>

<script>
export default {
    layout: 'no-nav',
    props: {
        error: {
            type: Object,
            default: null
        }
    }
}
</script>

<style>

</style>