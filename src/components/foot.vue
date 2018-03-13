<template>
  <div class="foot">
    <!-- footer part -->
    <div class="mi-footer">
      <ul>
          <li>
            <router-link to="/home">
              <i class="iconfont">&#xe601;</i>
              <p class="">主页</p>
            </router-link>
          </li>
          <li>
            <router-link to="/classify">
              <i class="iconfont">&#xe604;</i>
              <p>分类</p>
            </router-link>
          </li>
          <li>
            <router-link to="/cartcartNew">
              <i class="iconfont">&#xe602;</i>
              <p>购物车</p>
            </router-link>
          </li>
          <li>
            <router-link to="/mine">
              <i class="iconfont">&#xe603;</i>
              <p>我的</p>
            </router-link>
          </li>
      </ul>
    </div>
  </div>
</template>

<script> 
import data from "../data.json";
export default {
  name: 'foot',
  data () {
    return {
    }
  },
  components:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
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
            margin-top: 5px;
            img{
                width:22%;
                margin-top:5px;
                display:inline-block;
            }
            i{
              display: block;
              font-size:18px;
            }
            p{
                font-size:10px;
                color:#a6a6a6;
                margin-top:5px;
            }
            .active{
                color:#f87205;
            }
        }
    }
    .router-link-active{
      color:#f87205;
      p{
        color:#f87205;
      }
    }
}
</style>
