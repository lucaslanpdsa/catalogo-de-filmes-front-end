<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
    <p class="text-lg">A página que você está procurando não existe.</p>
    <router-link
      to="/"
      class="mt-5 inline-block bg-blue-600 text-white rounded px-5 py-2.5 hover:bg-blue-700 transition-colors duration-300"
    >
      Voltar para a página inicial
    </router-link>
  </div>
</template>