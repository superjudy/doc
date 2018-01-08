<template>
  <div class="banner">
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="value in bannerImg" :key="value">
        <img :src="value" alt=""/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import data from "../../data.json";
export default {
  name: 'banner',
  data () {
    return {
      bannerImg:null,
    }
  },  
  created:function(){  
    this.bannerImg = data.banner.bannerTop;
  },  
  methods:{
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.banner{
    width:100%;
    margin:-20px auto 0;
    height: 17rem;
    img{
      display: block;
      width:100%;
    }
}
</style>
