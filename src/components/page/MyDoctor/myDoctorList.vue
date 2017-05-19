<template>
  <div>
    <mt-header title="我的医生" fixed>
      <mt-button slot="left" icon="back" @click="$router.back(-1)" >返回</mt-button>
      <mt-button slot="right" icon="more"></mt-button>
    </mt-header>
    <div class="m_top40">
        <div class="Doctor_content ks-clear">
          <div class="main_img">
            <img :src="img">
          </div>
          <div class="img_contcet">
            <div class="font_size">{{title}}</div>
            <div class="font_size">药品总数量<span class="count_color">{{count}}</span></div>
          </div>
        </div>
         <div  class="options_box">
                <div v-for="(options,index) in optionsLis" :key="options.id">
                  <label class="c-input c-checkbox" v-show="editVisible" >
                    <input type="checkbox"  :value="options.id" id="options.id" @click="Visible(index,options.id)">
                    <span class="c-indicator"></span>
                  </label>
                    <div class="optionsimg"  >
                        <img :src="options.img" alt="">
                      </div>
                      <div class="options_content">
                        <div>{{options.DoctorName}}</div>
                        <div>{{options.etalon}}</div>
                        <div>{{options.Factory}}</div>
                        <div>{{options.retailPrice}}</div>
                      </div>
                    <span class="c-indicator"></span>


                </div>
         </div>
    </div>
    <div class="options_bottom">
      <div class="options_bottom_left">删除药品</div>
      <div class="options_bottom_right" @click="editVisibleShow">添加药品</div>
    </div>

  </div>
</template>
<script>
    export default{
        data(){
            return {
              title:"张三",
              name:"张三",
              count:"18",
              img:"../../../static/logo.png",
              id:"1",
              value:"",
              editVisible:false,
              product_ids:[],
              allSelected:[],
              selected:[],
              options:[{
                id:'1',
                value:'苹果',
                textList:'你好'
              },{
                id:'2',
                value:'荔枝',
                textList:'你好'
              },{
                id:'3',
                value:'香蕉',
                textList:'你好'
              },{
                id:'4',
                value:'火龙果',
                textList:'你好'
              }],
              optionsLis:[
                {id:'1',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",Factory:"吉林省中晟制药有限公司",retailPrice:"￥258.00"},
                {id:'2',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",Factory:"吉林省中晟制药有限公司",retailPrice:"￥258.00"},
                {id:'3',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",Factory:"吉林省中晟制药有限公司",retailPrice:"￥258.00"},
                {id:'4',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",Factory:"吉林省中晟制药有限公司",retailPrice:"￥258.00"},
                {id:'5',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",Factory:"吉林省中晟制药有限公司",retailPrice:"￥258.00"},
              ],
              checkboxModel:[],
              checked:""
            }
        },
      methods:{
        editVisibleShow(){
          this.editVisible=true
        },
        Visible(index,porduct){
           console.log(index)
          console.log(porduct)
        }

      },
      watch: {//深度 watcher
        'checkboxModel': {
          handler: function (val, oldVal) {
              this.checked=true;
              console.log(val)
          },
          deep: true
        }
      }
    }
</script>
<style scoped>
  .Doctor_content{
    padding:10px 20px 10px 25px;
    background: #fff;
  }
  .main_img{
    display: inline-block;
    width: 48px;
    height: 48px;
    vertical-align: middle;
  }
  .options_box{

  }
  .count_color{
    color: #36b5f8;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .options_content{
    width: 65%;
    display: inline-block;
    text-align: left;
    padding-left: 5%;
    vertical-align: middle;
  }
  .img_contcet{
    display: inline-block;
    width: 80%;
    vertical-align: middle;
    text-align: left;
  }
  .options_bottom{
    position: fixed;
    bottom:60px;
    height: 50px;
    width:100%;

  }
  .options_bottom_left{
    width: 50%;
    height: 50px;
    background: #ddd;
    display: inline-block;
    float: left;
    color: #9a9a9a;
    line-height: 50px;
    font-size: 16px;
    font-weight:600;
  }
  .options_bottom_right{
    width: 50%;
    height: 50px;
    background: #3fc2f8;
    display: inline-block;
    float: left;
    color: #fff;
    line-height: 50px;
    font-size: 16px;
    font-weight:600;
  }

  .font_size{
    font-size: 12px;
    line-height: 24px;
  }
  .color_grey{
    color: #888;

  }
  .img_right{
    display: inline-block;
    width: 50%;
    vertical-align: middle;
    font-size: 24px;
    font-family:宋体;
    font-weight:bolder;
    text-align: right;
    color: #ddd;
  }
  .optionsimg{
    width: 60px;
    height: 60px;
    display: inline-block;
    vertical-align: middle;
  }
  .mint-checkbox-core{
    display: inline-block;
    background-color: #fff;
    border-radius: 100%;
    border: 1px solid #ccc;
    position: relative;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .mint-checkbox-input:checked+.mint-checkbox-core {
    background-color: #26a2ff;
    border-color: #26a2ff;
  }
</style>
