<template>
  <div id="home">
    <carousel />
    <discover />
    <explorer />
    <newsletter />
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {
    Carousel: () => import("@/components/Home/Carousel"),
    Discover: () => import("@/components/Home/Discover"),
    Explorer: () => import("@/components/Home/Explorer"),
    Newsletter: () => import("@/components/Home/Newsletter"),
  },
};
</script>
