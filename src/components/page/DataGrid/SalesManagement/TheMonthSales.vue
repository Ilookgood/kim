<template>
    <div class="box">
      <div class="lastMonthTitle"  @click="open=!open"><span>患者名字: </span>{{patientName}}<span class="iconfont inconSyles">{{ open ? '&#xe6cc;' : '&#xe639;' }}</span></div>
      <div v-show="open" class="Doctor_boxs" v-for="(TheSales,index) in TheSalesLis" :key="TheSales.id" @click="handleEdit(index, TheSales.id)" >
        <div class="Doctor_content ks-clear">
          <div class="main_imgs">
            <img :src="TheSales.img">
          </div>
          <div class="img_contcet">
            <div class="font_size">{{TheSales.DoctorName}}&#xe62a;</div>
            <div class="font_size color_grey"><span>规格: </span>{{TheSales.etalon}}</div>
            <div class="font_size color_grey"><span>数量: </span>{{TheSales.amount}}<span>盒</span></div>
            <div class="font_size color_grey">{{TheSales.data_time}}</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
              patientName:"小三",
              open:true,
              Doctors:[
                {title:"张三",name:"张三",addLss:"广州市",img:"../../../static/logo.png",id:"1"},
                {title:"张四",name:"张四",addLss:"广州市",img:"../../../static/logo.png" ,id:"2"},
                {title:"李白",name:"李白",addLss:"广州市",img:"../../../static/logo.png",id:"3"}
              ],
              TheSalesLis:[
                {id:'1',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_time:"2017/12/03 11:25",retailPrice:"￥258.00",amount:"2"},
                {id:'2',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_time:"2017/12/03 11:25",retailPrice:"￥258.00",amount:"2"},
                {id:'3',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_time:"2017/12/03 11:25",retailPrice:"￥258.00",amount:"2"},
                {id:'4',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_time:"2017/12/03 11:25",retailPrice:"￥258.00",amount:"2"},
                {id:'5',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_time:"2017/12/03 11:25",retailPrice:"￥258.00",amount:"2"},
                {id:'1',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_time:"2017/12/03 11:25",retailPrice:"￥258.00",amount:"2"},
                {id:'2',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_time:"2017/12/03 11:25",retailPrice:"￥258.00",amount:"2"},
                {id:'3',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_time:"2017/12/03 11:25",retailPrice:"￥258.00",amount:"2"},
                {id:'4',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_time:"2017/12/03 11:25",retailPrice:"￥258.00",amount:"2"},
                {id:'5',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_time:"2017/12/03 11:25",retailPrice:"￥258.00",amount:"2"},

              ],
            }

        },
      methods:{
        handleEdit(index,id){

        }
      },
      mounted(){

      }
    }
</script>
<style scoped>
  .box{
    background: #fff;
  }
.lastMonthTitle{
  height: 30px;
  width: 100%;
  line-height:30px;
  border-left:3px solid #36b5f8;
  border-bottom:1px solid #ddd;
  text-align: left;
  padding-left: 15px;
}
  .Doctor_boxs{
    border-bottom:1px solid #ddd;
    background: #fff;
  }
  .main_imgs{
    display: inline-block;
    width: 80px;
    height: 80px;
    vertical-align: middle;
  }
  .img_contcet{
    display: inline-block;
    width: 70%;
    text-align: left;
    vertical-align: middle;
    margin-left: 2%;
  }
  .Doctor_content{
    padding:10px 20px 10px 25px;
  }
  .font_size{
    font-size: 12px;
  }
  .color_grey{
    color: #888;

  }
  @font-face {
    font-family: 'iconfont';
    src: url('../../../../../static/iconfont/iconfont.eot');
    src: url('../../../../../static/iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
    url('../../../../../static/iconfont/iconfont.woff') format('woff'),
    url('../../../../../static/iconfont/iconfont.ttf') format('truetype'),
    url('../../../../../static/iconfont/iconfont.svg#iconfont') format('svg');
  }

  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .inconSyles{
    margin-left: 61%;
    font-size: 12px;
  }

</style>
