<template>
  <div>
    <Topo></Topo>
    <Conteudo></Conteudo>
    <Rodape></Rodape>
  </div>
</template>

<script>
import Conteudo from './components/layouts/Conteudo.vue';
import Topo from './components/layouts/Topo.vue';
import Rodape from './components/layouts/Rodape.vue';

export default {
  name: 'App',
  components: {
    Conteudo,
    Rodape,
    Topo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
