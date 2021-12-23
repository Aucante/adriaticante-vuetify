<template>
  <div id="about">
    <navbar-container />
    <about-main />
    <about-description />
    <about-skill />
    <about-figures />
    <newsletter />
    <footer-app />
  </div>
</template>

<script>
import FooterApp from "../components/FooterApp.vue";
export default {
  name: "About",

  components: {
    NavbarContainer: () => import("@/components/NavbarContainer"),
    AboutMain: () => import("@/components/About/AboutMain"),
    AboutDescription: () => import("@/components/About/AboutDescription"),
    AboutSkill: () => import("@/components/About/AboutSkill"),
    AboutFigures: () => import("@/components/About/AboutFigures"),
    Newsletter: () => import("@/components/Newsletter/Newsletter"),
    FooterApp,
  },
};
</script>