<template>
  <div :class="estilo">
    <h4>{{ liga }}</h4>
    <p>{{ time1 }} <strong>x</strong> {{ time2 }}</p>
    <p>{{ odds1 }} {{ odds2 }}</p>
  </div>
</template>

<script>
export default {
    name: 'Jogos',
    props: ['liga', 'time1', 'time2', 'odds1', 'odds2', 'logoTimes'],
    computed: {
        estilo() {
            return `h-100 p-5 border ${this.liga} ${this.times} ${this.odds} ${this.logoTimes}`
        }
    }
}
</script>

<style>

</style>