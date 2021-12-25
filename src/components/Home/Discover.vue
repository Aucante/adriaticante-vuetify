<template>
  <v-container fluid>
    <v-card
      color="transparent"
      class="d-flex align-center"
      height="900"
      outlined
      tile
    >
      <v-container>
        <v-container class="my-5">
          <p
            class="
              d-flex
              justify-center
              display-3
              my-8
              secondary--text
              font-weight-light
            "
          >
            {{ title }}
          </p>
          <v-divider></v-divider>
        </v-container>

        <v-container>
          <v-row>
            <v-col
              v-for="card in cards"
              :key="card.id"
              cols="12"
              sm="12"
              md="6"
              lg="6"
              xl="6"
            >
              <v-card
                data-aos="flip-up"
                class="mx-auto my-5"
                max-width="400"
                tile
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="card.src"
                >
                </v-img>

                <v-card-subtitle class="pb-0">{{ card.city }}</v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>{{ card.country }}</div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "DISCOVER",
      btn: "Discover",
      cards: [
        {
          id: 1,
          city: "Dubrovnik",
          country: "Croatia",
          src: require("./../../assets/image/dubrovnik1.jpg"),
        },
        {
          id: 2,
          city: "Ljubljana",
          country: "Slovenia",
          src: require("./../../assets/image/ljubljana1.jpg"),
        },
        {
          id: 3,
          city: "Roma",
          country: "Italy",
          src: require("./../../assets/image/roma1.jpg"),
        },
        {
          id: 4,
          city: "Kotor",
          country: "Montenegro",
          src: require("./../../assets/image/kotor1.jpg"),
        },
      ],
    };
  },
};
</script>