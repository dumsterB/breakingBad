<template>
<div>
<h1>5 people who have more deaths</h1>
</div>
</template>

<script>
export default {
  name: "Rating",
  data(){
    return{

    }
  },
  computed:{
   winners(){
     return this.$store.getters.winners
   }
  },
  mounted() {
    this.$store.dispatch('getWinners')
  }
}
</script>

<style scoped>

</style>