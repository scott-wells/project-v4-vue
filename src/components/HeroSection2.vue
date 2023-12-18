<template>
	<header 
        class="
            py-8 px-6 h-160 sm:128 bg-hero-mobile sm:bg-hero 
            bg-cover bg-center border-b-8 border-brown-primary
        "
    >
        <nav class="w-full bg-none flex items-center justify-between gap-8 text-brown-primary">
            <div class="border-b border-transparent transition-all duration-300 hover:border-brown-secondary">
                <a 
                    class="font-black text-2xl md:text-3xl tracking-tighter cursor-pointer"
                    href="/"
                    target="_top"
                >
                SW
                </a>
            </div>
            <ul class="flex gap-6">
                <li class="border-b border-transparent transition-all duration-500 hover:border-brown-secondary">
                    <a href="#project-section">
                        About
                    </a>
                </li>
                <li class="border-b border-transparent transition-all duration-300 hover:border-brown-secondary">
                    <a href="#project-section">
                        Projects
                    </a>
                </li>
            </ul>
        </nav>

        <div class="h-full pb-36 flex flex-col items-center justify-center">
            <div class="flex flex-col items-center justify-center text-center text-brown-primary">
                <div class="flex flex-col font-black text-7xl tracking-tighter leading-13-half">
                    <span>SCOTT</span>
                    <span>WELLS</span>
                </div>
                <span class="font-thin text-lg tracking-tight leading-loose">SOFTWARE DEVELOPER</span>
                <div class="flex gap-8">
                    <i class="fa-brands fa-codepen text-lg"></i>
                    <i class="fa-brands fa-github text-lg"></i>
                    <i class="fa-brands fa-linkedin text-lg"></i>
                </div> 
            </div>
        </div>
	</header>
</template>

<script setup>
</script>

<style scoped>
.h-hero-custom {
    height: calc(100% - 10rem);
}
</style>
