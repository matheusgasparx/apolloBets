<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div id="header" class="container-fluid">
        <a class="navbar-brand">
          <img src="//apollo-bets.com/cdn/shop/files/updated_logo_-_Apollo_Bets.png?v=1697529753" alt="apollo" />
        </a>

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
              <a class="nav-link" @click="navegarPara('Esportes')" >Esportes</a>
            </li>
            
            <li class="nav-item p-2 mt-2">
              <a class="nav-link" @click="navegarPara('Cassinos')" >Cassinos</a>
            </li>
            
            <li class="nav-item p-2 mt-2">
              <a class="nav-link" @click="navegarPara('CassinosAoVivo')" >Cassinos Ao Vivo</a>
            </li>
          </ul>

          <ul class="navbar-nav ms-auto mb-4 mb-lg-0">
            <li class="nav-item p-2 mt-2">
              <a class="nav-link" >Cadastrar</a>
            </li>
            
            <li class="nav-item p-2 mt-2 ml-4">
              <a class="nav-link" >Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'topoPadrao',
  methods: {
    navegarPara(event) {
      console.log('chamou')
      this.$emit('navegar', event)
    }
  }
}
</script>

<style scoped>
  
  #header {
    background-color: rgba(122, 122, 122, 0.87);
  }

  .nav-link {
    cursor: pointer;
    font-weight: 700;
    text-transform: uppercase; 
    color: rgb(48, 189, 55);
    text-shadow: 0px 0px 10px rgb(19, 179, 27),
                 0px 0px 20px rgb(19, 179, 27),
                 0px 0px 30px rgb(19, 179, 27),
                 0px 0px 400px rgb(19, 179, 27)
  }

  .navbar-brand img {
    width: 115px

  /*
  nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  nav ul li {
    display: inline;
    margin-right: 10px;
  }
  
  nav ul li a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    color: rgb(255, 255, 255);
  } 
  */
}

</style>