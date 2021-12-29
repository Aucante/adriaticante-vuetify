<template>
  <div id="signIn">
    <spacing-container />
    <sign-in-form />
    <spacing-container />
    <footer-app />
  </div>
</template>

<script>
import FooterApp from "../components/FooterApp.vue";
export default {
  name: "SignIn",

  components: {
    SpacingContainer: () => import("@/components/SpacingContainer"),
    SignInForm: () => import("@/components/Register/SignInForm"),
    FooterApp,
  },
};
</script>