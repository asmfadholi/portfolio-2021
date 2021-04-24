<template>
  <section class="bg-gray-700 min-h-screen pt-16 pb-16 flex justify-center justify-items-center px-4">
    <div class="relative flex justify-center justify-items-center flex-col">
      <h2 class="text-7xl lg:text-9xl text-gray-500 text-opacity-90 uppercase text-center">
        404
      </h2>
      <div class="text-center mb-12">
        <p class="text-gray-200 text-xl lg:text-3xl font-semibold leading-relaxed lg:leading-loose max-w-xl lg:max-w-3xl">
          <span class="text-green-400 text-opacity-90">
            OOPS!
          </span> This is awkward... You are looking for something that doesn't actually exist.
          <span class="border-b-4 border-green-400 block w-20 ml-auto mr-auto" />
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  scrollToTop: true
})
</script>

<style>
</style>
