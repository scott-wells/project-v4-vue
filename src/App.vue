<template>
	<HeroSection2 />
	<ProjectsSection />
	<AboutSection />
	<FooterComponent />
</template>

<script>
import HeroSection2 from '@/components/HeroSection2.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import AboutSection from '@/components/AboutSection.vue'
import FooterComponent from '@/components/FooterComponent.vue';

export default {
	name: 'App',
	components: {
		HeroSection2,
		ProjectsSection,
		AboutSection,
		FooterComponent,
	},
};
</script>

<style src="./assets/tailwind.css" />
