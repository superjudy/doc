<template>
  <div class="login">
    <div class="login-mi">mi</div>
    <form class="login-form" @submit.prevent="sendLogin">
        <input type="text" placeholder="请输入用户名" ref="username"/>
        <input type="text" placeholder="请输入密码" ref="pwd"/>
        <p v-if="isShow" class="is-show">请正确填写用户名和密码！</p>
        <button>登 录</button>
    </form>
    <router-link to="/home" tag="div" >返回首页</router-link>

    

  </div>
</template>

<script>
import data from "../data.json";
export default {
  name: 'login',
  data () {
    return {
        isShow:false
    }
  },  
  created:function(){  
   
  },  
  methods:{
      sendLogin(){
          let userName = this.$refs.username.value;
          let pwd = this.$refs.pwd.value;
          if(userName && pwd){
            this.$local.save('miPre',{
              login:true,
              userName:userName
            });
            this.$router.push({
              path:'/mine'
            })
          }else{
              this.isShow = true;
          } 
      }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.login{
    width:100%;
    height:100%;
    background:#fdcfa9;
    position:relative;
    overflow:hidden;
    .login-mi{
        margin-top:150px;
        font-size:40px;
        color:#f87205;
        font-weight:bold;
    }
    .login-form{
        width:100%;
        margin-top:30px;
        position:relative;
        input,button{
            width:77%;
            height:40px;
            line-height:40px;
            border:1px solid #f87205;
            border-radius:8px;
            margin-top:20px;
            padding-left:3%;
            font-size:14px;
            outline:none;
        }
        input::-webkit-input-placeholder{
            color:#ccc;
        }
        input::-moz-placeholder{
            color:#ccc;
        }
        input:-moz-placeholder{
            color:#ccc;
        }
        input:-ms-input-placeholder{ 
            color:#ccc;
        }
        button{
            padding:0;
            width:80%;
            background:#f87205;
            margin-top:50px;
            color:#fff;
            font-size:16px;
        }
        p{
            width:77%;
            margin:5px auto 0;
            text-align:left;
            font-size:14px;
            color:red;
        }
    }
}
.login div:last-child{
    margin-top:20px;
    color:#f87205;
}
</style>
