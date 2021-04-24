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
</style>
