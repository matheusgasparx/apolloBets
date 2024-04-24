<template>
  <div>
    {{ conteudo }}
    <div>
      <component :is="conteudo"></component>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Cassinos',
    props: {
      conteudo: {
        type: String,
        required: true
      }
    }
}
</script>

<style>

</style>