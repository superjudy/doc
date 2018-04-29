<template>
  <div class="man-add">
    <ul>
      <li>
        <p>
          <span>白玉汤</span>
          <span>12312312312</span>
        </p>
        <p>北京市东城区七侠镇同福客栈</p>
      </li>
    </ul>
    <ul>
      <li v-for="val in addInfos" :key="val.name">
        <p>
          <span>{{val.sName}}</span>
          <span>{{val.sNumber}}</span>
        </p>
        <p>{{val.sDetialAdd}}</p>
      </li>
    </ul>

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
      addInfos:null
    }
  },
  created:function(){
    this.param();
  },
  components:{
  },
  methods:{
    param:function(){
      this.addInfos = this.$store.state.addInfos;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 .man-add{
     width:100%;
     height:100%;
     background:#f4f4f4;
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
     ul{
       li{
         width:100%;
         height:auto;
         background:#fff;
         padding:10px 0;
         overflow:hidden;
         margin:15px auto;
         p{
           width:92%;
           margin:5px auto;
           overflow:hidden;
           font-size:1rem;
           line-height:1.4rem;
           span:first-child{
             float:left;
           }
           span:last-child{
             float:right;
           }
         }
         p:last-child{
           text-align:left;
         }
       }
     }
 }
</style>
