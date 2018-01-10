<template>
  <div class="search">
    <div class="top-bar">
      <div class="bar-back">
        <img src="common/img/back1.svg"/>
      </div>
      <div class="bar-ipt">
        <input type="text"/>
      </div>
      <div class="bar-quit">取消</div>
    </div>

    <div class="search-img">
      <img :src="searchImg"/>
    </div>
    
    <div class="hot-words">
      <a href="javascript:;">热词1</a>
    </div>
  </div>  
</template>

<script>
import data from "../data.json";
export default {
  name: 'search',
  data () {
    return {
      searchImg:null
    }
  }, 
  created:function(){ 
    this.searchImg = data.searchImg;
  },  
  methods:{
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.search{
  width:100%;
  height:100%;
  position:fixed;
  top:0px;
  bottom:0px;
  left:0;
  z-index:999;
  background:#f8f8f8;
  overflow-y:auto;
  font-size:12px;
  .top-bar{
    width:100%;
    height:40px;
    line-height:40px;
    text-align:center;
    overflow:hidden;
    background:#dddddd;
    .bar-back{
      width:15%;
      float:left;
      cursor:pointer;
      img{
        width:30%;
        display:inline-block;
        margin-top:12px;
      }
    }
    .bar-ipt{
      width:70%;
      float:left;
      input{
        width:100%;
        height:26px;
        font-size:12px;
        line-height:26px;
        border-radius:5px;
        border:0;
        outline:none;
        padding-left:5px;
      }
    }
    .bar-quit{
      width:15%;
      float:left;
      cursor:pointer;
    }
  }
  .search-img{
    width:100%;
    text-align:center;
    margin:15px auto;
    img{
      width:94%;
      display:inline-block;
    }
  }
  .hot-words{
    width:94%;
    margin:0 auto;
    text-align:left;
    a{
      padding:3px 5px;
      border:1px solid #cccccc;
      margin:3px 5px;
      display:inline-block;
    }
  }
}
</style>
