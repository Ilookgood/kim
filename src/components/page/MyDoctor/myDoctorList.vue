<template>
  <div>
    <mt-header title="张代理" fixed>
      <mt-button slot="left" icon="back" @click="$router.back(-1)" >返回</mt-button>
      <mt-button slot="right" icon="more"></mt-button>
    </mt-header>
    <div class="m_top40">
        <!--<div class="Doctor_content ks-clear">
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
         </div>-->
      <div  class="options_box ks-clear">
        <div class="options_itme">
          <router-link to="/octorMedicine"  class="options_to">
            <div>11</div>
            <div>医生的药品</div>
          </router-link>
        </div>
        <div class="options_itme">
          <router-link to="/MyMedicine"   class="options_to">
            <div>15</div>
            <div>我的药品</div>
          </router-link>
        </div>
      </div>
      <div class="grabble"><input class="grabble_input iconfont" type="text" placeholder="请输入药品名字"></div>
      <div >
        <router-view></router-view>
      </div>
    </div>
 <!--   <div class="options_bottom">
      <div class="options_bottom_left">删除药品</div>
      <div class="options_bottom_right" @click="editVisibleShow">添加药品</div>
    </div>-->

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
          if(this.selected==0){

          }
        },
        Visible(index,porduct){
            console.log(porduct)
            if(porduct.length==0){
              this.editVisible=false;
            }

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
  .options_box{
    display: flex;
    width: 100%;
    height: 40px;
    line-height:40px;
    text-align: center;
    background: #fff;
    border-bottom: 1px solid #dddddd;

  }
  .options_itme{
    flex:1;
    line-height: 20px;
  }
  .options_to{
    display: block;
  }
  .router-link-active{
    border-bottom:2px solid #36b5f8;
    color: #36b5f8;
    font-weight: bold;
  }
  .grabble{
    padding:10px 4%;
  }
  .grabble_input{
    width: 100%;
    border:none;
    border:1px solid #dddddd;
    height:25px;
    line-height:25px;
    border-radius: 8px;
    -webkit-tap-highlight-color:transparent;
    outline:none;
  }
  [placeholder] { text-align: center;font-size: 12px }
  ::-moz-placeholder {
    color: #dddddd;
    text-indent: 5px; /* 没有用 */
    opacity: 1!important;
  }
  :-ms-input-placeholder {
    color: dddddd;
    text-indent: 5px;
  }
  ::-webkit-input-placeholder {
    color: dddddd;
    text-indent: 5px;
  }

</style>
