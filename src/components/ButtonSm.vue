<template>
    <a :href="btn.link" target="_blank">
        <button class="px-3 py-2 text-white text-xs font-sm text-center 
        bg-pink-primary border-2 border-brown-primary hover:bg-brown-primary focus:bg-brown-secondary">
            {{btn.msg}}
        </button>
    </a>
    
</template>

<script setup>
import { defineProps } from 'vue';

const btn = defineProps([
    'msg', 'link'
]);

</script>

<style scoped>

</style>