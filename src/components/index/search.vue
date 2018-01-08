<template>
  <div class="search">
  <!-- 
    <div class"top-bar">
      <div class="bar-back">
        <img src="../common/img/back.svg"/>
      </div>
      <div class"bar-ipt">
        <input type="text"/>
      </div>
      <div class="bar-quit">取消</div>
    </div>
    -->
    
    <div></div>
  </div>
</template>

<script>
import data from "../../data.json";
export default {
  name: 'search',
  data () {
    return {
    }
  },  
  created:function(){  
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
  background:#f4f4f4;
  overflow-y:auto;
  .top-bar{
    width:100%;
    height:40px;
    overflow:hidden;
    .bar-back{
      width:15%;
      float:left;
      img{
        width:80%;
        display:block;
      }
    }
    .bar-ipt{
      width:70%;
      float:left;
    }
    .bar-quit{
      width:15%;
      float:left;
    }
  }
}
</style>
