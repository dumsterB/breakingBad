<template>
<div>
  <h1>favourites</h1>
<v-card class="pa-5" elevation="0">
  <div v-for="(favourite, i) of favourites" :key="favourite.char_id">
    <p>{{i+1}}) {{favourite.name}}</p>
  </div>
</v-card>
</div>
</template>

<script>
export default {
  name: "Favourites",
  data(){
    return{

    }
  },
  computed:{
    favourites(){
      return this.$store.getters.favourites
    }
  },
  mounted() {
    this.$store.commit('GET_FAVOURITES')
  }
}
</script>

<style scoped>

</style>