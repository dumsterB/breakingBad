<template>
  <div>
    <v-card  class="" v-for="item of character" :key="item.char_id" elevation="0">
      <img height="300" :src="item.img" alt="">
      <p v-text="item.name"></p>
      <p v-text="item.birthday"></p>
      <h2 :class="`headline font-weight-light mb-4 `">
        {{item.status}}
      </h2>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Charactar",
  data() {
    return {}
  },
  computed: {
    character() {
      return this.$store.getters.character
    },
  },
  async mounted() {
    await this.$store.dispatch('getCharacters')
  },
}
</script>

<style scoped>

</style>