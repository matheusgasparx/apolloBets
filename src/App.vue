<template>
  <div>
    <Topo @navegar="componente = $event"></Topo>
    <Conteudo v-if="visibilidade" :conteudo="componente"></Conteudo>
    <Rodape></Rodape>
  </div>
</template>

<script>
import Conteudo from './components/layouts/Conteudo.vue';
import Topo from './components/layouts/Topo.vue';
import Rodape from './components/layouts/Rodape.vue';

export default {
  name: 'App',
  data: () => ({
    visibilidade: true,
    componente: 'Esporte'
  }),
  components: {
    Conteudo,
    Rodape,
    Topo
  }
}
</script>

<style>
</style>
