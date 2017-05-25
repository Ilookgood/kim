<template>
    <div class="main_body">
      <div v-for="AllList in AllList" class="AllDrugsbox">
        <div class="Allimg">
          <img :src="AllList.img">
        </div>
        <div class="Allconent">
          <div class="Allconent_name">{{AllList.DoctorName}}</div>
          <div class="Allconent_title">{{AllList.data_addlass}}</div>
          <div class="Allconent_etalon">{{AllList.etalon}}</div>
          <div class="Allconent_Price">{{AllList.retailPrice}}</div>
        </div>
      </div>

    </div>
</template>
<script>
    export default{
        data(){
            return {
                AllList:[
                  {id:'1',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                  {id:'2',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                  {id:'3',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                  {id:'4',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                  {id:'5',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                  {id:'1',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                  {id:'2',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                  {id:'3',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                  {id:'4',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},
                  {id:'5',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},

                ]
            }
        }
    }
</script>
<style scoped>
  .main_body{
    position: absolute;
    top:130px;
    bottom:55px;
    width: 100%;
    overflow: scroll;
  }
  .AllDrugsbox{
    display: flex;
    padding:10px 0px 10px 20px;
    border-bottom:1px solid #ddd;
  }
  .AllDrugsbox:first-child{
    border-top:1px solid #ddd;
  }
  .AllDrugsbox .Allimg{
    flex: 0 0 80px;
    width: 80px;
  }
 .AllDrugsbox  .Allconent{
   flex: 1;
   text-align: left;
   margin-left: 10px;
 }
  .Allconent .Allconent_name{
    font-size: 14px;
    color: #353535;
  }
  .Allconent .Allconent_title ,.Allconent_etalon{
    font-size: 12px;
    color: #888;
  }
  .Allconent .Allconent_Price{
    font-size: 18px;
    color: #e9423a;
  }
</style>
