<template>
  <nav>
    <v-card flat tile>
      <v-app-bar fixed color="white">
        <router-link to="/"
          ><img :src="logo" height="40" width="180" alt="Adriaticante"
        /></router-link>

        <v-spacer></v-spacer>
        <v-tabs
          align-with-title
          class="d-flex justify-end mr-5"
          :color="'font'"
        >
          <v-tab
            v-for="item in itemsNavigation"
            :key="item.title"
            class="hidden-sm-and-down secondary--text"
            router
            :to="{ name: item.link }"
            >{{ item.title }}
          </v-tab>
        </v-tabs>
        <v-btn
          depressed
          color="secondary primary--text"
          class="font-weight-light rounded-0 hidden-sm-and-down mr-5"
        >
          Sign Up
        </v-btn>

        <v-icon
          size="35"
          color="secondary"
          class="ml-3"
          @click="drawer = !drawer"
          >mdi-sort-variant</v-icon
        >
      </v-app-bar>
    </v-card>
    <v-navigation-drawer v-model="drawer" app width="320">
      <v-list dense class="display-2">
        <v-container class="d-flex justify-center">
          <img
            :src="logo"
            alt="Adriaticante"
            height="50"
            class="d-flex justify-center"
          />
          <v-icon
            size="35"
            color="secondary"
            class="ml-3"
            @click="drawer = !drawer"
            >mdi-sort-variant</v-icon
          >
        </v-container>
        <v-container class="d-flex justify-center">
          <v-btn
            color="secondary primary--text"
            class="rounded-0 font-weight-light"
            elevation="5"
          >
            Sign Up
          </v-btn>
        </v-container>
        <v-divider></v-divider>

        <v-list
          v-for="item in itemsNavigation"
          :key="item.title"
          router
          :to="{ name: item.link }"
        >
          <v-list-item
            v-if="item.list == false"
            router
            :to="{ name: item.link }"
          >
            <v-list-item-icon>
              <v-icon color="icon" v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-title class="font--text" v-text="item.title">
            </v-list-item-title>
          </v-list-item>

          <v-list-group v-if="item.list == true" color="light" :value="false">
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon color="icon" v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-title class="font--text" v-text="item.title">
              </v-list-item-title>
            </template>
            <v-list-item
              v-for="(service, i) in services"
              :key="i"
              link
              router
              :to="{ name: item.link }"
            >
              <v-list-item-icon>
                <v-icon class="ml-1" color="icon" size="15"
                  >mdi-square-medium</v-icon
                >
              </v-list-item-icon>
              <v-list-item-title
                class="font--text"
                v-text="service.title"
              ></v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-list>

      <v-divider></v-divider>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import logo from "./../assets/logo/adriaticante.png";

export default {
  name: "Navbar",
  data() {
    return {
      title: "JoyceDesignInterieur",
      drawer: false,
      selectedItem: 1,
      logo: logo,
      itemsNavigation: [
        {
          title: "Properties",
          icon: "mdi-account",
          link: "Properties",
          list: false,
        },
        {
          title: "About us",
          icon: "mdi-folder-multiple",
          link: "About",
          list: false,
        },
        {
          title: "Contact",
          icon: "mdi-contacts",
          link: "Contact",
          list: false,
        },
      ],
    };
  },
};
</script>

