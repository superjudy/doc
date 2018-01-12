<template>
  <div class="product">
    <img :src="proMsg.imgSrc"/>
    <p class="p-title">{{proMsg.title}}</p>
    <div class="pro-info">
      <p class="active">{{proMsg.price | priceFormat}}</p>
      <div class="ipt">
        <span @click="addCart(proMsg)">加入购物车</span>
        <input type="button" value="+" @click="addNum"/>
        <input type="text" value="1" v-model="proCount"/>
        <input type="button" value="-" @click="subtractNum"/>
      </div>
    </div>
    <p>{{proMsg.desc}}</p>

    <!-- pro-detial -->
    <div class="pro-detial">
      <div class="pro-text">
        <h4>产品规格</h4>
        <p>
          颜色：
          <a href="javascript:;" :class='{on:index == colorIndex}' @click="addClassFn(index)" v-for="(value,index) in color" :key="value.id">{{value.text}}</a>
        </p>
        <p>
          规格：
          <a href="javascript:;" :class='{on:a == ramIndex}' @click="addClassFn2(a)" v-for="(value,a) in ram" :key="value.id">{{value.text}}</a>
        </p>
      </div>

      <div>
        <h4>产品详情</h4>
        <ul>
          <li v-for="val2 in attrList" :key="val2">
            <img :src="val2"/>
          </li>
        </ul>
        <ul>
          <li v-for="val in detailList" :key="val">
            <img :src="val"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data.json";
export default {
  name: 'product',
  data () {
    return {
      proMsg:'',
      detailList:null,
      attrList:null,
      color:null,
      ram:null,
      colorIndex:0,
      ramIndex:0,
      proCount:1
    }
  },
  created:function(){
      this.param();
      this.attrList = data.detail.attrList;
      this.detailList = data.detail.detailList;
      this.color = data.detail.goodsAttr.attr.color;
      this.ram = data.detail.goodsAttr.attr.ram;
  },
  components:{
  },
  methods:{
    param:function(){
      let routerParams = this.$route.query;
      this.proMsg = routerParams;
    },
    addClassFn:function(index){
      this.colorIndex = index;
    },
    addClassFn2:function(a){
      this.ramIndex = a;
    },
    addNum:function(){
      this.proCount++;
    },
    subtractNum:function(){
      this.proCount < 2 ? this.proCount = 1 : this.proCount--;
    },
    addCart:function(str){
      this.$router.push({
        path:'/index/cart',
        query:str
      });
      console.log(str);
    }
  },
  filters:{
    priceFormat:function(price){
      return '￥' + price;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 .product{
   img{
     width:100%;
     display:block;
   }
  p{
    width:96%;
    margin:0 auto;
    text-align:left;
    font-size:12px;
    height:26px;
    line-height:26px;
  }
  .p-title{
    font-size:14px;
    line-height:32px;
    height:32px;
  }
  .pro-info{
    width:96%;
    margin:0 auto;
    overflow:hidden;
    height:30px;
    .active{
      width:50%;
      color:#f87205;
      float:left;
      font-size:16px;
      font-weight:bold;
      line-height:30px;
    }
    .ipt{
      width:50%;
      float:right;
      margin-top:4px;
      input{
        width:20px;
        height:20px;
        float:right;
        text-align:center;
        border:0;
        outline:none;
      }
      input[type="text"]{
        width:20px;
        height:18px;
        border-top:1px solid #cccccc;
        border-bottom:1px solid #cccccc;
        font-size:12px;
      }
      span{
        float:right;
        padding:3px 8px;
        font-size:10px;
        cursor:pointer;
        color:#f87205;
        border:1px solid #f87205;
        border-radius:10px;
        margin-left:8px;
      }
    }
  }
  .pro-detial{
    width:100%;
    border-top:1px solid #eeeeee;
    margin:15px auto 0;
    h4{
      width:96%;
      margin:10px auto 5px;
      text-align:left;
      height:36px;
      line-height:36px;
    }
    .pro-text{
      a{
        padding:2px 3px;
        margin:3px 5px;
        border:1px solid #cccccc;
      }
      .on{
        color:#f87205;
        border:1px solid #f87205;
      }
    }
  }
}
</style>
