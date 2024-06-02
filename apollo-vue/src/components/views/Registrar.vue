<template>
  <div class="container m-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3>Registrar-se</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="register">
              <div class="form-group mb-3">
                <label for="cpf">CPF</label>
                <input
                  type="text"
                  class="form-control"
                  id="cpf"
                  v-model="cpf"
                  required
                />
              </div>
              <div class="form-group mb-3">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                  required
                />
              </div>
              <div class="form-group mb-3">
                <label for="phone">Número de Telefone</label>
                <input
                  type="tel"
                  class="form-control"
                  id="phone"
                  v-model="phone"
                  required
                />
              </div>
              <div class="form-group mb-3">
                <label for="password">Senha</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                  required
                />
              </div>
              <div class="form-group mb-3">
                <label for="confirmPassword">Confirmação de Senha</label>
                <input
                  type="password"
                  class="form-control"
                  id="confirmPassword"
                  v-model="confirmPassword"
                  required
                />
              </div>
              <span>
                <input type="radio" class="mb-4" required /> Aceita nossos terms and conditions.
              </span>
              <br>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-success btn-block">
                  Finalizar Criação da Conta
                </button>
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
  name: "Registrar",
  data() {
    return {
      cpf: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    register() {
      if (this.password !== this.confirmPassword) {
        alert("As senhas não correspondem.");
        return;
      }
      console.log("CPF:", this.cpf);
      console.log("Email:", this.email);
      console.log("Telefone:", this.phone);
      console.log("Senha:", this.password);
      alert("Cadastro realizado com sucesso jogador. Bem vindo à ApolloBets!");
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 50px;
}
</style>
