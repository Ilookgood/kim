<template>
  <div class="order-container">
    <!-- 订单状态部分 -->
    <mt-header title="数据统计" fixed>
      <mt-button slot="left" icon="back" @click="$router.back(-1)" >返回</mt-button>
      <mt-button slot="right" icon="more"></mt-button>
    </mt-header>
    <mt-navbar class="page-part" v-model="selected" fixed>
      <mt-tab-item id="all">医生数据</mt-tab-item>
      <mt-tab-item id="untreated">代理数据</mt-tab-item>
    </mt-navbar>
    <div class="order-lists" v-if="display == true">
        <div class="Doctor_box" v-for="(Physician,index) in dataPhysician" :key="Physician.id" @click="handlePhysician(index, Physician.id)" >
          <div class="Doctor_content ks-clear">
            <div class="main_img">
              <img :src="Physician.img">
            </div>
            <div class="img_contcetl">
              <div class="data_text">
                <div class="font_sizes font_size14">{{Physician.name}}</div>
                <div class="font_sizes color_grey m_left10">{{Physician.addLss}}</div>
              </div>
              <div class="font_sizes color_grey"><span class="font_sizes">上月销量: </span>{{Physician.Sales}}</div>
            </div>
            <div class="img_right"> ></div>
          </div>
    </div>
    </div>
      <div class="order-lists" v-if="display == false">
        <div class="Doctor_box"  v-for="(Database,index) in proxyDatabase" :key="Database.id" @click="handleDatabase(index, Database.id)" >
          <div class="Doctor_content ks-clear"  @click="open=!open">
            <div class="main_img">
              <img :src="Database.img">
            </div>
            <div class="img_contcetl">
              <div class="data_text">
                <div class="font_sizes font_size14">{{Database.name}}</div>
                <div class="font_sizes color_grey m_left10">{{Database.addLss}}</div>
              </div>
              <div class="font_sizes color_grey"><span class="font_sizes">当月销量: </span>{{Database.TheSales}}</div>
              <div class="font_sizes color_grey"><span class="font_sizes">上月销量: </span>{{Database.Sales}}</div>
            </div>
            <div class="img_right"> <span class="iconfont inconSyles">{{ open ? '&#xe6cc;' : '&#xe639;' }}</span></div>
          </div>
          <div order-lists-child v-show="open">
            <div class="Doctor_box" v-for="(DatabaseChild,index) in proxyDatabaseChild" :key="DatabaseChild.id" @click="handleDatabaseChild(index, DatabaseChild.id)" >
              <div class="Doctor_content ks-clear">
                <div class="main_img">
                  <img :src="DatabaseChild.img">
                </div>
                <div class="img_contcetl">
                  <div class="data_text">
                    <div class="font_sizes font_size14">{{DatabaseChild.name}}</div>
                    <div class="font_sizes color_grey m_left10">{{DatabaseChild.addLss}}</div>
                  </div>
                  <div class="font_sizes color_grey"><span class="font_sizes">当月销量: </span>{{DatabaseChild.TheSales}}</div>
                  <div class="font_sizes color_grey"><span class="font_sizes">上月销量: </span>{{DatabaseChild.Sales}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

     </div>

  </div>
</template>
<script type="text/javascript">


  export default{
    data(){
      let selected = "all";
      let display = true;
      let orders;
      let orders_untreated;
      let orders_status;
      return {
        open:true,
        selected, display, orders, orders_untreated, orders_status,
        orders:[
          {Img:"../../static/logo.png",name:"张杰",phone:"1388826888",QR_img:"../../static/logo.png"}
        ],
        filters:{
          value:""
        },
        dataPhysician:[
          {Sales:"1522",name:"张三",addLss:"广州市",img:"../../../static/logo.png",id:"1"},
          {Sales:"1522",name:"张四",addLss:"广州市",img:"../../../static/logo.png" ,id:"2"},
          {Sales:"1522",name:"李白",addLss:"广州市",img:"../../../static/logo.png",id:"3"}
        ],
        proxyDatabase:[
          {Sales:"1522",TheSales:"111", name:"小三",addLss:"广州市",img:"../../../static/logo.png",id:"1"},
          {Sales:"1522",TheSales:"111", name:"张四",addLss:"广州市",img:"../../../static/logo.png" ,id:"2"},
          {Sales:"1522",TheSales:"111", name:"李白",addLss:"广州市",img:"../../../static/logo.png",id:"3"}
        ],
        proxyDatabaseChild:[
          {Sales:"1522",TheSales:"111", name:"小三",addLss:"广州市",img:"../../../static/logo.png",id:"1"},
          {Sales:"1522",TheSales:"111", name:"张四",addLss:"广州市",img:"../../../static/logo.png" ,id:"2"},
          {Sales:"1522",TheSales:"111", name:"李白",addLss:"广州市",img:"../../../static/logo.png",id:"3"}
        ],
        orders_untreated:[
          {}
        ]
      }
    },
    methods:{
      handlePhysician(index,id){
        console.log(id)
        if(id==1){
          this.$router.push(`/dataPhysician`)
        }
      },
      handleDatabase(index,id){
          console.log(id)

      }
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
  .order-lists{
    position: relative;
    top: 45px;
    height: calc(100% - 144px);
    overflow: scroll;
  }

  .Doctor_box{
    border-top:1px solid #ddd;
    border-bottom:1px solid #ddd;
    margin-top: 10px;
    background: #fff;
  }
  .main_img{
    display: inline-block;
    width: 48px;
    height: 48px;
    vertical-align: middle;
  }
  .img_contcetl{
    display: inline-block;
    width: 30%;
    vertical-align: middle;
    margin-left: 2%;
  }
  .Doctor_content{
    padding:10px 20px 10px 25px;
  }
  .font_sizes{
    font-size: 12px;
    text-align: left;
    line-height: 25px;
  }
  .font_size14{
    font-size: 14px;
  }
  .color_grey{
    color: #888;

  }
  .img_right{
    display: inline-block;
    width: 46%;
    vertical-align: middle;
    font-size: 24px;
    font-family:宋体;
    font-weight:bolder;
    text-align: right;
    color: #ddd;
  }
  .data_text{
    text-align: left;
    line-height: 25px;
  }
  .data_text div{
    display: inline-block;
  }
  #all{
    font-size: 14px;
  }
  #untreated{
    font-size: 14px;
  }
</style>
