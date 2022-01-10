<template>
<div >
<v-card v-for="item of episode" :key="item.episode_id" elevation="0">
<h1>{{item.title}}</h1>
  <br>
  <p>{{item.characters}}</p>
</v-card>
</div>
</template>

<script>
export default {
  name: "Episode",
  props:['id'],
  data(){
    return{

    }
  },
  computed:{
    episode(){
      return this.$store.getters.episode
    }
  },
 async mounted() {
  await  this.$store.dispatch('getEpisode')
   let id=this.$route.params.id
   await  this.$store.dispatch('getEpisodeId', id)
 }
}
</script>

<style scoped>

</style>