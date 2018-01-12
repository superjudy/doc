<template>
  <div class="home-goods">
    <div class="home-goods-top">
        <img :src="homeGoodsTop"/>
    </div>
    <div class="home-goods-list">
        <ul>
            <li v-for="val in homeGoodsLists" :key="val.desc">
                <img :src="val.imgSrc"/>
                <p class="p-color">{{val.price}}</p>
                <p @click="productDetial(val)">{{val.title}}</p>
                <p>{{val.desc}}</p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import data from "../../data.json";
export default {
  name: 'new-goods',
  data () {
    return {
        homeGoodsTop:null,
        homeGoodsLists:null
    }
  },  
  created:function(){  
    this.homeGoodsTop = data.newHomeGoods.img;
    this.homeGoodsLists = data.newHomeGoods.newHomeGoodsList;
  },  
  methods:{
      productDetial:function(str){
          this.$router.push({
              path:'/productDetial',
              query:str
          })
      }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.home-goods{
    width:100%;
    color:#333333;
   .home-goods-top{
       width:100%;
       img{
            width:100%;
            display:block;
       }
   }
   .home-goods-list{
       width:100%;
       ul{
           width:100%;
           overflow:hidden;
           li{
               float:left;
               width:47.4%;
               margin:1.3%;
               img{
                   width:100%;
                   display:block;
               }
               p{
                   font-size:10px;
                   line-height:18px;
                   text-align:left;
                   padding-left:6px;
               }
               .p-color{
                   color:#f87205;
                   font-size:12px;
               }
           }
       }
   }
}
</style>
