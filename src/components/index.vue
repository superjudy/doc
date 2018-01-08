<template>
  <div class="index">
    <search-bar></search-bar>
    <div class="banner-bg">
      <banner></banner>
      <mi-menu></mi-menu>
      <star-goods></star-goods>
      <new-goods></new-goods>
      <intelligence-goods></intelligence-goods>
      <new-home-goods></new-home-goods>
      <search></search>
    </div>
    <mi-footer></mi-footer>
    
  </div>
</template>

<script>
import searchBar from "./index/searchBar";
import banner from "./index/banner";
import footer from "./index/footer";
import starGoods from "./index/starGoods";
import newGoods from "./index/newGoods";
import intelligenceGoods from "./index/intelligenceGoods";
import newHomeGoods from "./index/newHomeGoods";
import menu from "./index/menu";
import search from "./index/search";
import data from "../data.json";
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components:{
    'search-bar': searchBar,
    'banner': banner,
    'mi-footer':footer,
    'star-goods':starGoods,
    'new-goods':newGoods,
    'intelligence-goods':intelligenceGoods,
    'new-home-goods':newHomeGoods,
    'mi-menu':menu,
    'search':search
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
</style>
