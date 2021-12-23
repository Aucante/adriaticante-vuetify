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
          class="d-flex justify-center"
        >
          <v-container
            data-aos="fade-right"
            class="justify-center px-5"
            color="primary"
            width="400"
            outlined
          >
            <div>
              <p class="d-flex justify-center text-h4 font-weight-light">
                {{ skill.title }}
              </p>
            </div>
            <v-icon
              color="secondary"
              size="50"
              class="d-flex justify-center mb-4"
              >{{ skill.icon }}</v-icon
            >
            <div class="mt-7">
              <p class="d-flex justify-center title font-weight-light">
                {{ skill.content }}
              </p>
            </div>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          id: 1,
          title: "Expertise",
          icon: "mdi-hexagon-slice-2",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea vel necessitatibus nesciunt suscipit provident natus asperiores laudantium, adipisci perspiciatis laboriosam neque sed odiorecusandae autem obcaecati placeat dolore. Nihil, commodi.",
          divider: true,
        },
        {
          id: 2,
          title: "Development",
          icon: "mdi-cylinder",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea vel necessitatibus nesciunt suscipit provident natus asperiores laudantium, adipisci perspiciatis laboriosam neque sed odiorecusandae autem obcaecati placeat dolore. Nihil, commodi.",
          divider: true,
        },
        {
          id: 3,
          title: "Production",
          icon: "mdi-battery-10",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea vel necessitatibus nesciunt suscipit provident natus asperiores laudantium, adipisci perspiciatis laboriosam neque sed odiorecusandae autem obcaecati placeat dolore. Nihil, commodi.",
          divider: true,
        },
      ],
    };
  },
};
</script>