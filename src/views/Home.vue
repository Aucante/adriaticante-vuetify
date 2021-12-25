<template>
  <div id="home">
    <carousel />
    <spacing-container />
    <discover />
    <spacing-container />
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
    SpacingContainer: () => import("@/components/SpacingContainer"),
    GradientTop: () => import("@/components/Gradient/GradientPrimaryTop"),
    Explorer: () => import("@/components/Home/Explorer"),
    GradientBottom: () => import("@/components/Gradient/GradientPrimaryBottom"),
    Newsletter: () => import("@/components/Newsletter/Newsletter"),
    FooterApp,
  },
};
</script>
