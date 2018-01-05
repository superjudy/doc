<template>
  <div class="index">
    <search-bar></search-bar>
    <banner></banner>
  </div>
</template>

<script>
import searchBar from "./index/searchBar";
import banner from "./index/banner";
import data from "../data.json";
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components:{
    'search-bar': searchBar,
    'banner': banner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 @import "./common/style/reset.css";
</style>
