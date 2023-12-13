<template>
    <button class="px-3 py-2 text-xs font-sm text-center text-brown-primary bg-theme-orange-300 border-2 focus:ring-4 focus:outline-none focus:ring-brown-primary ">
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

</style>