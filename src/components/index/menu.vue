<template>
  <div class="mi-menu">
    <a href="javascript:;">
      <img :src="bannerBottomImg" alt=""/>
    </a>
    <div class="banner-btm">
      <div class="banner-btm-left">
        <img :src="bannerBtmLeft" alt=""/>
      </div>
      <div class="banner-btm-right">
        <img :src="bannerBtmRight1" alt=""/>
        <img :src="bannerBtmRight2" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../data.json";
export default {
  name: 'mi-menu',
  data () {
    return {
      bannerBottomImg:null,
      bannerBtmLeft:null,
      bannerBtmRight1:null,
      bannerBtmRight2:null
    }
  },  
  created:function(){  
    this.bannerBottomImg = data.banner.img2;
    this.bannerBtmLeft = data.menu.img1;
    this.bannerBtmRight1 = data.menu.img2;
    this.bannerBtmRight2 = data.menu.img3;
  },  
  methods:{
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.mi-menu{
    width:100%;
    height:23rem;
    img{
      display: block;
      width:100%;
    }
    a{
      display: block;
    }
    .banner-btm{
      width: 100%;
      overflow: hidden;
      .banner-btm-left{
        width: 50%;
        float: left;
      }
      .banner-btm-right{
        width:50%;
        float: right;
      }
    }
}
</style>
