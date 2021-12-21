<template>
  <div id="home">
    <carousel />
    <discover />
    <gradient-top />
    <explorer />
    <gradient-bottom />
    <newsletter />
    <footer-app />
  </div>
</template>

<script>
import FooterApp from "../components/FooterApp.vue";
export default {
  name: "Home",

  components: {
    Carousel: () => import("@/components/Home/Carousel"),
    Discover: () => import("@/components/Home/Discover"),
    GradientTop: () => import("@/components/Home/GradientTop"),
    Explorer: () => import("@/components/Home/Explorer"),
    GradientBottom: () => import("@/components/Home/GradientBottom"),
    Newsletter: () => import("@/components/Home/Newsletter"),
    FooterApp,
  },
};
</script>
