<template>
  <div class="man-add">
    
    <div class="add-btn">
        <router-link to="/addAddress" tag="button">添加新地址</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'manAdd',
  data () {
    return {
    }
  },
  created:function(){  
  },
  components:{
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 .man-add{
     width:100%;
     height:100%;
     position:relative;
     .add-btn{
         position:fixed;
         bottom:0;
         left:0;
         width:100%;
         height:70px;
         background:#eee;
         z-index:999;
         button{
             width:80%;
             height:40px;
             background:#f87205;
             line-height:40px;
             color:#fff;
             font-size:14px;
             border:none;
             border-radius:8px;
             margin:15px auto;
             outline:none;
             cursor:point;
         }
     }
 }
</style>
