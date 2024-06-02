<template>
  <div>
    <Topo @navegar="componente = $event"></Topo>
    <Conteudo v-if="visibilidade" :conteudo="componente"></Conteudo>
    <Bilhete></Bilhete>
    <Rodape></Rodape>
  </div>
</template>

<script>
import Conteudo from '@/components/layouts/Conteudo.vue';
import Bilhete from '@/components/comuns/Bilhete.vue';
import Topo from '@/components/layouts/Topo.vue';
import Rodape from '@/components/layouts/Rodape.vue';

import axios from 'axios'

export default {
  name: 'App',
  data: () => ({
    visibilidade: true,
    componente: 'Esporte'
  }),
  created() {
    axios
      .get("http://localhost:5000/events")
      .then(response => {
        console.log(response.data)
      })
  },
  components: {
    Bilhete,
    Conteudo,
    Rodape,
    Topo
  }
}
</script>

<style>
</style>
