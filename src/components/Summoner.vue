<template>
  <div class="Summoner">
    <div class="box">
      {{ summonerName }}
    </div>
  </div>
</template>

<script>
import APICaller from '../APICaller';
export default {
  name: 'Summoner',
  data() {
    return {
      summonerName: '',
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
