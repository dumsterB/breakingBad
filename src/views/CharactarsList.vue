<template>
  <div>
    <v-container>
      <v-row>
        <v-col md="4" lg="4" v-for="character of characters" :key="character.char_id">
          <v-card
              class="mx-auto"
              max-width="344"
          >
            <v-img
                :src="character.img"
                height="500px"
            ></v-img>
            <v-card-title>{{ character.name }}</v-card-title>
            <v-card-subtitle>{{ character.birthday }}</v-card-subtitle>
            <v-card-text>{{ character.status }}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="orange lighten-2"
                  text
                  @click="goToPage(character)"
              >
                Explore
              </v-btn>
              <v-btn text color="red" @click="addToFavourite(character)">Add to favourite</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Charactars",

  data() {
    return {}
  },
  computed: {
    characters() {
      return this.$store.getters.characters
    }
  },
  async mounted() {
    await this.$store.dispatch('getCharacters')
  },
  methods: {
    goToPage(value) {
      this.$store.dispatch('getCharacterId', value)
      this.$router.push('/character/' + value.char_id)
    },
    addToFavourite(value){
      this.$store.commit('ADD_TO_FAVOURITS',value)
    }
  }
}
</script>

<style scoped>

</style>