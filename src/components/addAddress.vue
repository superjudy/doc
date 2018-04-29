<template>
  <div class="add-address">
    <div>
        <div class="add-top-bar">
            <div class="bar-back" @click="backLastPage">
                <i class="iconfont">&#xe607;</i>
            </div>
            <div class="bar-ipt">新增收货地址</div>
            <div class="bar-quit"></div>
        </div>
        <ul class="add-body">
            <li>
                <label for="ipt-name">收件人</label>
                <input name="ipt-name" type="text" class="ipt-name"/>
            </li>
            <li>
                <label for="ipt-number">联系电话</label>
                <input name="ipt-number" type="text" class="ipt-number" @blur="rightNumber"/>
            </li>
            <li>
                <label>所在地区</label>
                <p @click="popPicker" class="sAdd">{{province}} {{city}} {{county}}</p>
            </li>
            <li>
                <label for="ipt-detial">详细地址</label>
                <input name="ipt-detial" type="text" class="ipt-detial"/>
            </li>
        </ul>
        <!--<router-link to="/manageAddress" tag="button" @click="saveCommit">保存</router-link>-->
        <button @click="saveCommit">保存</button>
        <mt-picker :slots="slots" @change="onValuesChange" class="mi-picker"></mt-picker>
    </div>
  </div>
</template>

<script>
import { Picker, Toast } from 'mint-ui';
import myAddress from "../address.json"
export default {
  name: 'add-address',
  data () {
    return {
        slots: [
            {
                flex: 1,
                defaultIndex: 1,    
                values: Object.keys(myAddress),  //省份数组
                className: 'slot1',
                textAlign: 'center'
            }, 
            {
                divider: true,
                content: '-',
                className: 'slot2'
            }, 
            {
                flex: 1,
                values: [],
                className: 'slot3',
                textAlign: 'center'
            },
            {
                divider: true,
                content: '-',
                className: 'slot4'
            },
            {
                flex: 1,
                values: [],
                className: 'slot5',
                textAlign: 'center'
            }
        ],
        province:'省',
        city:'市',
        county:'区/县'
    }
  },
  created:function(){  
  },
  components:{
  },
  methods:{
      backLastPage:function(){
          this.$router.go(-1);
      },
      onValuesChange:function(picker, values) {
        if(myAddress[values[0]]){
            picker.setSlotValues(1,Object.keys(myAddress[values[0]]));
            picker.setSlotValues(2,myAddress[values[0]][values[1]]);
            this.province = values[0];
            this.city = values[1];
            this.county = values[2];
        }
      },
      popPicker:function(){
        let popUp = document.querySelector('.mi-picker');
        popUp.style.bottom = "0px"
      },
      rightNumber:function(){
        let sNumber = document.querySelector('.ipt-number').value;
        if(sNumber.length != 11 || isNaN(sNumber)){
            Toast('请输入正确的手机号码');
        }
      },
      saveCommit:function(str){
          let sName = document.querySelector('.ipt-name').value;
          let sNumber = document.querySelector('.ipt-number').value;
          let sDetial = document.querySelector('.ipt-detial').value;
          let sAdd = this.province + this.city + this.county;
          let sDetialAdd = sAdd + sDetial;
          let addInfo = {
              sName : sName,
              sNumber : sNumber,
              sDetialAdd :sDetialAdd
          }
          this.$store.state.addInfos.push(addInfo);
          if(sName && sNumber && sDetial){
              this.$router.push({
                  path:'/manageAddress',
                  query:str
              })
          }else{
              Toast('请输入收件人');
          }
      }
  },
  mounted(){
      this.$nextTick(() => {
        this.slots[0].defaultIndex = 0;
      });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 .add-address{
     width:100%;
     height:100%;
     position:fixed;
     left:0;
     top:0;
     z-index:999;
     background:#fff;
    .add-top-bar{
        width:100%;
        height:40px;
        line-height:40px;
        text-align:center;
        overflow:hidden;
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
    .add-body{
        width:100%;
        margin:20px auto 0;
        color:#333;
        li{
            width:100%;
            min-height:40px;
            line-height:40px;
            position:relative;
            font-size:14px;
            border-bottom:1px solid #eee;
            overflow:hidden;
            label{
                width:18%;
                height:40px;
                line-height:40px;
                text-align:left;
                padding:5px 4%;
                float:left;
            }
            input{
                width:70%;
                height:40px;
                line-height:40px;
                padding:5px 2%;
                margin:0;
                border:0;
                outline:0;
                float:right;
            }
            p{
                width:70%;
                height:40px;
                line-height:40px;
                padding:5px 2%;
                float:right;
            }
        }
    }
    button{
        width:80%;
        height:40px;
        background:#f87205;
        line-height:40px;
        color:#fff;
        font-size:14px;
        border:none;
        border-radius:8px;
        margin:30px auto;
        outline:none;
        cursor:point;
    }
    .mi-picker{
        position:absolute;
        bottom:-180px;
        left:0;
        height:180px;
        width:100%;
        transition:all 1s;
    }
 }
</style>
