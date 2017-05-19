<template>
  <div class="order-container">
    <!-- 订单状态部分 -->
    <mt-navbar class="page-part" v-model="selected" fixed>
      <mt-tab-item id="all">医生扫码</mt-tab-item>
      <mt-tab-item id="untreated">代理扫码</mt-tab-item>
    </mt-navbar>
    <div class="order-list" v-if="display == true">
      <div class="order-item" v-for="order in orders">
        <div class="QR_title">
          <div class="QR_top">
             <div class="QR_top_left">
               <div class="QR_top_left_img"> <img :src="order.Img"></div>
             </div>
             <div class="QR_top_right">
               <div class="font_WHT f_size_name">{{order.name}}</div>
               <div class="font_WHT f_size_phone">{{order.phone}}</div>
             </div>
          </div>
        </div>
        <div class="QR_content">
          <div class="QR_content_img">
              <img :src="order.QR_img">
          </div>
          <div class="QR_bottom">扫一扫二维码，添加代理</div>
        </div>

      </div>
    </div>
    <div class="order-list" v-if="display == false">
      <div class="order-item" v-for="order in orders_untreated" track-by="$index">
        <div class="order-item" v-for="order in orders">
          <div class="QR_title">
            <div class="QR_top_Agent">
              <div class="QR_top_left">
                <div class="QR_top_left_img"> <img :src="order.Img"></div>
              </div>
              <div class="QR_top_right">
                <div class=" f_size_name">{{order.name}}</div>
                <div class=" f_size_phone">{{order.phone}}</div>
              </div>
            </div>
          </div>
          <div class="QR_content_Agent">
            <div class="QR_content_img">
              <img :src="order.QR_img">
            </div>
            <div class="QR_bottom font_WHT">扫一扫二维码，添加代理</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
/*  import { mapState } from 'vuex'*/

  export default{
    data(){
      let selected = "all";
      let display = true;
      let orders;
      let orders_untreated;
      let orders_status;
      return {
          selected, display, orders, orders_untreated, orders_status,
        orders:[
          {Img:"../../static/logo.png",name:"张杰",phone:"1388826888",QR_img:"../../static/logo.png"}
        ],




        orders_untreated:[
          {}
        ]
      }
    },
   /* computed: mapState({
     orders: state => state.orders.orders,
     orders_untreated: state => state.orders.orders_untreated,
     orders_status: state => state.orders_status
     }),*/
 /*   mounted:function(){
      this.changeOrder('orders')
    },*/
    methods:{
     /* changeOrder(item){
        this.$store.dispatch('changeOrder', item)
      }*/
    },
    watch: {
      selected: function(selected){
        this.display = (selected == 'all') ? true : false
      }
    }
  }
</script>
<style type="text/css" >
  .order-container{
    position: absolute;
    top: 40px;
    height: 100%;
    width:100%;
  }
  .QR_top{
    background: linear-gradient(to left,#40b8f5,#73d9f6);
    height: 114px;
  }
  .QR_top_Agent{
    background:#fff;
    height: 114px;
  }
  .QR_top_left{
    width: 45%;
    float: left;
    padding-right:5%;
  }
  .QR_top_left_img{
    width: 70px;
    height: 70px;
    -webkit-transform: translate(92%,25%);
    transform: translate(92%,25%);
    border: 1px solid;
    border-radius: 4px;
  }
  .QR_top_left_img img{
    width: 100%;
    height: 100%;
  }
  .QR_top_right{
    width: 45%;
    float: left;
    line-height: 25px;
    text-align: left;
    transform: translate(0%,60%);
  }
  .f_size_name{
    font-size:15px;
  }
  .f_size_phone{
    font-size: 13px;
  }
  .page-part{
    z-index: 99;
  }
  .order-list{
    position: relative;
    top: 49px;
    height: calc(100% - 144px);
    overflow: scroll;
    padding:25px 30px;
  }
 .order-item{
   border:1px solid #40b8f5;
  }
  .QR_content{
    height:215px;
    padding:40px 0 45px 0;
    background: #ebf7fb;
  }
  .QR_content_Agent{
    height:215px;
    padding:40px 0 45px 0;
    background: linear-gradient(to left,#40b8f5,#73d9f6);
  }
  .QR_content_img{
    width: 215px;
    height: 215px;
    border: 1px solid;
    border-radius: 4px;
    margin: 0 auto;
  }
  .QR_bottom{
    font-weight: 900;
    font-family: Noto Sans CJK SC Regular;
    font-size: 14px;
    margin-top: 10px;
  }

  .mint-navbar.is-fixed{
    top: 40px;
  }
  .mint-navbar .mint-tab-item.is-selected{
    margin-bottom: 0;
  }
</style>
