<template>
  <div id="properties">
    <navbar-container />
    <map-properties />
    <footer-app />
  </div>
</template>

<script>
import FooterApp from "../components/FooterApp.vue";
export default {
  name: "Properties",

  components: {
    NavbarContainer: () => import("@/components/NavbarContainer"),
    MapProperties: () => import("@/components/Map/MapProperties"),
    FooterApp,
  },
};
</script>