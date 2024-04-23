<template>
  <div>
    <Cassino></Cassino>
    <CassinoAoVivo />
    <Esporte />
  </div>
</template>

<script>
import Cassino from '@/components/views/Cassino.vue'
import CassinoAoVivo from '@/components/views/CassinoAoVivo.vue'
import Esporte from '@/components/views/Esportes.vue'

export default {
  name: 'conteudo',
  components: {
    Cassino,
    CassinoAoVivo,
    Esporte
  }
}
</script>

<style>
</style>