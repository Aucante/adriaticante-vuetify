import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.blueGrey.lighten5, 
            secondary: colors.blueGrey.darken4, 
            light: colors.blueGrey.lighten4, 

          },
        },
      },
});
