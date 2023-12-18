<template>
    <!-- section container -->
    <!-- padding width height img border bg-color text -->
    <section id="project-section" class="py-12 px-6 bg-light-brown-primary border-b-8 border-brown-primary">

        <!-- section title -->
        <!-- padding width height img border -->
        <div class="pb-10">
            <h2 class="text-4xl font-bold text-brown-primary">PROJECTS</h2>
            <p class="py-4 text-sm font-thin text-brown-secondary">
                Here is a simple collection of work that I have completed or are currently being built.
            </p>
            <div class="py-1 w-1/3 border-b-4 border-brown-primary"></div>
        </div>

        <!-- project components -->
        <!-- padding width height img border -->
        <div v-for="project in projectList" :key="project.name" class="pb-6" >
            <ProjectComponent 
                :name="project.name" 
                :desc="project.desc" 
                :tech="project.tech"
                :link="project.link"
            />
        </div>
    </section>
</template>

<script setup>
import { projects } from "@/assets/projectList";
import ProjectComponent from "@/components/ProjectComponent.vue";

const projectList = projects;

</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>