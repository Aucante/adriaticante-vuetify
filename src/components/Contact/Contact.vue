<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="10"
        lg="10"
        xl="10"
        offset-sm="1"
        offset-md="1"
        offset-lg="1"
        offset-xl="1"
      >
        <v-row>
          <v-col
            cols="12"
            sm="4"
            md="4"
            lg="4"
            xl="4"
            class="d-flex align-center"
          >
            <div>
              <div class="display-2 font-weight-light secondary--text my-10">
                CONTACT US
              </div>
              <p class="font-weight-light secondary--text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                consequatur tenetur architecto distinctio quis corporis
                cupiditate fugit minus, placeat impedit, eaque exercitationem
                hic maxime temporibus et qui, quo repellat quia!
              </p>
            </div>
          </v-col>
          <v-col
            cols="12"
            sm="4"
            md="4"
            lg="4"
            xl="4"
            offset-sm="4"
            offset-md="4"
            offset-lg="4"
            offset-xl="4"
            class="d-flex align-center"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              :src="picture"
              gradient="to top right, rgba(100,115,201,.1), rgba(0,0,0,.7)"
            >
            </v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      picture: require("./../../assets/image/contact.jpg"),
    };
  },
};
</script>