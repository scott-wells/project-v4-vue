<template>
    <!-- hero container -->
	<header class="h-168 sm:128 bg-hero-mobile sm:bg-hero bg-cover bg-center pl-4 pr-4">
        <!-- nav container -->
        <nav class="bg-none h-20 flex items-center justify-between w-full">
            <div>
                <a class="font-black text-2xl tracking-tighter cursor-pointer">SW</a>
            </div>
            <ul class="flex gap-6">
                <li>
                    <a class="flex-1" href="#">
                        Skills
                    </a>
                </li>
                <li>
                    <a class="flex-1" href="#">
                        Projects
                    </a>
                </li>
            </ul>
        </nav>

        <!-- title container -->
        <div class="flex flex-col items-center justify-center h-hero-custom">
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
    height: calc(100% - 14rem);
}
</style>
