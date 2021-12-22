<template>
  <v-container fluid class="py-15 primary">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="10"
          md="10"
          lg="10"
          xl="8"
          offset-sm="1"
          offset-md="1"
          offset-lg="1"
          offset-xl="2"
        >
          <v-row>
            <v-col cols="6" sm="4" md="4" lg="4" xl="4">
              <v-text-field label="First Name"></v-text-field>
            </v-col>
            <v-col cols="6" sm="4" md="4" lg="4" xl="4">
              <v-text-field label="Last Name"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" sm="4" md="4" lg="4" xl="4">
              <v-text-field label="Email"></v-text-field>
            </v-col>
            <v-col cols="6" sm="4" md="4" lg="4" xl="4">
              <v-text-field label="Phone"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="8" md="8" lg="8" xl="8">
              <v-text-field
                label="Message"
                color="secondary"
                append-icon="mdi-message"
                clearable
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="4"
              md="4"
              lg="4"
              xl="4"
              class="d-flex justify-center"
            >
              <v-btn
                color="secondary primary--text"
                class="font-weight-light rounded-0"
                width="280"
                height="48"
              >
                Send
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>