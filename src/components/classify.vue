<template>
  <div class="classify">

    <div class="cl-bar">
      <div class="bar-back" @click="backLastPage">
        <i class="iconfont">&#xe607;</i>
      </div>
      <div class="bar-ipt">商品分类</div>
      <div class="bar-quit"></div>
    </div>

    <div class="cl-pro">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import data from "../data.json";
export default {
  name: 'classify',
  data () {
    return {
    }
  },
  methods:{
    backLastPage:function(){
      this.$router.go(-1);
    }
  },
  components:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 .classify{
    width:100%;
    height:100%;
    overflow:hidden;
    position:relative;
    .cl-bar{
      width:100%;
      height:40px;
      line-height:40px;
      text-align:center;
      overflow:hidden;
      background:#f87300;
      .bar-back{
        width:15%;
        float:left;
        cursor:pointer;
        i{
          color: #ffffff;
        }
      }
      .bar-ipt{
        width:70%;
        float:left;
        color:#ffffff;
        font-size:16px;
        line-height:40px;
        font-weight:blod;
        letter-spacing:5px;
      }
      .bar-quit{
        width:15%;
        float:left;
        cursor:pointer;
      }
  }
  .cl-pro{
     ul{
       width:94%;
       margin:25px auto 40px;
       overflow-x:hidden;
       overflow-y:auto;
       li{
         width:17%;
         height:3.75rem;
         margin:10px 1.5%;
         float:left;
         border:1px solid #cccccc;
         box-sizing:border-box;
         border-radius:10px;
       }
     }
   }
}
</style>
