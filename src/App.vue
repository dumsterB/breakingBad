<template>
  <!-- App.vue -->
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-spacer></v-spacer>
      <v-btn class="mr-2" elevation="0">
        <router-link class="links" to="/episodes">Episodes</router-link>
      </v-btn>
      <v-btn class="mr-2" elevation="0">
        <router-link class="links" to="/characters">Characters</router-link>
      </v-btn>
      <v-btn class="mr-2" elevation="0">
        <router-link class="links" to="/">Main page</router-link>
      </v-btn>
      <v-btn class="mr-2" elevation="0">
        <router-link class="links" to="/favourites">
          Favourites
        </router-link>
      </v-btn>

    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <v-progress-circular
            :size="100"
            color="primary"
            v-show="loader"
            indeterminate
            class="progressor"
        ></v-progress-circular>
        <!-- If using vue-router -->
        <router-view></router-view>

      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {},

  data: () => ({
    drawer: false
  }),
  computed: {
    loader() {
      return this.$store.getters.loading
    },
    favourites() {
      return this.$store.getters.favourites
    }
  },
  watch: {
    '$store.getters.favourites': function (newVal) {
      console.log(newVal);
      this.$store.commit('GET_FAVOURITES');
    }},
  mounted(){
    this.$store.commit('GET_FAVOURITES')
    console.log(process.env.VUE_APP_ROOT_URL)
  }
};
</script>
