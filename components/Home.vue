<template>
  <div class="home relative h-screen">
    <div class="absolute top-0 left-0 h-full w-full z-10 bg-gray-800 bg-opacity-75" />
    <v-lazy-image
      class="background absolute top-0 left-0 h-full w-full z-0"
      :src="Home"
      alt=""
      :src-placeholder="HomeMin"
    />
    <div class="flex justify-center justify-items-center z-20 relative text-white h-full">
      <div class="text-center mt-auto mb-auto text-gray-100">
        <p class="text-3xl mb-4 font-medium">
          Welcome
        </p>
        <vue-typed-js
          :strings="['I\'m Fadholi. ', 'I\'m a Software Engineer.']"
          :back-speed="100"
          :loop="true"
          :back-delay="800"
          :type-speed="100"
          :smart-backspace="true"
        >
          <h2 class="text-6xl mb-4 font-semibold typing" />
        </vue-typed-js>
        <p class="text-2xl mb-2 font-normal text-gray-200">
          based in Jakarta, Indonesia.
        </p>
      </div>
    </div>
    <nuxt-link class="absolute bottom-4 left-0 z-20 w-8 h-14 container-animation-chevron" to="/about-me">
      <img src="~assets/images/chevron-down.svg" alt="chevron" class="w-5 h-full object-contain relative animation-chevron">
    </nuxt-link>
  </div>
</template>

<script>
import Home from '@/assets/images/home.webp'
import HomeMin from '@/assets/images/home-min.webp'

export default {
  data () {
    return {
      Home,
      HomeMin
    }
  }
}
</script>

<style lang="scss">
.home {
  .v-lazy-image {
  filter: blur(1px);
  transition: filter 0.7s;
  }
  .v-lazy-image-loaded {
    filter: blur(0);
  }
  .background {
    overflow: hidden;
    z-index: 1;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .typed-cursor {
    font-size: 3.75rem;
    line-height: 1;
    margin-bottom: 1rem;
  }
  .container-animation-chevron {
    left: 50%;
    .animation-chevron {
      animation: mymove 1.5s;
      animation-iteration-count: infinite;
    }
  }
  @keyframes mymove {
    from {
      opacity: 1;
      bottom: 1.5rem;
    }
    to {
      bottom: 0rem;
      opacity: 0;
    }
  }
}
</style>
