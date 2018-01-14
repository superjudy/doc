<template>
  <div class="star-goods">
    <div class="star-goods-top">
        <img :src="starGoodsTop"/>
    </div>
    <div class="star-goods-list">
        <ul>
            <li v-for="value in starGoodsList" :key="value.price">
                <img :src="value.imgSrc"/>
                <p class="p-color">{{value.price}}</p>
                <p>
                    <span>{{value.rom}}</span>
                    <span>{{value.color}}</span>
                </p>
                <p @click="productDetial(value)">{{value.title}}</p>
                <p>{{value.desc}}</p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import data from "../../data.json";
export default {
  name: 'star-goods',
  data () {
    return {
        starGoodsTop:null,
        starGoodsList:null
    }
  },  
  created:function(){  
    this.starGoodsTop = data.starGoods.img;
    this.starGoodsList = data.starGoods.starGoodsList;
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
.star-goods{
    width:100%;
    color:#333333;
   .star-goods-top{
       width:100%;
       img{
            width:100%;
            display:block;
       }
   }
   .star-goods-list{
       width:100%;
       ul{
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
