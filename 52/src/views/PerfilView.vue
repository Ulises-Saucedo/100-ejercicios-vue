<template>
    <h1>PERFIL</h1>
    <nav>
        <router-link :to="{name: 'privado'}">Perfil privado</router-link>
        <router-link :to="{name: 'publico'}">Perfil publico</router-link>
    </nav>
    <router-view></router-view>
</template>