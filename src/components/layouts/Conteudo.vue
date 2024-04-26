<template>
  <div class="all">
    <Esporte />
  </div>
</template>

<script>
import Esporte from '@/components/views/Esportes.vue'

export default {
  name: 'conteudo',
  components: {
    Esporte
  }
}
</script>

<style>
  .all {
    background-color: rgb(47, 80, 47);
    border-top: 5px solid greenyellow ;
  }
</style>