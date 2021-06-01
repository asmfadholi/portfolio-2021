<template>
  <section class="about-me bg-gray-700 min-h-screen pt-16 pb-16">
    <div class="container mx-auto px-4">
      <div class="relative text-center flex justify-center justify-items-center mb-12">
        <h2 class="text-7xl lg:text-9xl text-gray-600 text-opacity-50 uppercase">
          About Me
        </h2>
        <p class="text-gray-200 absolute title-about-me text-3xl font-semibold leading-relaxed">
          Know Me More
          <span class="border-b-4 border-green-400 block w-20 ml-auto mr-auto" />
        </p>
      </div>
      <sequential-entrance :from-bottom="true">
        <div class="flex flex-col lg:flex-row md:flex-col">
          <div class="w-full lg:w-8/12 md:w-full pl-4 pr-4">
            <h2 class="font-semibold mb-4 text-gray-200 text-3xl">
              I'm <span class="text-green-400">Mochammad Fadholi,</span> a Software Engineer
            </h2>
            <p class="text-gray-300 text-opacity-60 mb-4 text-base leading-loose">
              I found my real interest, since I started my journey as a software engineer for about 3 years ago.
              Curiosity is a provision for me to continue to be thirsty for knowledge
              and to learn more and learn. doing side projects after work is one way
              for me to explore knowledge in the world of IT.
            </p>
            <p class="text-gray-300 text-opacity-60 mb-4 text-base leading-loose">
              The decision that I entered in the IT world took me to a different world which was quite exciting and full of challenges.
            </p>
          </div>

          <div class="w-full pl-4 pr-4 lg:w-4/12 md:w-full">
            <ul class="pl-4 text-gray-200">
              <li v-for="(identity, idx) in identities" :key="idx" class="border-b border-gray-500 pb-4 pt-4 font-normal border-opacity-50">
                <span class="font-semibold">{{ identity.label }}:</span>
                <a v-if="identity.type === 'email'" :href="`mailto:${identity.value}`" class="text-green-400">{{ identity.value }}</a>
                <span v-else>{{ identity.value }}</span>
              </li>
            </ul>
          </div>
        </div>
      </sequential-entrance>
    </div>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      identities: [
        {
          label: 'Name',
          type: 'text',
          value: 'Mochammad Fadholi'
        },
        {
          label: 'Email',
          type: 'email',
          value: 'market.fadholi@gmail.com'
        },
        {
          label: 'Address',
          type: 'text',
          value: 'Jakarta, Indonesia'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.about-me {
  .title-about-me {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
