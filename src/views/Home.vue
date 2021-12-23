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
    GradientTop: () => import("@/components/Gradient/GradientPrimaryTop"),
    Explorer: () => import("@/components/Home/Explorer"),
    GradientBottom: () => import("@/components/Gradient/GradientPrimaryBottom"),
    Newsletter: () => import("@/components/Newsletter/Newsletter"),
    FooterApp,
  },
};
</script>
