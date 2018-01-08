<template>
  <div class="intelligence-goods">
    <div class="intelligence-goods-top">
        <img :src="intelligenceGoodsTop"/>
    </div>
    <div class="intelligence-goods-list">
        <ul>
            <li v-for="val in intelligenceGoodsLists" :key="val.desc">
                <img :src="val.imgSrc"/>
                <p class="p-color">{{val.price}}</p>
                <p>{{val.title}}</p>
                <p>{{val.desc}}</p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import data from "../../data.json";
export default {
  name: 'intelligence-goods',
  data () {
    return {
        intelligenceGoodsTop:null,
        intelligenceGoodsLists:null
    }
  },  
  created:function(){  
    this.intelligenceGoodsTop = data.intelligenceGoods.img;
    this.intelligenceGoodsLists = data.intelligenceGoods.intelligenceGoodsList;
  },  
  methods:{
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.intelligence-goods{
    width:100%;
    color:#333333;
   .intelligence-goods-top{
       width:100%;
       img{
            width:100%;
            display:block;
       }
   }
   .intelligence-goods-list{
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
