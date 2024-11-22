<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const router = useRouter();

const register = () => {
  if (!email.value || !password.value || !confirmPassword.value) {
    errorMessage.value = "Por favor, preencha todos os campos!";
    return;
  } 
  if (password.value !== confirmPassword.value) {
    errorMessage.value = "As senhas não coincidem!";
    return;
  }

  // Simulação de cadastro (pode ser com uma API call)
  console.log("Cadastro realizado com sucesso!");
  router.push('/login');
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
      <h2 class="text-white text-2xl font-bold text-center mb-4">Cadastre-se</h2>
      
      <div v-if="errorMessage" class="text-red-500 text-sm mb-4">
        {{ errorMessage }}
      </div>

      <form @submit.prevent="register">
        <div class="mb-4">
          <input
            v-model="email"
            type="email"
            placeholder="E-mail"
            class="w-full px-4 py-3 bg-[#282828] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        
        <div class="mb-4">
          <input
            v-model="password"
            type="password"
            placeholder="Senha"
            class="w-full px-4 py-3 bg-[#282828] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div class="mb-6">
          <input
            v-model="confirmPassword"
            type="password"
            placeholder="Confirmar Senha"
            class="w-full px-4 py-3 bg-[#282828] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        
        <button
          type="submit"
          class="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
        >
          Criar Conta
        </button>
      </form>

      <div class="mt-4 text-center text-sm text-gray-400">
        Já tem uma conta? 
        <RouterLink to="/login" class="text-green-500 hover:underline">Faça login</RouterLink>
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
