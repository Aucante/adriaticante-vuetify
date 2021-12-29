<template>
  <div id="home">
    <carousel />
    <discover />
    <gradient-top />
    <explorer />
    <gradient-bottom />
    <carousel-properties-last />
    <home-other-properties />
    <home-contact />
    <home-about />
    <newsletter-form />
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
    CarouselPropertiesLast: () =>
      import("@/components/Carousel/CarouselPropertiesLast"),
    HomeOtherProperties: () => import("@/components/Home/HomeOtherProperties"),
    HomeContact: () => import("@/components/Home/HomeContact"),
    HomeAbout: () => import("@/components/Home/HomeAbout"),
    GradientBottom: () => import("@/components/Gradient/GradientPrimaryBottom"),
    NewsletterForm: () => import("@/components/Newsletter/NewsletterForm"),
    FooterApp,
  },
};
</script>
