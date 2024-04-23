<template>
  <div :class="estilo">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta temporibus nulla? Officiis voluptas itaque assumenda, deserunt ipsa sint. Suscipit cum ut esse autem qui tempore consequatur perspiciatis cumque ullam.</p>
  </div>
</template>

<script>
export default {
    name: 'Jogos',
    props: [],
    computed: {
        estilo() {
            return 'h-100 p-5 rounded-3 border'
        }
    }
}
</script>

<style>

</style>