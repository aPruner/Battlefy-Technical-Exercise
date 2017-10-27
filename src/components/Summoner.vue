<template>
  <div class="Summoner">
    <div class="box">
      {{ summonerName }}
    </div>
  </div>
</template>

<script>
// import APICaller from '../APICaller';
export default {
  name: 'Summoner',
  data() {
    return {
    };
  },
  methods: {
    getSummoner: function(summonerName) {
      APICaller.getSummonerByName(summonerName).then((summoner) => {
        debugger;
        console.log(summoner.name)
        this.summoners.push(summoner.name);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
