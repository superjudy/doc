<template>
  <div class="mi-footer">
    <ul>
        <li>
            <img src="../common/img/footer_home.svg"/>
            <p class="active">主页</p>
        </li>
        <li>
            <img src="../common/img/footer_lei1.svg"/>
            <p>分类</p>
        </li>
        <li>
            <img src="../common/img/footer_cart1.svg"/>
            <p>购物车</p>
        </li>
        <li>
            <img src="../common/img/footer_me1.svg"/>
            <p>我的</p>
        </li>
    </ul>
  </div>
</template>

<script>
import data from "../../data.json";
export default {
  name: 'mi-footer',
  data () {
    return {
    }
  },  
  created:function(){  
  },  
  methods:{
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
