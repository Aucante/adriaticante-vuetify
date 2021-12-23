import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.blueGrey.lighten5, //#ECEFF1
            secondary: colors.blueGrey.darken4, //#263238
            light: colors.blueGrey.lighten4, //#CFD8DC
            font: colors.blueGrey.lighten1, //#78909C
            medium: colors.blueGrey.lighten2, //#90A4AE
          },
        },
      },
});
