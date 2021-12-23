<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
        class="d-flex align-center primary"
      >
        <v-col cols="10" offset="1">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="picture"
            gradient="to top right, rgba(100,115,201,.1), rgba(0,0,0,.7)"
          >
          </v-img>
        </v-col>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="8"
        lg="8"
        xl="8"
        class="d-flex align-center primary"
      >
        <v-col cols="10" offset="1"
          ><div>
            <div class="display-1 font-weight-light mb-5">OUR HERITAGE</div>
            <p class="subtitle font-weight-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea vel
              necessitatibus nesciunt suscipit provident natus asperiores
              laudantium, adipisci perspiciatis laboriosam neque sed odio
              recusandae autem obcaecati placeat dolore. Nihil, commodi. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              dolorem pariatur nulla harum dolorum veritatis corrupti
              voluptatibus atque soluta, delectus suscipit numquam, fugiat ipsa
              placeat obcaecati nesciunt neque sint itaque? Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Autem nulla, adipisci
              dolorem tempore nam quas eius ipsam blanditiis accusamus saepe
              nostrum cum obcaecati vitae esse, accusantium veritatis facilis
              totam quae.
            </p>
            <p class="subtitle font-weight-bold secondary--text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea vel
              necessitatibus nesciunt suscipit provident natus asperiores
              laudantium, adipisci perspiciatis laboriosam neque sed odio
              recusandae autem obcaecati placeat dolore. Nihil, commodi. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              dolorem pariatur nulla harum dolorum veritatis corrupti
              voluptatibus atque soluta, delectus suscipit numquam, fugiat ipsa
              placeat obcaecati nesciunt neque sint itaque?
            </p>
          </div></v-col
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      picture: require("./../../assets/image/adriatic1.jpg"),
    };
  },
};
</script>