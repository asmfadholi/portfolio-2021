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
      <div class="flex flex-col lg:flex-row md:flex-col">
        <div class="w-full lg:w-8/12 md:w-full pl-4 pr-4">
          <h2 class="font-semibold mb-4 text-gray-200 text-3xl">
            I'm <span class="text-green-400">Mochammad Fadholi,</span> a Web Developer
          </h2>
          <p class="text-gray-300 text-opacity-60 mb-4 text-base leading-loose">
            I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p class="text-gray-300 text-opacity-60 mb-4 text-base leading-loose">
            Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.
          </p>
        </div>
        <div class="w-full pl-4 pr-4 lg:w-4/12 md:w-full">
          <ul class="pl-4 text-gray-200">
            <li v-for="(identity, idx) in identities" :key="idx" class="border-b border-gray-500 pb-4 pt-4 font-normal border-opacity-50">
              <span class="font-semibold">{{ identity.label }}:</span>
              <a v-if="identity.type === 'email'" :href="`mailto:${identity.value}`" class="text-green-400">Click here</a>
              <span v-else>{{ identity.value }}</span>
            </li>
          </ul>
        </div>
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
          value: 'mochammad.fadholi.st@gmail.com'
        },
        {
          label: 'Age',
          type: 'text',
          value: '26'
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
