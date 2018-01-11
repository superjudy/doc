<template>
  <div class="index">
    <!-- <home></home> -->
    <!-- footer part -->
    <div class="mi-footer">
      <ul>
          <li>
            <router-link to="/index/home">
              <img src="common/img/footer_home.svg"/>
              <p class="active">主页</p>
            </router-link>
          </li>
          <li>
            <router-link to="/index/classify">
              <img src="common/img/footer_lei1.svg"/>
              <p>分类</p>
            </router-link>
          </li>
          <li>
            <router-link to="/index/cart">
              <img src="common/img/footer_cart1.svg"/>
              <p>购物车</p>
            </router-link>
          </li>
          <li>
            <router-link to="/index/mine">
              <img src="common/img/footer_me1.svg"/>
              <p>我的</p>
            </router-link>
          </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
/* import home from './home'; */
import data from "../data.json";
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components:{
    /* 'home': home */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 .index{
   width: 100%;
   height:100%;
   overflow:hidden;
   postion:relative;
   .banner-bg{
     width:100%;
     height:100%;
     padding:40px 0 46px;
     position:absolute;
     top:0px;
     bottom:0px;
     left:0;
     overflow-y:auto;
   }
 }
 .mi-footer{
    width:100%;
    height:46px;
    background:#ffffff;
    position:fixed;
    left:0;
    bottom:0;
    z-index:999;
    border-top:1px solid #f4f4f4;
    ul{
        overflow:hidden;
        li{
            width:25%;
            float:left;
            text-align:center;
            cursor:pointer;
            img{
                width:22%;
                margin-top:5px;
                display:inline-block;
            }
            p{
                font-size:10px;
                color:#a6a6a6;  
            }
            .active{
                color:#f87205;
            }
        }
    }
}
</style>
