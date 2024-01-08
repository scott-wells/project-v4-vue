<template>
    <section 
        id="project-section" 
        class="py-12 px-6 bg-light-brown-primary border-b-8 border-brown-primary"
    >
    <div class="lg:px-20">
        <div class="pb-10">
            <div class="sm:w-1/2">
                <h2 class="text-4xl font-bold text-brown-primary">PROJECTS</h2>
                <p class="py-4 text-sm font-thin text-brown-secondary">
                    Here is a collection of work that I have completed or is currently being built.
                </p>
            </div>
            <div class="py-1 w-1/2 sm:w-1/3 border-b-4 border-brown-primary"></div>
        </div>
        <div class="sm:grid grid-cols-2 gap-6">
            <div 
                v-for="project in mainProjectsList" 
                :key="project.name" 
                class="pb-6" >
                <ProjectComponent 
                    :name="project.name" 
                    :desc="project.desc" 
                    :tech="project.tech"
                    :link="project.link"
                />
            </div>
            <div 
                v-for="project in addtlProjectsList" 
                :key="project.name" 
                class="pb-6" >
                <ProjectComponent 
                    :name="project.name" 
                    :desc="project.desc" 
                    :tech="project.tech"
                    :link="project.link"
                />
            </div>
        </div>
    </div>
    </section>
</template>

<script setup>
import { addtlProjects } from "@/assets/additionalProjectsList";
import { mainProjects } from "@/assets/mainProjectsList";
import ProjectComponent from "@/components/ProjectComponent.vue";

const addtlProjectsList = addtlProjects;
const mainProjectsList = mainProjects;

</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>