<template>
  <div id="home">
    <navbar-container />
    <contact />
    <gradient-top />
    <contact-form />
    <gradient-bottom />
    <contact-details />
    <newsletter-form />
    <footer-app />
  </div>
</template>

<script>
import FooterApp from "../components/FooterApp.vue";
export default {
  name: "Home",

  components: {
    NavbarContainer: () => import("@/components/NavbarContainer"),
    Contact: () => import("@/components/Contact/Contact"),
    GradientTop: () => import("@/components/Home/GradientTop"),
    ContactForm: () => import("@/components/Contact/ContactForm"),
    GradientBottom: () => import("@/components/Home/GradientBottom"),
    ContactDetails: () => import("@/components/Contact/ContactDetails"),
    NewsletterForm: () => import("@/components/Newsletter/NewsletterForm"),
    FooterApp,
  },
};
</script>
