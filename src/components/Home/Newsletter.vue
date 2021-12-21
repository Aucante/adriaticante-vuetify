<template>
  <v-container fluid class="my-10">
    <v-container>
      <p
        class="
          d-flex
          justify-center
          display-2
          my-8
          secondary--text
          font-weight-light
        "
      >
        NEWSLETTER
      </p>
      <v-divider></v-divider>
    </v-container>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="8"
          md="8"
          lg="6"
          xl="4"
          offset-sm="2"
          offset-md="2"
          offset-lg="3"
          offset-xl="4"
        >
          <v-text-field
            color="secondary"
            background-color="primary"
            label="Email"
            hint="Example@example.com"
            class="rounded-0"
            filled
            clearable
            autofocus
            solo
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="8"
          md="8"
          lg="6"
          xl="4"
          offset-sm="2"
          offset-md="2"
          offset-lg="3"
          offset-xl="4"
        >
          <v-checkbox
            v-model="selected1"
            @click="selected1 = true"
            color="secondary"
            label="Vous acceptez de recevoir nos derniers articles de blog par email"
            value="John"
            class="my-n5"
          ></v-checkbox>
          <v-checkbox
            v-model="selected2"
            @click="selected2 = true"
            color="secondary"
            label="Vous acceptez de recevoir des publicités de nos partenaires"
            value="John"
            class="my-n5"
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="8"
          md="8"
          lg="6"
          xl="4"
          offset-sm="2"
          offset-md="2"
          offset-lg="3"
          offset-xl="4"
          class="d-flex justify-center"
        >
          <p class="caption font--text">
            Vous affirmez avoir pris connaissance de notre politique de
            confidentialité. Vous pouvez vous désinscrire à tout moment à l'aide
            des liens de désinscription ou en nous contactant à l'adresse
            xxx@adriaticante.com.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="d-flex justify-center">
      <v-btn
        depressed
        color="secondary white--text"
        class="rounded-0 hidden-sm-and-down"
      >
        Sign up
      </v-btn>
    </v-container>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      selected1: false,
      selected2: false,
    };
  },
};
</script>