<template>
    <section class="bg-brown-50 p-4 py-8">
        <!-- section title -->
        <div class="text-center">
            <h2 class="text-3xl font-bold">PROJECTS</h2>
            <hr class="w-16 h-px mx-auto my-2 bg-brown-900 border-0 rounded"/>
        </div>
        <div class="py-6">
            <!-- project component -->
            <ProjectComponent 
                title="Albuquerque Church" 
                subtitle="Website built with headless CMS, React and hosted on Netlify." 
                :icons=iconsList
                link="https://albuquerque.church/"
            />
            
            <hr class="h-px mx-auto my-2 bg-brown-100 border-0 rounded"/>
            
            <ProjectComponent 
                title="Phonological Awareness Module 01" 
                subtitle="Interactive module embedded within an online learning course." 
                link="https://codepen.io/efwells101/pen/ExXBGmb"
            />

            <hr class="h-px mx-auto my-2 bg-brown-100 border-0 rounded"/>

            <ProjectComponent 
                title="Phonological Awareness Module 02" 
                subtitle="Interactive module embedded within an online learning course." 
                link="https://codepen.io/efwells101/pen/xxrmvjZ"
            />

            <hr class="h-px mx-auto my-2 bg-brown-100 border-0 rounded"/>

            <ProjectComponent 
                title="Community Educators Web Portal" 
                subtitle="Web pages custom built on top of the Teachable CMS." 
                link="https://educatordevelopment.teachable.com/p/home"
            />

            <hr class="h-px mx-auto my-2 bg-brown-100 border-0 rounded"/>

            <ProjectComponent 
                title="Elizabeth Wells Photography" 
                subtitle="Website designed and built with the Squarespace CMS." 
                link="https://elizabethwellsphoto.com/"
            />
            <div class="my-8">
                <div class="mb-4">
                    <h3 class="mb-4 text-2xl font-medium leading-tight">Elizabeth Wells Photography</h3>
                    <p class="text-sm font-thin">Website designed and built with the Squarespace CMS.</p>
                </div>
                <div class="mb-4 flex items-center">
                    <p class="text-xs font-thin mr-2">Tech Used:</p>
                    <img class="mr-2 w-6" :src="squarespaceIcon" aria-hidden="true">
                    <div class="mr-2 w-6">
                        <svg viewBox='0 0 128 128'>
                        <path fill='#F0DB4F' d='M1.408 1.408h125.184v125.185h-125.184z'></path>
                        <path
                        fill='#323330'
                        d='M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z'
                        ></path>
                    </svg>
                    </div>
                </div>
                <a href="https://elizabethwellsphoto.com/" target="_blank" rel="noopener noreferrer">
                    <button class="max-h-8 px-3 py-2 text-xs font-normal text-brown-50 bg-brown-400 hover:bg-brown-500 focus:outline-none cursor-pointer">View More</button>
                </a>
            </div>
            <hr class="h-px mx-auto my-2 bg-brown-100 border-0 rounded"/>
            <div class="my-8">
                <div class="mb-4">
                    <h3 class="mb-4 text-2xl font-medium leading-tight">Portfolio <span class="text-base">v</span>4.0</h3>
                    <p class="text-sm font-thin">This website was designed and built with Tailwind CSS and Vue.</p>
                </div>
                <div class="mb-4 flex items-center">
                    <p class="text-xs font-thin mr-2">Tech Used:</p>
                    <div class="mr-2 w-8">
                        <svg viewBox="0 0 51 31" class="w-auto h-5"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path></svg>
                    </div>
                    <div class="mr-2 w-6">
                        <svg class="logo" viewBox="0 0 128 128" width="24" height="24" data-v-e0ef77de=""><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z" data-v-e0ef77de=""></path><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-e0ef77de=""></path></svg>
                    </div>
                </div>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <button class="max-h-8 px-3 py-2 text-xs font-normal text-brown-50 bg-brown-400 hover:bg-brown-500 focus:outline-none cursor-pointer">View More</button>
                </a>
            </div>
            <hr class="h-px mx-auto my-2 bg-brown-100 border-0 rounded"/>
        </div>
    </section>
</template>

<script setup>

import ProjectComponent from "@/components/ProjectComponent.vue";

const iconsList = [];

</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>