<template>
  <div id="home">
    <carousel />
    <discover />
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {
    Carousel: () => import("@/components/Home/Carousel"),
    Discover: () => import("@/components/Home/Discover"),
  },
};
</script>
