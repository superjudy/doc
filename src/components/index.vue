<template>
  <div class="index">
    <!-- <home></home> -->
    <ul class="stack">
      <li v-for="(val,index) in pages" 
          class="stack-item" 
          :style="[transform(index)]">
        <img :src="val.imgSrc"/>
      </li>
    </ul>
    <div class="btn-enter" @click="enterBtn">立即进入</div>
  </div>
</template>

<script>
//import home from './home'; 
import data from "../data.json";
export default {
  name: 'index',
  data () {
    return {
      pages:null,
      currentPage:0,
      opacity:1,
      zIndex:10,
      visible:3
    }
  },
  created:function(){  
    this.pages = data.newGoods.newGoodsList;
  },
  components:{
   // 'home': home 
  },
  methods:{
    enterBtn:function(){
      this.$router.push({
          path:'/home',
      })
    },
    transform:function(index){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 .index{
   width: 100%;
   height:100%;
   background:#565e77;
   overflow:hidden;
   position:relative;
   .stack{
     width:14rem;
     height:14rem;
     position:relative;
     overflow:hidden;
     margin:130px auto 0;
     padding:0;
     perspective: 1000px;
     perspective-origin: 50% 150%;
     -webkit-perspective: 1000px;
     -webkit-perspective-origin: 50% 150%;
     .stack-item{
        height: 14rem;
        width: 14rem;
        border-radius: 4px;
        text-align: center;
        overflow: hidden;
        img{
          width: 100%;
          display: block;
          pointer-events: none;
        }
     }
   }
  .btn-enter{
    width:14rem;
    height:40px;
    background:#f8f8f8;
    color:#565e77;
    line-height:40px;
    font-weight:bold;
    letter-spacing:2px;
    font-size:1.1rem;
    border-radius: 4px;
    margin:80px auto 0;
    box-shadow: 2px 3px 5px #888888;
    cursor:pointer;
  }
 }
</style>
