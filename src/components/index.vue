<template>
  <div class="index-container">
    <!-- 轮播图部分 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="bgImg in bgImages" :key="bgImg.id"><img :src="bgImg.img"></mt-swipe-item>
    </mt-swipe>
    <!-- 首页功能栏部分 -->
    <div class="list_content" >
       <div v-for="(list,index) in listImg" :key="list.id"  @click="handleEdit(index, list.id)" class="list_Chart">
         <div class="listImg"><img :src="list.img"></div>
         <div class="list_title">{{list.title}}</div>
         <div class="list_router"> > </div>
       </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      let popupVisible = false
      let orders_status;
      return {
        bgImages:[
          {img:"../../static/logo.png"},
          {img:"../../static/banner1.jpg"}
        ],
        listImg:[
          {img:"../../static/img/doc@2x.png",title:"我的医生",id:'1'},
          {img:"../../static/img/agent@2x.png",title:"我的代理",id:'2'},
          {img:"../../static/img/drug@2x.png",title:"我的药库",id:'3'},
          {img:"../../static/img/data@2x.png",title:"数据统计",id:'4'}
        ] ,
          popupVisible, orders_status
      }
    },
    methods:{
      getOrders: function(){
        const that = this
        this.$store.dispatch('synchroOrder', this).then(function(){
          that.popupVisible = true
        })
      },
      handleEdit: function (index, id) {
          console.log(index)
        console.log(id)
        if(id==1){
       this.$router.push(`/MyDoctor`)

        }else if(id==2){
         this.$router.push(`/MyAgency`)

        }else if(id==3){
         this.$router.push(`/MyPharmacy`)

        }else {
        this.$router.push(`/DataList`)

        }

      },
    }
  }
</script>
<style type="text/css">
  .index-container{
    position: absolute;
    top: 30px;
    height: 100%;
    width:100%;
  }
  .mint-swipe{
    width: 100%;
    height: 30%;
  }
  .swipe{
    height:30%;
    overflow: visible;
  }
  .banner{
    width: 100%;
    min-height: 100%;
  }
  .swipe-indicator{
    opacity: 0.8;
    background: #F0F0F0;
  }
  .swipe-indicator.active{
    background: #FF7100;
  }
  .mint-popup-top{
    z-index: 99;
  }
  .icon-list{
    margin-top: 10px;
    height: 54%;
    overflow-y: scroll;
  }
  .icon-list img{
    width: 58px;
    height: 58px;
    float: left;
  }
 .mint-swipe-indicator{
   width: 10px;
   height: 10px;
   background: #fff;
   opacity:1;
  }
  .mint-swipe-indicator.is-active{
    background: #40b8f5;
    width: 11px;
    height: 11px;
  }
  .list_content{
    padding:0 10px;
  }
  .listImg{
    width: 60px;
    height: 60px;
    display: inline-block;
  }
  .listImg img{
    vertical-align: middle;
  }
  .list_Chart{
    background: red;
    margin-top: 10px;
    border-radius: 8px;
    padding: 10px 20px 10px 33px;
  }
  .list_title{
    display: inline-block;
    text-align: left;
    width: 65%;
    vertical-align: middle;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    margin-left: 15px;
    letter-spacing:2px;
  }
  .list_router{
    display: inline-block;
    text-align: right;
    font-size: 22px;
    font-family: 宋体;
    font-weight: 900;
    color: #fff;
    vertical-align: middle;
  }
  .list_Chart:nth-child(1){
    background: linear-gradient(to top,#36b6F8 ,#4fd9f7);
  }
  .list_Chart:nth-child(2){
    background: linear-gradient(to top,#5bd0c7,#71e7e0);
  }
  .list_Chart:nth-child(3){
    background: linear-gradient(to top,#47cf98,#49edc1);
  }
  .list_Chart:nth-child(4){
    background: linear-gradient(to left,#f3756c ,#fe9e9e);
  }


</style>
