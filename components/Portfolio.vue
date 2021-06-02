<template>
  <section class="portfolio bg-gray-700 min-h-screen pt-16 pb-16">
    <div class="container mx-auto px-4">
      <div class="relative text-center flex justify-center justify-items-center mb-12">
        <h2 class="text-7xl lg:text-9xl text-gray-600 text-opacity-50 uppercase">
          My Works
        </h2>
        <p class="text-gray-200 absolute title-about-me text-3xl font-semibold leading-relaxed">
          Portfolio
          <span class="border-b-4 border-green-400 block w-20 ml-auto mr-auto" />
        </p>
      </div>
      <h3 class="font-semibold mb-4 text-gray-200 text-xl">
        Here some of <span class="text-green-400">my result</span> :
      </h3>
      <div class="list">
        <sequential-entrance>
          <div v-for="(each, idx) in list" :key="idx" class="h-80 wrapper">
            <a :href="each.link" target="_blank">
              <img :src="each.image" alt="" class="h-80 object-cover rounded-sm">
            </a>
          </div>
        </sequential-entrance>
      </div>
    </div>
  </section>
</template>

<script>
// import transfr from '@/assets/images/transfr.png'
// import desa from '@/assets/images/desa.png'
// import outing from '@/assets/images/outing.png'
// import vms from '@/assets/images/vms.png'
// import jojonomic from '@/assets/images/jojonomic.png'
// import biznis from '@/assets/images/biznis.png'
// import urbanhire from '@/assets/images/urbanhire.png'
// import pazarin from '@/assets/images/pazarin.png'

import 'vue-sequential-entrance/vue-sequential-entrance.css'

export default {
  data () {
    return {
      list: [
        {
          image: 'https://github.com/asmfadholi/portfolio-2021/raw/master/assets/images/transfr.png',
          link: 'https://transfr-web.firebaseapp.com'
        },
        {
          image: 'https://github.com/asmfadholi/portfolio-2021/raw/master/assets/images/desa.png',
          link: 'https://desa-wisata-c1a52.web.app'
        },
        {
          image: 'https://github.com/asmfadholi/portfolio-2021/raw/master/assets/images/outing.png',
          link: 'https://www.outing.id'
        },
        {
          image: 'https://github.com/asmfadholi/portfolio-2021/raw/master/assets/images/vms.png',
          link: 'https://vms.outing.id'
        },
        {
          image: 'https://github.com/asmfadholi/portfolio-2021/raw/master/assets/images/jojonomic.png',
          link: 'https://corp.jojonomic.com'
        },
        {
          image: 'https://github.com/asmfadholi/portfolio-2021/raw/master/assets/images/biznis.png',
          link: 'https://biznis.id'
        },
        {
          image: 'https://github.com/asmfadholi/portfolio-2021/raw/master/assets/images/urbanhire.png',
          link: 'https://www.urbanhire.co/employers'
        },
        {
          image: 'https://github.com/asmfadholi/portfolio-2021/raw/master/assets/images/pazarin.png',
          link: 'https://pazarin-id.web.app'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.portfolio {
  .title-about-me {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .list {
    span {
      display: grid;
      grid-template-columns: repeat(3,minmax(0,1fr));
      gap: 10px;
      img {
        transition: all 0.25s ease-in-out;
        width: 100%;
        opacity: 0.7;
      }
    }
    @media (max-width: 640px) {
      span {
        grid-template-columns: repeat(1,minmax(0,1fr));
      }
    }
    .wrapper {
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
