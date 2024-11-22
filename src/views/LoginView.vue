<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const login = () => {
  if (!email.value || !password.value) {
    errorMessage.value = "Por favor, preencha todos os campos!";
    return;
  }
  
  // Simulação de autenticação (pode ser com um API call)
  if (email.value === "user@example.com" && password.value === "password123") {
    // Redireciona para a home após login
    router.push('/');
  } else {
    errorMessage.value = "E-mail ou senha incorretos!";
  }
};
</script>

<template>
  <div class="h-screen flex items-center justify-center bg-black">
    <div class="w-[350px] p-8 bg-[#121212] rounded-lg shadow-lg">
      <div class="flex justify-center mb-6">
        <img
          class="w-24"
          src="/images/icons/spotify-logo.png"
          alt="Spotify Logo"
        />
      </div>
      <h2 class="text-white text-2xl font-bold text-center mb-4">Faça login</h2>
      
      <div v-if="errorMessage" class="text-red-500 text-sm mb-4">
        {{ errorMessage }}
      </div>

      <form @submit.prevent="login">
        <div class="mb-4">
          <input
            v-model="email"
            type="email"
            placeholder="E-mail"
            class="w-full px-4 py-3 bg-[#282828] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        
        <div class="mb-6">
          <input
            v-model="password"
            type="password"
            placeholder="Senha"
            class="w-full px-4 py-3 bg-[#282828] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        
        <button
          type="submit"
          class="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
        >
          Entrar
        </button>
      </form>

      <div class="mt-4 text-center text-sm text-gray-400">
        Não tem uma conta? 
        <RouterLink to="/cadastro" class="text-green-500 hover:underline">Cadastre-se</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos adicionais */
input:focus {
  border-color: #1db954;
}

button:focus {
  outline: none;
}
</style>
