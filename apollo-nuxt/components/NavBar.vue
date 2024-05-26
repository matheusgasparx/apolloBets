<template>
    <div>
      <div class="border rounded-md bg-blue-300 flex justify-around p-4 font-bold">
        <LogoTipo />
        <AppMenu :opcoes="opcoes"/>
        <Profile />
        <p class="pl-auto">
            <nuxt-link class="m-3" to="/Login">Registrar</nuxt-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
import AppMenu from '../comum/AppMenu.vue'
import LogoTipo from '../comum/LogoTipo.vue'
import Profile from '../comum/Profile.vue'

export default {
    components: {
        LogoTipo,
        AppMenu,
        Profile
    },
    data(){
        return { 
            opcoes: [
              { texto: "Home", url: "/"},
              { texto: "Esporte", url:"/esporte"},
              { texto: "Cassino", url:"/cassino"},
            ]
        }
    }
  }
  </script>
  
  <style scoped>
  </style>
  