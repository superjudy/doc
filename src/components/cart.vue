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

    <!-- cart part -->
    <div class="cart-bg">
      <div class="">
        <ul  v-if="cartMsg.length">
          <li v-for="(v,index) in cartMsg" :key="v.index">
            <div class="cart-check">
              <input type="checkbox" v-model="v.checked" @click="selectPro(index)"/>
            </div>
            <div class="cart-img">
              <img :src="v.imgSrc"/>
            </div>
            <div class="cart-info">
              <p class="p-title">{{v.title}}</p>
              <p class="p-info">
                <span class="sp-price">{{v.price | cartPriceFormat}}</span>
              </p>
              <p>
                <span class="sp-spec">{{v.ram}}</span>
                <span class="sp-spec">{{v.color}}</span>   
              </p>
            </div>
            <div class="cart-num" v-if="v.isShow" @click="changeProNum(index)">
              X
              <span>{{v.proCount}}</span>
            </div>

            <!-- edit part -->
            <div class="cart-edit" v-if="!v.isShow">
              <input type="button" value="确定" class="ipt-ok" @click="changeProNum(index)"/>
              <input type="button" value="+" @click="changeNum(index,'add')"/>
              <input type="text" v-model="v.proCount"/>
              <input type="button" value="-" @click="changeNum(index,'minus')"/>
            </div>

            <div class="delete-btn" @click="deletePro(index)">
                删除
            </div>
          </li>
         
        </ul>
        <ul v-if="!cartMsg.length">
          <li>
            购物车空空如也，赶快买买买~
          </li>
        </ul>
      </div>
    </div>

    <div class="cart-count">
      <div class="count-check">
        <input type="checkbox" id="all" v-model="allChecked" @click="selectAll()"/>
        <label for="all">全选</label>
      </div>
      <div class="count-num">
        合计:<span>{{countNum | cartPriceFormat}}</span>
      </div>
      <div class="count-total">
        结算(<span>{{countTotal}}</span>)
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
      proCount:1,
      isShow:true,
      countNum:0,
      countTotal:0,
      allChecked:true
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
    changeProNum:function(index){
      for(var i=0;i<this.cartMsg.length;i++){
        if(i == index){
          this.cartMsg[i].isShow = !this.cartMsg[i].isShow;
        }
      }
    },
    changeNum:function(index,type){
      for(var i=0;i<this.cartMsg.length;i++){
        if(i == index && type == 'add'){
          this.cartMsg[i].proCount++;
        }else if(i == index && type == 'minus'){
          this.cartMsg[i].proCount < 2 ? this.cartMsg[i].proCount = 1 : this.cartMsg[i].proCount--;
        }
      }
    },
    deletePro:function(index){
      for(var i=0;i<this.cartMsg.length;i++){
        if(i == index){
          this.cartMsg.splice(index,1);
        }
      }
    },
    selectPro:function(index){
      var self = this;
      for(var i=0;i<self.cartMsg.length;i++){
        if(i == index){
          self.cartMsg[i].checked = !self.cartMsg[i].checked;
          if(!self.cartMsg[i].checked){
            self.allChecked = false;
          }
          console.log(self.cartMsg[i].checked);
        }
      }
    },
    selectAll:function(){
      if(!this.allChecked){
        this.cartMsg.forEach(function(e,i) {
          e.checked = true;
        });
      }else{
        this.cartMsg.forEach(function(e,i) {
          e.checked = false;
        });
      }
      this.allChecked = !this.allChecked;
    }
  },
  filters:{
    cartPriceFormat:function(price){
      return '￥' + price.toFixed(2);
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
    width:100%;
    position:absolute;
    top:40px;
    left:0;
    bottom:88px;
    overflow: hidden;
    overflow-y:scroll;
    ul{
      width:100%;
      height:100%;
      border-bottom:1px solid #eeeeee;
      li{
        width:100%;
        overflow:hidden;
        padding:15px 0;
        border-top:1px solid #eeeeee;
        position:relative;
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
            .sp-spec{
              margin-right:5px;
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
          width:110px;
          float:right;
          margin-top:18px;
          margin-right:10px;
          overflow:hidden;
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
          input[type="button"].ipt-ok{
            width:36px;
            margin-left:5px;
            border:1px solid #ff0000;
            color:#ff0000;
            border-radius:6px;
            background:none;
            font-size:8px;
          }
        }
        .delete-btn{
          width:36px;
          height:18px;
          border-radius:6px;
          border:1px solid #ff0000;
          color:#ff0000;
          line-height:18px;
          font-size:10px;
          text-align:center;
          position:absolute;
          right:10px;
          bottom:15px;
          letter-spacing:1px;
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
