<template>
  <div id="home">
    <carousel />
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {
    Carousel: () => import("@/components/Home/Carousel"),
  },
};
</script>
