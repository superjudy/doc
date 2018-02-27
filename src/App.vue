<template>
  <div id="app">
    <mi-foot></mi-foot>
    <router-view/>
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
</style>
