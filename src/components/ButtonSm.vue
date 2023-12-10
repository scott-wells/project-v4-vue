<template>
    <button class="px-3 py-2 text-xs font-sm text-center text-brown-50 bg-theme-orange-300 border-2 border-brown-800 hover:bg-brown-900 focus:ring-4 focus:outline-none focus:ring-brown-300 ">
        {{msg}}
    </button>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        msg: String
    })

</script>

<style scoped>
body-font {
    background-color: #845332;
}
</style>