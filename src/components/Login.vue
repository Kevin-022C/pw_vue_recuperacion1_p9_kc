<template>
  <div class="container-login">
    <h2>Login</h2>
    <p type="Usuario">
      <input v-model="user" type="text" />
    </p>
    <p type="Contraseña">
      <input v-model="password" type="password" />
    </p>
    <div>
      <button @click="token">Ingresar</button>
    </div>
  </div>
</template>

<script>
import { generarTokenFachada } from "../clients/AutorizationClient.js";
export default {
  data() {
    return {
      user: null,
      password: null,
    };
  },
  methods: {
    async token() {
      const res = await generarTokenFachada(this.user, this.password);
      const token = res.data.accessToken;
      localStorage.setItem('token', token);
      console.log(token);
    },
  },
};
</script>

<style scoped>
.container-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
p:before {
  content: attr(type);
  display: block;
}
</style>