<template>
    <!-- <NavigationComponent/>
    <HeroSection/> -->
    <HeroSection2/>
    <SkillsSection/>
    <ProjectsSection/>
    <FooterComponent/>
</template>

<script>
import HeroSection2 from './components/HeroSection2.vue';
// import NavigationComponent from './components/NavigationComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
// import HeroSection from './components/HeroSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import SkillsSection from './components/SkillsSection.vue';

export default {
  name: 'App',
  components: {
    // NavigationComponent,
    // HeroSection,
    HeroSection2,
    SkillsSection,
    ProjectsSection,
    FooterComponent
}
}
</script>



<style src="./assets/tailwind.css" />