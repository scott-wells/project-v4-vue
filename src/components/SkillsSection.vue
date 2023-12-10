<template>
    <section class="bg-brown-100 p-4 py-8">
        <div class="text-center">
            <h2 class="text-3xl font-bold">SKILLS</h2>
            <hr class="w-16 h-px mx-auto my-2 bg-brown-900 border-0 rounded"/>
        </div>
        
        <div class="my-6">
            <div class="text-center">
                <img :src="backendImg" alt="icon_design_01" class="h-auto w-48 mx-auto"/>
                <div class="my-4">
                    <h3 class="text-xl font-semibold leading-relaxed">Back End</h3>
                    <p class="text-sm">Java, SQL, and Node.js</p>
                </div>
                <ButtonSm msg="Read More"/>
            </div>
        </div>
        <hr class="h-px mx-auto my-2 bg-brown-900 border-0 rounded"/>
        <div class="my-6">
            <div class="text-center">
                <img :src="frontendImg" alt="icon_design_01" class="h-auto w-48 mx-auto"/>
                <div class="my-4">
                    <h3 class="text-xl font-semibold leading-relaxed">Front End</h3>
                    <p class="text-sm">UI/UX, Sass, Tailwind, React, and Vue. </p>
                </div>
                <ButtonSm msg="Read More"/>
            </div>
        </div>
        <hr class="h-px mx-auto my-2 bg-brown-900 border-0 rounded"/>
        <div class="my-6">
            <div class="text-center">
                <img :src="freelanceImg" alt="icon_design_01" class="h-auto w-48 mx-auto"/>
                <div class="my-4">
                    <h3 class="text-xl font-semibold leading-relaxed">Freelance</h3>
                    <p class="text-sm">Side projects and past client work.</p>
                </div>
                <ButtonSm msg="Read More"/>
            </div>
        </div>
    </section>
</template>
  
<script setup>
    import freelanceImg from "../assets/images/icon_design_01.png"
    import frontendImg from "../assets/images/icon_ux_01.png"
    import backendImg from "../assets/images/icon_web_01.png"
    import ButtonSm from "@/components/ButtonSm.vue"

</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>