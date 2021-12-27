import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      {
        id: 1,
        city: "Dubrovnik",
        country: "Croatia",
        src: require("./../assets/image/dubrovnik1.jpg"),
      },
      {
        id: 2,
        city: "Ljubljana",
        country: "Slovenia",
        src: require("./../assets/image/ljubljana1.jpg"),
      },
      {
        id: 3,
        city: "Roma",
        country: "Italy",
        src: require("./../assets/image/roma1.jpg"),
      },
      {
        id: 4,
        city: "Kotor",
        country: "Montenegro",
        src: require("./../assets/image/kotor1.jpg"),
      },
    ],
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
    assets: [
      {
        id: 1,
        figure: 4,
        content: "Countries",
      },
      {
        id: 2,
        figure: 17,
        content: "Cities",
      },
      {
        id: 3,
        figure: 82,
        content: "Projects",
      },
      {
        id: 4,
        figure: 10,
        content: "Years",
      },
    ],
    contacts: [
      {
        id: 1,
        icon: "mdi-email",
        content: "adriaticante@adriaticante.com",
        divider: true,
      },
      {
        id: 2,
        icon: "mdi-cellphone",
        content: "+33449911775",
        divider: true,
      },
      {
        id: 3,
        icon: "mdi-map-marker-outline",
        content: "Trieste ITALY",
        divider: false,
      },
    ],
    properties: [
      {
        id: 1,
        city: "Trieste",
        country: "Italy",
        content: "Flat with balcony in front of Adriatic",
        img: require("./../assets/image/property1.jpg"),
      },
      {
        id: 2,
        city: "Trieste",
        country: "Italy",
        content: "Flat with balcony in front of Adriatic",
        img: require("./../assets/image/property1.jpg"),
      },
      {
        id: 3,
        city: "Trieste",
        country: "Italy",
        content: "Flat with balcony in front of Adriatic",
        img: require("./../assets/image/property1.jpg"),
      },
    ],
    chips: [
      { id: 1, content: "All" },
      { id: 2, content: "Sold" },
      { id: 3, content: "New Developments" },
      { id: 4, content: "Fully Leased" },
      { id: 5, content: "For Lease" },
    ],
  },
  getters: {
    getCards: (state) => {
      return state.cards
    },
    getSkills: (state) => {
      return state.skills
    },
    getAssets: (state) => {
      return state.assets
    },
    getContacts: (state) => {
      return state.contacts
    },
    getProperties: (state) => {
      return state.properties
    },
    getChips: (state) => {
      return state.chips
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
