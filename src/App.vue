<template>
  <div id="app">
    <mi-foot></mi-foot>
    <transition name="left">
      <router-view/>
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

<style>
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
.left-enter{
  transform:translateX(100%);
  opacity:0;
}
.left-enter-to{
  transform:translateX(0);
  opacity:1;
}
.left-leave{
  transform:translateX(0);
}
.left-leave-to{
  transform:translateX(-100%);
}
.left-enter-active,.left-leave-active {
  transition: all 1s ease;
}/*
.left-enter{
  transform:translateX(-100%);
}
.left-enter-active,.left-leave-active {
  transition: all 1s ease;
}
.left-leave-to{
  transform:translateX(100%);
}*/
</style>
