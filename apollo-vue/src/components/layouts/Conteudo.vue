<template>
  <div>
    <keep-alive>
      <component :is="conteudo"></component>
    </keep-alive>
  </div>
</template>

<script>
import Bilhete from '../comuns/Bilhete.vue'
import Cassino from '../views/Cassino.vue'
import Esportes from '../views/Esportes.vue'
import Login from '../views/Login.vue'
import Registrar from '../views/Registrar.vue'

export default {
  name: 'conteudo',
  props: {
      conteudo: {
        type: String,
        required: true
      }
    },
  components: {
    Cassino,
    Esportes,
    Login,
    Registrar,
    Bilhete
  }
}
</script>

<style>
</style>