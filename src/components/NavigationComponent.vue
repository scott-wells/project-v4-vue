<template>
    <header class="z-10 font-medium text-brown-900 bg-none h-12 px-4 flex items-center w-full sticky top-0">
        <nav class="flex justify-between w-full">
            <div>
                <p class="font-black text-2xl tracking-tighter">SW</p>
            </div>
            <div class="flex items-center">
                <ul class="grid grid-rows-1 grid-cols-2 gap-2">
                    <li class="flex place-content-center">
                        <a class="" href="#">Skills</a>
                    </li>
                    <li class="flex place-content-center">
                        <a class="" href="#">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'NavigationComponent',
    props: {
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>