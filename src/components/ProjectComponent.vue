<template>

<div class="p-4 bg-brown-offwhite border-2 border-brown-primary box-shad">
		<div class="pb-3 border-b border-brown-tertiary">
			<h3 class="pb-2 text-brown-primary text-xl font-medium leading-tight">{{ project.name }}</h3>
			<p class="text-brown-secondary text-sm font-thin">{{ project.desc }}</p>
		</div>
		<div class="pt-3 text-xs font-thin text-brown-secondary">
			<p class="font-medium">Tech Used: </p>
			<p class="pt-1">{{ project.tech }}</p>
		</div>

		<div class="pt-2">
			<ButtonSm :link="project.link" msg="View Project" />
		</div>
	</div>
</template>

<script setup>
import ButtonSm from '@/components/ButtonSm.vue';
import { defineProps } from 'vue';

const project = defineProps([
	'name','desc','tech','link'
]);
</script>

<style scoped>
.box-shad {
	box-shadow: 6px 6px 0px rgb(73, 56, 47);
}
</style>
