<template>
    <section 
        id="about-section" 
        class="py-12 px-6 bg-light-brown-primary border-b-8 border-brown-primary"
    >
    <div class="lg:px-20 text-brown-primary font-thin">
        <div class="pb-10 md:pb-4">
            <div class="sm:w-1/2">
                <h2 class="text-4xl font-bold text-brown-primary">About</h2>
                <p class="py-4 text-sm font-thin text-brown-secondary">
                    A bit more about myself and my work experience.
                </p>
            </div>
            <div class="py-1 w-1/2 sm:w-1/3 border-b-4 border-brown-primary"></div>
        </div>
        <div class="pb-6 sm:flex sm:items-center sm:justify-start sm:gap-x-8">
            <div class="pb-6 flex flex-col sm:w-2/3">
                <p class="pb-4">
                    <b class="font-medium">Web:</b> JavaScript, SQL, Java, Vue, Sass, Tailwind, React, Git
                </p>
                <p class="pb-4">
                    <b class="font-medium">Design & video:</b> Adobe XD, Figma, Photoshop, Illustrator, After Effects
                </p>
                <p>
                    <b class="font-medium">Background:</b> I am from a rural, small town in New Mexico. 
                    I met my wife there and now we share a modest home with two children in a big city. 
                    I enjoy photography, longboarding, camping, roadtripping, and time with friends and family.
                </p>
            </div>
            <img class="max-h-60 border-4 border-brown-primary overflow-hidden rounded-full " 
            src="../assets/images/sw-profile-pic-sm.jpg" alt="profile image"/>
        </div>
        <div class="p-6 sm:p-8 bg-offwhite-primary border-2 border-brown-primary box-shad">
            <p class="font-medium text-xl">
                <b>Background & Experience:</b>
            </p>
            <div class="py-1 w-1/2 sm:w-1/3 border-b border-brown-primary"></div>
            <div class="pt-6 column-container">
                <p class="pb-6">
                    I am currently working as a Front End Developer at <b>SwitchThink Solutions</b> in Phoenix, AZ, 
                    where I write batch automation and stand-alone scripts, as well as build front end interfaces 
                    for our customer web applications and our client software platform, Keystone. On a day-to-day 
                    basis, I am using SQL (IBM DB2), Java, Vue, and Javascript. 
                </p>
                <p class="pb-6">
                    I originally got my career start as a video producer and graphic designer after graduating 
                    in 2010 with a degree in Mass Media Communications. After my family moved back to New Mexico, 
                    I transitioned to freelance work and photography for about a decade. In late 2018, I found a  
                    renewed interest in coding, web applications, and problem solving. I attended the CNM Ingenuity 
                    Full Stack Web Development Boot Camp in early 2019, and have pursued software development ever 
                    since.
                </p>
                <p>
                    Being a software developer affords me the luxury of learning new concepts and technologies every 
                    day. Pairing this with my former work as a designer has proven to be an amazing career choice!
                </p>
            </div>
        </div>
    </div>
    </section>
</template>

<script setup>
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-shad {
	box-shadow: 6px 6px 0px rgb(73, 56, 47);
}
.column-container {
    column-count: 1;
}

@media screen and (min-width: 768px) {
  .column-container {
    column-count: 2;
  }
}
</style>