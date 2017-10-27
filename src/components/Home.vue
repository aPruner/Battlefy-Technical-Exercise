<template>
  <div class="Home">
    <div class="container">
      <div class="box">
        {{ msg }}
      </div>
    </div>
  </div>
</template>

<script>
  import APICaller from '../APICaller';
  export default {
    name: 'Home',
    data() {
      return {
        summoners: [],
        msg: 'Welcome to the homepage of Adam\'s LoL stats app, created for battlefy! Use the above navigation bar to enter your summoner name and retrieve your LoL stats!',
      };
    },
    methods: {
  //    getSummoner: function(summonerName) {
  //      APICaller.getSummonerByName(summonerName).then((summoner) => {
  //        console.log(summoner.name)
  //        this.summoners.push(summoner.name);
  //      });
  //    },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
