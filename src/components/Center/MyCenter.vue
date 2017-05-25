<template>
    <div class="ceneer">
      <div class="title ks-clear">
        <div class="center_bg ks-clear">
          <div class="ceneer_img ks-clear">
            <div v-model="title" class="ceneer_title ks-clear">
              <span class="ceneer_ionc"><img :src="title.imgs"></span>
              <span>{{title.name}}</span>
            </div>
            <div v-model="title" class="ceneer_top_text">
              <div class="top_text_left ks-clear">
                <div class="title_color">{{title.doctor_number}}</div>
                 <div>{{title.doctor}}</div>
              </div>
              <div class="top_text_right ks-clear">
                <div class="title_color">{{title.agent_number}}</div>
                <div>{{title.agent}}</div>
              </div>
            </div>
            <div class="ceneer_bgimg ks-clear"><img src="../../../static/bg2x.png"></div>
          </div>
        </div>
      </div>
      <div class="main" >
        <div class="main_content">
          <mt-cell title="姓名"  to="/ModifyName"  is-link value="姓名">
            <span>{{title.name}}</span>
            <img slot="icon" style="width: 22px;height: 22px" src="../../../static/logo.png" width="24" height="24">
          </mt-cell>
          <mt-cell title="性别"  to="/sex"  is-link value="带链接">
            <span>{{title.sex}}</span>
            <img slot="icon" style="width: 22px;height: 22px" src="../../../static/logo.png" width="24" height="24">
          </mt-cell>
          <mt-cell title="年龄"  to="/age"  is-link value="带链接">
            <span>{{title.age}}</span>
            <img slot="icon" style="width: 22px;height: 22px" src="../../../static/logo.png" width="24" height="24">
          </mt-cell>
          <mt-cell title="地址"  to="/address"  is-link value="带链接">
            <span class="title_adderss">{{title.address}}</span>
            <img slot="icon" style="width: 22px;height: 22px" src="../../../static/logo.png" width="24" height="24">
          </mt-cell>
        </div>

      </div>
    </div>

</template>
<script>
  import { Cell  } from 'mint-ui'
    export default{
        data(){
            return {
                title:{
                  imgs:'../../static/logo.png',
                  name:'张杰',
                  doctor:'我的医生',
                  doctor_number:'10',
                  agent:'我的代理',
                  agent_number:'5',
                  sex:'男',
                  age:'26',
                  phone:'15225225522',
                  address:'广州市大海里小巷子'
                },
            }
        }
    }
</script>
<style >
  .ceneer{
    background: #f4f4f4;
  }
      .title{

      }
      .center_bg{
        width: 100%;
        height: 150px;
        background: linear-gradient(to bottom,#18b1f4,#3eccf3);
        -webkit-border-radius:0px 0px 50px 50px;
        -moz-border-radius:0px 0px 50px 50px;
        border-radius:0px 0px 40% 40%;
        position: relative;
      }
  .ceneer_img{
    width: 80%;
    background: #fff;
    border-radius: 8px;
    height: 140px;
    position: absolute;
    bottom: -50%;
    left: 10%;
    box-shadow:0 -2px 2px #d3eefa;
  }
  .ceneer_title{
    width:80px ;
    position:absolute;
    left:50%;
    top:20%;
    -webkit-transform:translate(-50%,-50%);
    -moz-transform:translate(-50%,-50%);
    transform:translate(-50%,-50%);
  }
  .ceneer_top_text{
    position: absolute;
    bottom:12px;
    width: 100%;
  }
  .top_text_left{
    width: 50%;
    float: left;
  }
  .top_text_right{
    width:50%;
    float: left;
  }
  .mint-cell{
    border-bottom: 1px solid #e5e5e5;
  }
  .mint-cell:first-child{
    border-radius: 10px 10px 0 0;
  }
  .mint-cell:last-child{
        border-bottom: none;
        border-radius: 0 0 10px 10px;
      }
  .main .main_content .mint-cell .mint-cell-wrapper .mint-cell-title{
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      display: table;
      text-align: left !important;

    }
  .main .main_content .mint-cell .mint-cell-wrapper .mint-cell-value{
    width: 60%;
    margin-left: 2%;

  }
  .main_content{
    border-radius: 10px;
  }
  .ceneer_bgimg{
    position: absolute;
    bottom: -5px;
  }
  .title_color{
    color: #14aef4;
  }
  .main{
    width: 90%;
    margin: 100px auto;

  }
  img{
        width: 100%;
        height: 100%;
      }
  .title_adderss{
;
    margin-left: 2%;
  }

</style>
