<template>
  <div class="card">
    <div class="card-header bg-dark text-white">
        <p>{{ partida }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Bilhete',
    props: ['partida', 'bg', 'color'],
    computed: {
        estilo() {
            return `h-100 p-5 rounded-3 border ${this.bg} ${this.color}`
        }
    }
}
</script>

<style>

</style>