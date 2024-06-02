<template>
  <div class="container m-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3>Login</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="form-group mb-3">
                <label for="username">Email ou Nome de Usuário</label>
                <input type="text" class="form-control" id="username" v-model="username" required />
              </div>
              <div class="form-group mb-3">
                <label for="password">Senha</label>
                <input type="password" class="form-control" id="password" v-model="password" required />
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary btn-block">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      alert('Login realizado com sucesso! Já pode realizar suas apostas.');
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 50px;
}
</style>
