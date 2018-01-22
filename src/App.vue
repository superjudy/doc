<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components:{
  },
  created:function(){ 
    this.rou();
  },  
  methods:{
    rou:function(){
      this.$router.push({
        path:'/index/home'
      });
    }
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
