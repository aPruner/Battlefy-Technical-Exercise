<template>
  <div class="Home">
    {{ msg }}
    <br>
    <button class="is-primary" v-on:click="getSummoner('Anticipate x')">
      Call the Riot API by clicking here!
    </button>
    <br>
    <button class="is-primary">
      Delete all summoners so far by clicking here!
    </button>
    <p>
      Data: {{ summoners }}
    </p>

  </div>
</template>

<script>
import APICaller from '../APICaller';
export default {
  name: 'Home',
  data() {
    return {
      summoners: [],
      msg: 'Welcome to the homepage of Adam\'s LoL stats app, created for battlefy!',
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
