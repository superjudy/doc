<template>
  <div class="index">
    <search-bar></search-bar>
  </div>
</template>

<script>
import searchBar from "./index/searchBar";
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

</style>
