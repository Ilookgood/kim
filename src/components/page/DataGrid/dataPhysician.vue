<template>
    <div>
      <mt-header title="医生数据" fixed>
        <mt-button slot="left" icon="back" @click="$router.back(-1)" >返回</mt-button>
        <mt-button slot="right" icon="more"></mt-button>
      </mt-header>
      <div class="m_top50">
        <div class="Doctor_content ks-clear">
          <div class="main_img">
            <img :src="img">
          </div>
          <div class="img_contcet">
            <div class="physician_type">
              <div class="font_size">{{title}}</div>
              <div class="font_size physician_color">{{division[0]}}</div>
            </div>

            <div class="font_size physician_color">{{addLss}}</div>
          </div>
        </div>
        <div  class="options_box ks-clear">
          <div class="options_itme">
              <router-link to="/TheMonthSales"  class="options_to">
                <span>{{LastSales}}</span>
                <span>当月销量</span>
              </router-link>
          </div>
          <div class="options_itme">
              <router-link to="/LastMonthsSales"   class="options_to">
                <span>{{LastSales}}</span>
                <span>上月销量</span>
              </router-link>
          </div>
        </div>
        <div class="m_top40 top_ovfow">
          <router-view></router-view>
        </div>

      </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                title:"小三",
                img:"../../../static/logo.png",
               division:['呼吸科','传染科'],
              addLss:"广州市山沟沟里",
              LastSales:"152",
              TheSales:"152"

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
  .physician_type div{
    display: inline-block;
  }
  .img_contcet{
    display: inline-block;
    width: 80%;
    vertical-align: middle;
    text-align: left;
  }
  .font_size{
    font-size: 12px;
    line-height: 24px;
  }
  .physician_color{
    color: #888;
    vertical-align: bottom;
  }
  .options_box{
    display: flex;
    width: 100%;
    height: 40px;
    line-height:40px;
    text-align: center;

  }
  .options_itme{
    flex:1;
  }
  .options_to{
    display: block;
    padding:5px 0;
  }
  .options_to >span{
    display: block;
    height: 25px;
    line-height: 25px;
  }
  .router-link-active{
    background:linear-gradient(to top,#36b6F8 ,#4fd9f7)
  }
  .top_ovfow{
    position: absolute;
    width: 100%;
    height: 425px;
    overflow: hidden;
    overflow-y: auto;
    left: 0;
    bottom: 50px;
  }
</style>
