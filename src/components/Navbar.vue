<template>
  <div class="container">
    <nav class="navbar nav-color has-shadow">
      <div class="level">
        <div class="level-left">
          <p class="level-item">
            <router-link to="/" class="button is-info">Home!</router-link>
          </p>
          <div class="level-item">
            <div class="field has-addons">
              <p class="control">
                <input class="input" type="text" placeholder="Summoner Name">
              </p>
              <p class="control">
                <button class="button is-info" v-on:click="getSummoner('SH0CK')">
                  Get Stats!
                </button>
              </p>
            </div>
          </div>
        </div>
        Data: {{ summoners }}
      </div>
    </nav>
  </div>
</template>

<script>
  import APICaller from '../APICaller'
  export default {
    name: 'Navbar',
    data() {
      return {
        summoners: [],
      };
    },
    methods: {
      getSummoner: function(summonerName) {
        APICaller.getSummonerByName(summonerName).then((summoner) => {
          this.summoners.push(summoner);
        });
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    margin-top: 20px;
  }
</style>
