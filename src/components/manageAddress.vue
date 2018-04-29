<template>
  <div class="man-add">
    <div class="add-top-bar">
      <div class="bar-back" @click="backLastPage">
        <i class="iconfont">&#xe607;</i>
      </div>
      <div class="bar-ipt">管理收货地址</div>
      <div class="bar-quit"></div>
  </div>
    <ul>
      <li>
        <p>
          <span>白玉汤</span>
          <span>12312312312</span>
        </p>
        <p>北京市东城区七侠镇同福客栈</p>
      </li>
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
    backLastPage:function(){
      this.$router.push('/mine');
    },
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
     overflow:hidden;
     .add-top-bar{
        width:100%;
        height:40px;
        line-height:40px;
        padding:6px 0 15px;
        text-align:center;
        overflow:hidden;
        background:#fff;
        .bar-back{
            width:15%;
            float:left;
            cursor:pointer;
            i{
                color: #333;
            }
        }
        .bar-ipt{
            width:70%;
            float:left;
            color:#333;
            font-size:16px;
            line-height:40px;
            font-weight:bold;
        }
        .bar-quit{
            width:15%;
            float:left;
            cursor:pointer;
        }
    }
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
         margin:0 auto 15px;
         box-shadow:5px 4px 10px #e1e1e1;
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
