<template>
    <div class="not-found">
        <h1>404 - Página não encontrada</h1>
        <p>A página que você está procurando não existe.</p>
        <router-link to="/" class="home-link">
            Voltar para a página inicial
        </router-link>
    </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/variables' as *;
@use 'sass:color';

.not-found {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
}

.home-link {
    background: $primary-color;
    border-radius: 5px;
    color: $white-color;
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    text-decoration: none;
    transition: background 0.3s;
}

.home-link:hover {
    background: color.adjust($primary-color, $lightness: -10%, $space: hsl);
}
</style>
