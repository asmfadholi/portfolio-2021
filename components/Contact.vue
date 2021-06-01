<template>
  <section class="contact bg-gray-700 min-h-screen pt-16 pb-16">
    <div class="container mx-auto px-4">
      <div class="relative text-center flex justify-center justify-items-center mb-12">
        <h2 class="text-7xl lg:text-9xl text-gray-600 text-opacity-50 uppercase">
          Reach Me
        </h2>
        <p class="text-gray-200 absolute title-about-me text-3xl font-semibold leading-relaxed">
          Contact
          <span class="border-b-4 border-green-400 block w-20 ml-auto mr-auto" />
        </p>
      </div>
      <div class="list">
        <sequential-entrance :from-bottom="true">
          <div v-for="(each, idx) in list" :key="idx" class="wrapper">
            <a :href="each.link" target="_blank">
              <img :src="each.image" alt="">
            </a>
          </div>
        </sequential-entrance>
      </div>
    </div>
  </section>
</template>

<script>
import linkedin from '@/assets/images/linkedin.webp'
import facebook from '@/assets/images/facebook.webp'
import instagram from '@/assets/images/instagram.webp'
import github from '@/assets/images/github.webp'

import 'vue-sequential-entrance/vue-sequential-entrance.css'

export default {
  data () {
    return {
      list: [
        {
          image: linkedin,
          link: 'https://www.linkedin.com/in/mochammad-fadholi'
        },
        {
          image: facebook,
          link: 'https://web.facebook.com/mochammad.fadholi'
        },
        {
          image: instagram,
          link: 'https://www.instagram.com/asmfadholii'
        },
        {
          image: github,
          link: 'https://github.com/asmfadholi'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.contact {
  .title-about-me {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .list {
    span {
      display: flex;
      justify-content: center;
      align-content: center;
      img {
        transition: all 0.25s ease-in-out;
        width: 60px;
        height: 60px;
        object-fit: contain;
        opacity: 0.8;
      }
    }
    .wrapper {
      padding: 10px;
      overflow: hidden;
    }
    .wrapper:hover {
      overflow: hidden;
      img {
        transform: scale(1.1);
        transition: all 0.25s ease-in-out;
        opacity: 1;
      }
    }
  }
}
</style>
