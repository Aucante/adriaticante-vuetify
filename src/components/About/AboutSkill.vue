<template>
  <v-container fluid class="my-10">
    <v-container>
      <v-row>
        <v-col
          v-for="(skill, i) in skills"
          :key="i"
          cols="12"
          md="4"
          lg="4"
          xl="4"
          class="d-flex align-center justify-center"
        >
          <v-card
            class="d-flex align-center px-5"
            color="transparent"
            height="700"
            width="400"
            outlined
          >
            <div>
              <div data-aos="fade-right">
                <p
                  class="d-flex justify-center text-h3 font-weight-light my-10"
                >
                  {{ skill.title }}
                </p>
              </div>
              <v-icon
                data-aos="fade-right"
                color="secondary"
                size="70"
                class="d-flex justify-center my-10"
                >{{ skill.icon }}</v-icon
              >
              <div data-aos="fade-left" class="mt-7">
                <p class="d-flex justify-center title font-weight-light">
                  {{ skill.content }}
                </p>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    skills() {
      return this.$store.getters.getSkills;
    },
  },
};
</script>