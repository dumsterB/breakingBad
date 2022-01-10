<template>
<div>
  <v-col cols="4">
    <div class="d-flex justify-center">
      <v-text-field
          label="Search"
          append-icon="mdi-magnify"
          v-model="inputSearch"
      ></v-text-field>
    </div>
    <div>
        <ul>
          <li v-for="episode of filteredProducts" :key="episode.episode_id">
      <p> {{episode.title}}</p>
          </li>
        </ul>
      </div>
  </v-col>
</div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      inputSearch:''
    }
  },
  computed:{
    episodes(){
     return  this.$store.getters.episodes
    },
    filteredProducts: function() {
      var that = this;
      return this.episodes.filter(function(product) {
        return product.title.toLowerCase().indexOf(that.inputSearch.toLowerCase()) !== -1;
      });
    }
  },
  mounted() {
    this.$store.dispatch('getEpisodes')
  }
}
</script>

<style scoped>

</style>