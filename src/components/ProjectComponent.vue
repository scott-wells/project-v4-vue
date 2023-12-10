<template>
	<div class="my-8">
		<div class="mb-4">
			<h3 class="mb-4 text-2xl font-medium leading-tight">{{ props.title }}</h3>
			<p class="text-sm font-thin">{{ props.subtitle }}</p>
		</div>
		<ProjectTechComponent />
		<a
			:href="props.link"
			target="_blank"
			rel="noopener noreferrer"
		>
			<ButtonSm msg="View Project" />
		</a>
	</div>
</template>

<script setup>
import ButtonSm from '@/components/ButtonSm.vue';
import ProjectTechComponent from '@/components/ProjectTechComponent.vue';
import { defineProps } from 'vue';

const props = defineProps({
	title: String,
	subtitle: String,
	icons: [],
	link: String,
});
</script>

<style scoped></style>
