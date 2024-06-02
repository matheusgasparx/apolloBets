<template>
  <div>
    <!-- navbar navbar-expand-lg bg-body-tertiary -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary pt-0">
      <div id="header" class="container-fluid">
        <a class="navbar-brand">
          <img src="@/assets/imgs/logotext.png" alt="apollobets" />
        </a>
        
        <div class="vertical-bar"></div>
        
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-4 mb-lg-0">
            <li class="nav-item p-2 mt-2">
              <a class="nav-link" @click="navegarPara('Esportes')">Esportes</a>
            </li>
            <li class="nav-item p-2 mt-2">
              <a class="nav-link" @click="navegarPara('Cassinos')">Cassinos</a>
            </li>
          </ul>
          
          <ul class="navbar-nav ms-auto mb-4 mb-lg-0">
            <li class="nav-item p-2 mt-2">
              <a class="nav-link" @click="navegarPara('Registrar')">Registrar</a>
            </li>
            <li class="nav-item p-2 mt-2 ml-4">
              <a class="nav-link" @click="navegarPara('Login')">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'topoPadrao',
  methods: {
    navegarPara(event) {
      this.$emit('navegar', event);
    }
  }
};
</script>

<style scoped>
#header {
  background-color: rgb(255, 255, 255);
  border-bottom: 5px solid rgb(19, 179, 27);
  border-top: 5px solid rgb(19, 179, 27);
  font-family: Arial, Helvetica, sans-serif;
}

.nav-link {
  cursor: pointer;
  font-weight: 700;
  text-transform: uppercase;
  color: rgb(32, 73, 34);
}

.navbar-brand img {
  width: 150px;
}

.vertical-bar {
  width: 2px;
  height: 35px; 
  background-color: rgb(19, 179, 27);
  margin: auto 20px;
}

a:hover {
  text-shadow: 0px 0px 10px rgb(173, 255, 47),
               0px 0px 20px rgb(19, 179, 27),
               0px 0px 30px rgb(19, 179, 27),
               0px 0px 40px rgb(19, 179, 27);
}
</style>