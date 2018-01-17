<template>
  <div class="mine">
    <!-- top info part -->
    <div class="bg bg-blur">
    </div>
    <div class="top-info">
      <img src="https://i8.mifile.cn/v1/a1/ecb64c5e-9741-1535-dab6-28d47e2b0d10.webp?width=360&height=360"/>
      <p>my_nickname</p>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 .mine{
   width:100%;
   height:100%;
   position:relative;
   .bg{
     width:100%;
     height:100%;
     background:url('https://i8.mifile.cn/v1/a1/89a33760-240c-e5e2-50ff-b8a864a2aba5.webp');
   }
  .top-info{
    width:100%;
    height:100%;
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
       margin:100px 0 0 0;
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
</style>
