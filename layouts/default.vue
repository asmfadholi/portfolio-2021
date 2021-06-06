<template>
  <div>
    <SideBar />
    <div class="ml-16 lg:ml-64 wrap-content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  }
}
</script>
<style>
.wrap-content {
  transition: margin 0.5s ease-in-out;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.v-lazy-image {
  filter: blur(5px);
  transition: filter 0.7s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
