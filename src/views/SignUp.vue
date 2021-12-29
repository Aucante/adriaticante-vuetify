<template>
  <div id="signUp">
    <spacing-container />
    <sign-up-form />
    <spacing-container />
    <footer-app />
  </div>
</template>

<script>
import FooterApp from "../components/FooterApp.vue";
export default {
  name: "SignUp",

  components: {
    SpacingContainer: () => import("@/components/SpacingContainer"),
    SignUpForm: () => import("@/components/Register/SignUpForm"),
    FooterApp,
  },
};
</script>