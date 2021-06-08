<template>
  <nav class="fixed top-0 left-0 h-full w-16 lg:w-64 bg-gray-800 text-center sidebar-menu">
    <div class="text-gray-200 flex flex-col h-full p-0 lg:p-4">
      <nuxt-link to="/" class="mt-6 flex justify-center justify-items-center flex-none lg:flex hidden">
        <span class="flex justify-center justify-items-center rounded-full bg-gray-600 p-2">
          <v-lazy-image
            class="rounded-full w-40 h-40 object-cover"
            :src="photo"
            alt="photo"
            :src-placeholder="photoMin"
          />
        </span>
      </nuxt-link>
      <h1 class="text-xl text-gray-200 text-center mb-0 mt-4 font-medium flex-none leading-loose pl-3 pr-3 lg:block hidden">
        Mochammad Fadholi
      </h1>
      <div class="h-full flex justify-center justify-items-center">
        <ul class="m-0 lg:mt-auto lg:mb-auto w-full">
          <li v-for="(menu, idx) in menus" :key="idx" class="text-base transform -rotate-90 lg:rotate-0 h-24 w-24 lg:h-auto lg:w-auto lg:h-full lg:ml-0 lg:mr-0 mt-2 mt-2">
            <nuxt-link :to="menu.to" class="pt-5 lg:pt-2.5 pb-2.5 font-normal w-full h-full block menu text-gray-200">
              {{ menu.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <span class="flex-none lg:block hidden">Heiho</span>
    </div>
  </nav>
</template>

<script>
import photoMin from '@/assets/images/photo-min.webp'
import photo from '@/assets/images/photo.jpeg'

export default {
  data () {
    return {
      photoMin,
      photo,
      menus: [
        {
          name: 'Home',
          to: '/'
        },
        {
          name: 'About Me',
          to: '/about-me'
        },
        // {
        //   name: 'What I Do',
        //   to: '/what-i-do'
        // },
        // {
        //   name: 'Resume',
        //   to: '/resume'
        // },
        {
          name: 'Portfolio',
          to: '/portfolio'
        },
        // {
        //   name: 'Testimonial',
        //   to: '/testimonial'
        // },
        {
          name: 'Contact',
          to: '/contact'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.sidebar-menu {
  transition: width 0.5s ease-in-out;
  .nuxt-link-exact-active.nuxt-link-active {
    color: #34D399;
  }
  .menu:hover {
    color: #34D399;
    transition: color 0.25s ease-in-out;
  }
}
</style>
