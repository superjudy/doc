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
    <div>
      <h4>明星产品</h4>
      <ul>
        <li v-for="v in classifyGoods1">
          <img :src="v.imgSrc"/>
        </li>
      </ul>
    </div>
    <div>
      <h4>新品上新</h4>
      <ul>
        <li v-for="v in classifyGoods2">
          <img :src="v.imgSrc"/>
        </li>
      </ul>
    </div>
    <div>
      <h4>智能家居</h4>
      <ul>
        <li v-for="v in classifyGoods3">
          <img :src="v.imgSrc"/>
        </li>
      </ul>
    </div>
    <div>
      <h4>居家上新</h4>
      <ul class="ul-class">
        <li v-for="v in classifyGoods">
          <img :src="v.imgSrc"/>
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
import data from "../data.json";
export default {
  name: 'classify',
  data () {
    return {
      classifyGoods:null,
      classifyGoods1:null,
      classifyGoods2:null,
      classifyGoods3:null
    }
  },
  computed:{
    data(){
      return this.$store.state.list;
    }
  },
  created:function(){
    this.classifyGoods = data.newHomeGoods.newHomeGoodsList;
    this.classifyGoods1 = data.starGoods.starGoodsList;
    this.classifyGoods2 = data.newGoods.newGoodsList;
    this.classifyGoods3 = data.intelligenceGoods.intelligenceGoodsList;
    this.$store.dispatch('getData');
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
    width:100%;
    height:100%;
    margin:20px auto 0;
    overflow-x:hidden;
    overflow-y:auto;
    h4{
      width:90%;
      margin:0 auto;
      color:#333333;
      height:20px;
      line-height:20px;
      font-size:14px;
      text-align:left;
      font-weight:bold;
    }
    ul{
      width:94%;
      margin:10px auto;
      overflow-x:hidden;
      overflow-y:auto;
      li{
        width:17%;
        margin:10px 1.5%;
        float:left;
        border-radius:10px;
        img{
          width:100%;
          display:block;
          border-radius:10px;
         }
       }
     }
    .ul-class{
      padding-bottom:120px;
    }
   }
}
</style>
