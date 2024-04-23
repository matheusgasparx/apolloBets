<template>
  <div class="container py-4">
    <div class="row">
        <div class="col">
            <Jogos></Jogos>
        </div>
    </div>
  </div>
</template>

<script>
import Jogos from '@/components/comuns/Jogos.vue'

export default {
    name: 'esportes',
    components: {
        Jogos
    }
}
</script>

<style>

</style>