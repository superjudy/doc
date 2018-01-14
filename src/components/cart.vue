<template>
  <div class="cart">

    <!-- cart top part -->
    <div class="cart-bar">
      <div class="bar-back" @click="backLastPage">
        <i class="iconfont">&#xe607;</i>
      </div>
      <div class="bar-ipt">购物车</div>
      <div class="bar-quit"></div>
    </div>

    <div class="cart-bg">
      <div class="">
        <ul  v-if="cartMsg.length">
          <li v-for="v in cartMsg" :key="v.index">
            <div class="cart-check">
              <input type="radio"/>
            </div>
            <div class="cart-img">
              <img :src="v.imgSrc"/>
            </div>
            <div class="cart-info">
              <p class="p-title">{{v.title}}</p>
              <p class="p-info">
                <span class="sp-price">{{v.price | priceFormat}}</span>
                <span class="sp-spec">{{v.ram}}</span>
                <span class="sp-spec">{{v.color}}</span>
              </p>
            </div>
            <div class="cart-num" style="display:block;">
              X
              <span>{{v.proCount}}</span>
            </div>

            <!-- edit part 
            <div class="cart-edit" style="display:block;">
              <input type="button" value="+" @click="addNum"/>
              <input type="text" value="1" v-model="proCount"/>
              <input type="button" value="-" @click="subtractNum"/>
            </div>-->

          </li>
         
        </ul>
        <ul v-if="!cartMsg.length">
          <li>
            暂无数据
          </li>
        </ul>
      </div>
    </div>

    <div class="cart-count">
      <div class="count-check">
        <input type="radio"/>
        <span>全选</span>
      </div>
      <div class="count-num">
        合计:<span>￥1000</span>
      </div>
      <div class="count-total">
        结算(<span>10</span>)
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data.json";
export default {
  name: 'cart',
  data () {
    return {
      cartMsg:null,
      proCount:1
    }
  },
  created:function(){ 
    this.param();
  },  
  methods:{
    backLastPage:function(){
      this.$router.go(-1);
    },
    param:function(){
      // let routerParams = this.$route.query;
      // this.cartMsg = routerParams;
      this.cartMsg = this.$store.state.goodsCar;
      console.log(this.cartMsg);
      
    },
    addNum:function(){
      this.proCount++;
    },
    subtractNum:function(){
      this.proCount < 2 ? this.proCount = 1 : this.proCount--;
    },
  },
  filters:{
    priceFormat:function(price){
      return '￥' + price;
    }
  },
  components:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 .cart{
  width:100%;
  height:100%;
  overflow:hidden;
  position:relative;
  .cart-bar{
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
  .cart-bg{
    ul{
      width:100%;
      border-bottom:1px solid #eeeeee;
      li{
        width:100%;
        overflow:hidden;
        padding:15px 0;
        border-top:1px solid #eeeeee;
        .cart-check{
          width:15%;
          float:left;
          text-align:center;
          input{
            display:inline-block;
            margin-top:28px;
          }
        }
        .cart-img{
          width:20%;
          float:left;
          img{
            width:86%;
            display:block;
          }
        }
        .cart-info{
          float:left;
          font-size:10px;
          text-align:left;
          line-height:18px;
          .p-info{
            margin-top:5px;
            .sp-price{
              color:#f87300;
              margin-right:10px;
            }
          }
        }
        .cart-num{
          float:right;
          font-size:10px;
          line-height:4rem;
          margin-right:15px;
        }
        .cart-edit{
          margin-top:25px;
          margin-right:15px;
          input{
            font-size:12px;
            margin:0;
            outline:none;
            display:inline;
            text-align:center;
            float: right;
          }
          input[type="button"]{
            width:18px;
            height:18px;
          }
          input[type="text"]{
            width:22px;
            height:16px;
            border-top:1px solid #cccccc;
            border-bottom:1px solid #cccccc;
          }
        }
      }
    }
    ul:last-child{
      color:#999999;
      font-size: 14px;
    }
  }
  .cart-count{
    width:100%;
    height:40px;
    line-height:40px;
    font-size:12px;
    overflow:hidden;
    position:absolute;
    left:0;
    bottom:48px;
    border-top:1px solid #eeeeee;
    .count-check{
      width:15%;
      float:left;
      text-align:center;
      input{
        display:inline-block;
      }
      span{
        display:inline-block;
        height:40px;
        line-height:40px;
      }
    }
    .count-num{
      width:62%;
      float:left;
      text-align:right;
      span{
        color:#f87300;
        display:inline-block;
        margin-left:10px;
      }
    }
    .count-total{
      float:right;
      width:20%;
      background:#f87300;
      color:#ffffff;
    }
  }
}
</style>
