<template>
  <div id="app">
    <mi-foot></mi-foot>
    <transition name="left">
      <router-view class="app-main"/>
    </transition>
    
  </div>
</template>

<script>
import foot from '@/components/foot'; 
export default {
  name: 'app',
  components:{
    'mi-foot':foot
  },
  created:function(){ 
  },  
  methods:{
  }
}
</script>

<style lang="less" scoped>
#app {
  width:100%;
  height:100%;
  position:relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-main{
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
}
.left-enter{
  transform:translateX(100%);
}
.left-enter-active,.left-leave-active {
  transition: all 1s;
}
.left-leave-to{
  transform:translateX(-100%);
}
</style>
