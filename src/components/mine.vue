<template>
  <div class="mine">
    <!-- top info part -->
    <div class="mine-top">
      <div class="bg bg-blur"></div>
      <div style="display:none;">
        <div class="top-info">
          <img src="https://i8.mifile.cn/v1/a1/ecb64c5e-9741-1535-dab6-28d47e2b0d10.webp?width=360&height=360"/>
          <p>my_nickname</p>
        </div>
      </div>
      <div class="top-info">
        <button @click="toLogin">登 录</button>
      </div>
    </div>

    <div class="mine-bd">
      <ul>
        <li>账户与安全
          <span></span>
        </li>
        <li>我的收货地址
          <span></span>
        </li>
        <li>地区设置
          <span></span>
        </li>
        <li>隐私
          <span></span>
        </li>
        <li>通用
          <span></span>
        </li>
      </ul>
      <ul class="ul2">
        <li>通知
          <span></span>
        </li>
        <li>关于mi
          <span></span>
        </li>
        <li>我的客服
          <span></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import data from "../data.json";
export default {
  name: 'mine',
  data () {
    return {
    }
  },
  components:{
  },
  methods:{
    toLogin(){
      this.$router.push({
        path:"/login"
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 .mine{
  width:100%;
  height:100%;
  background:#f4f4f4;
  position:relative;
  .mine-top{
     width:100%;
     height:12rem;
     position:relative;
     overflow:hidden;
     .bg{
      width:100%;
      height:12rem;
      background:url('https://i8.mifile.cn/v1/a1/89a33760-240c-e5e2-50ff-b8a864a2aba5.webp');
    }
    .top-info{
      width:100%;
      height:12rem;
      background:rgba(0,0,0,.4);
      position:absolute;
      left:0;
      top:0;
      text-align:center;
      img{
        width:70px;
        height:70px;
        display:inline-block;
        border-radius:50%;
        border:5px solid rgba(255,255,255,.5);
        margin:40px 0 0 0;
      }
      p{
        width:100%;
        height:30px;
        line-height:30px;
        font-size:18px;
        font-weight:bold;
        color:#ffffff;
        margin:10px 0 0 0;
      }
      button{
        width:140px;
        height:40px;
        border:none;
        border-radius:8px;
        line-height:40px;
        background:#f87205;
        color:#fff;
        font-size:16px;
        margin-top:6.5rem;
        outline:none;
      }
    }
    .bg-blur {
      width: 100%;
      background-repeat: no-repeat;
      background-position: 0 center;
      background-size: cover;
      -webkit-filter: blur(5px);
      filter: blur(5px);
    }
  }
  .mine-bd{
    width:100%;
    height:auto;
    margin-top:20px;
    border-top:1px solid #eeeeee;
    ul{
      width:100%;
      background:#ffffff;
      li{
        width:92%;
        padding:15px 4%;
        border-bottom:1px solid #eeeeee;
        font-size:12px;
        text-align:left;
        color:#333333;
        span{
          float:right;
          width:6px;
          height:6px;
          display:inline-block;
          border-bottom:1px solid #cccccc;
          border-right:1px solid #cccccc;
          transform:rotate(-45deg);
          -webkit-transform:rotate(-45deg);
        }
      }
    }
    .ul2{
      margin-top:20px;
    }
  }

}
</style>
