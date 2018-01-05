<template>
  <div class="search-bar">
    <div class="search-icon">
      <span class="icon-mi"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchBar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.search-bar{
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0px;
  left: 0px;
  background: #f87300;
  .search-icon{
    width:15%;
    color:#ffffff;
  }
}
</style>
