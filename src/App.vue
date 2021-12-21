<template>
  <v-app>
    <navbar />
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    Navbar: () => import("@/components/Navbar"),
  },
};
</script>
