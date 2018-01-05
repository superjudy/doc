<template>
  <div class="index">
    <search-bar></search-bar>
  </div>
</template>

<script>
import searchBar from "./index/searchBar";
import data from "../data.json";
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components:{
    'search-bar': searchBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 @import "./common/style/reset.css";
</style>
