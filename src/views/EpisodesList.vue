<template>
  <v-container>
    <v-row>
      <v-col md="4" lg="4" sm="12" v-for="episode in episodes"
             :key="episode.episode_id">
        <v-card
            class="mx-auto"
            max-width="344"
            height="260"

        >
          <v-card-title>
            {{ episode.title }}
          </v-card-title>

          <v-card-subtitle>
            {{ episode.air_date }}
          </v-card-subtitle>
          <v-divider></v-divider>

          <v-card-text>
            {{ episode.characters }}
          </v-card-text>

          <v-card-actions class="cardActions">
            <v-spacer></v-spacer>
            <v-btn
                color="orange lighten-2"
                class="buttonExplore"
                text
                @click="goToPage(episode)"
            >
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Episodes",
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    this.$store.dispatch('getEpisodes')
  },
  computed: {
    episodes() {
      return this.$store.getters.episodes
    }
  },
  methods: {
    goToPage(episode) {
        this.$router.push('/episodes/' + episode.episode_id)
    }
  }
}
</script>

<style scoped>

</style>