<template>
    <div class="app-container">
        <router-view />
    </div>
</template>

<style lang="scss">
@use '@/assets/scss/variables' as *;

.app-container {
    min-height: 100vh;
    background-color: $app-background-color;
}
</style>
