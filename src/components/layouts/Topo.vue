<template>
  <div>
    <nav>
      <ul>
        <li><a>Esportes</a></li>
        <li><a>Cassinos ao Vivo</a></li>
        <li><a>Cassinos</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'topo-padrao'
}
</script>

<style>
  nav {
    background-color: #350da1;
    color: #fff;
    padding: 10px;
  }
  
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
  
  nav ul li a:hover {
    text-decoration: underline;
  }
</style>