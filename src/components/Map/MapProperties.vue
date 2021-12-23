<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="12" md="7" lg="7" xl="7">
        <v-row>
          <v-card height="1200" tile outlined>
            <v-img class="white--text" height="1200" :src="map"> </v-img>
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="5" lg="5" xl="5">
        <v-row>
          <v-card height="300" tile outlined
            ><v-img
              class="d-flex align-center white--text"
              height="300"
              :src="search"
              gradient="to top right, rgba(0,0,0,0.7), rgba(0.9,0.9,0.9,.9)"
            >
              <v-row>
                <v-col cols="8" offset="2">
                  <v-container>
                    <div>
                      <div class="mb-4">
                        <v-text-field
                          label="Search"
                          color="white"
                          append-icon="mdi-magnify"
                          dark
                          single-line
                        ></v-text-field>
                      </div>
                      <div>
                        <v-chip color="white" class="ma-1">All</v-chip>
                        <v-chip color="white" class="ma-1">Sold</v-chip>
                        <v-chip color="white" class="ma-1"
                          >New developments</v-chip
                        >
                        <v-chip color="white" class="ma-1">Fully leased</v-chip>
                        <v-chip color="white" class="ma-1">For lease</v-chip>
                      </div>
                    </div>
                  </v-container>
                </v-col>
              </v-row>
            </v-img></v-card
          >
        </v-row>
        <v-row>
          <v-card height="300" tile outlined>
            <v-img
              class="d-flex align-end white--text"
              height="300"
              :src="picture"
              gradient="to top right, rgba(100,115,201,.1), rgba(0,0,0,.7)"
            >
              <v-container class="subtitle">
                <div class="d-flex justify-center text-h6 font-weight-light">
                  Flat with balcony in front of Adriatic
                </div>
                <div
                  class="
                    d-flex
                    justify-center
                    medium--text
                    text-h4
                    font-weight-light
                  "
                >
                  <v-icon color="medium" size="40" class="mr-2"
                    >mdi-map-marker-outline</v-icon
                  >
                  Trieste, Italy
                </div>
              </v-container>
            </v-img>
          </v-card>
        </v-row>
        <v-row>
          <v-card height="300" tile outlined>
            <v-img
              class="d-flex align-end white--text"
              height="300"
              :src="picture"
              gradient="to top right, rgba(100,115,201,.1), rgba(0,0,0,.7)"
            >
              <v-container class="subtitle">
                <div class="d-flex justify-center text-h6 font-weight-light">
                  Flat with balcony in front of Adriatic
                </div>
                <div
                  class="
                    d-flex
                    justify-center
                    medium--text
                    text-h4
                    font-weight-light
                  "
                >
                  <v-icon color="medium" size="40" class="mr-2"
                    >mdi-map-marker-outline</v-icon
                  >
                  Trieste, Italy
                </div>
              </v-container>
            </v-img>
          </v-card>
        </v-row>
        <v-row>
          <v-card height="300" tile outlined>
            <v-img
              class="d-flex align-end white--text"
              height="300"
              :src="picture"
              gradient="to top right, rgba(100,115,201,.1), rgba(0,0,0,.7)"
            >
              <v-container class="subtitle">
                <div class="d-flex justify-center text-h6 font-weight-light">
                  Flat with balcony in front of Adriatic
                </div>
                <div
                  class="
                    d-flex
                    justify-center
                    medium--text
                    text-h4
                    font-weight-light
                  "
                >
                  <v-icon color="medium" size="40" class="mr-2"
                    >mdi-map-marker-outline</v-icon
                  >
                  Trieste, Italy
                </div>
              </v-container>
            </v-img>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      map: require("./../../assets/image/map.png"),
      search: require("./../../assets/image/adriatic1.jpg"),
      picture: require("./../../assets/image/property1.jpg"),
    };
  },
};
</script>

<style scoped>
.subtitle {
  background-color: rgba(0, 0, 0, 0.7);
  height: 100px;
}
</style>

