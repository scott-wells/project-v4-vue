<template>
	<HeroSection2 />
	<ProjectsSection />
	<FooterComponent />
</template>

<script>
import HeroSection2 from './components/HeroSection2.vue';
import FooterComponent from './components/FooterComponent.vue';
import ProjectsSection from './components/ProjectsSection.vue';

export default {
	name: 'App',
	components: {
		HeroSection2,
		ProjectsSection,
		FooterComponent,
	},
};
</script>

<style src="./assets/tailwind.css" />
