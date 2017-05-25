<template>
  <div id="app">
    <!-- header部分 -->
    <mt-header fixed :title="selected" class="header" v-if="$route.path !== '/login'">
      <mt-button slot="left">
        <i class="iconfont" v-if="$route.path == '/index'" @click="sideVisible = !sideVisible">&#xe63d;</i>
      </mt-button>
      <mt-button slot="right">
        <transition name="slide-fade">
          <input type="text" v-model="Svalue" name="search" class="searchBox" v-if="searchVisible == true">
        </transition>
        <i class="iconfont search" v-if="$route.path == '/order'" @click="search">&#xe639;</i>
      </mt-button>
    </mt-header>
    <router-view></router-view>
    <mt-tabbar v-model="selected" class="bottom_tabs" fixed v-if="$route.path !== '/login'">
      <mt-tab-item id="首页">
        <i class="iconfont tabs-icon" slot="icon">&#xeccf;</i>
        <router-link to="index"></router-link>
        首页
      </mt-tab-item>
      <mt-tab-item id="我的名片">
        <i class="iconfont tabs-icon" slot="icon">&#xe602;</i>
        <router-link to="NameCard"></router-link>
        我的名片
      </mt-tab-item>
      <mt-tab-item>
        <i class="iconfont tabs-icon" slot="icon">&#xe63d;</i>
        <router-link to="MyCenter"></router-link>
        个人中心
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>
<script type="text/javascript">
  import { MessageBox } from 'mint-ui';
  export default{
    data(){
      name: 'app'
      let selected = '首页'
      let sideVisible = false
      let searchVisible = false
      let Svalue
      return { selected, sideVisible, searchVisible, Svalue}
    },
    watch:{
      //当其他页面route.pash的时候，index路由也能在header正确显示首页
      '$route':function(item){
        if(item.path == '/index'){
          this.selected = '首页'
        }
      }
    },
    methods:{
      //打开和关闭搜索框
      search: function(){
        this.searchVisible = !this.searchVisible
        let title =  document.getElementsByClassName('mint-header-title')[0]
        if(this.searchVisible){
          title.style.transform = "translateX(-20px)"
          title.style.opacity = "0"
        }
        else{
          title.style.transform = "translateX(0)"
          title.style.opacity = "1"
          if(this.Svalue != undefined){
            this.submit(this.Svalue)
          }
        }
      },
      //搜索内容的提交以及返回
      submit: function(item){
        console.log(item)
      }
    },
    //将路由导向index，确保有内容
    beforeCreate:function(){
      this.$router.push({path: '/index'})
    }
  }
</script>
<style type="text/css">

  html{
    overflow: hidden;
  }
  html,body{
    height: 100%;
  }
  .container{
    height: 100%;
  }
  .bottom_tabs .fa{
    font-size: 22px;
  }
  .searchBox{
    border-radius: 3px;
    border: 1px solid #efefef;
    outline: none;
  }
  .mint-header{
    background: #36b6F8;
  }
  .mint-header-title{
    transition: all .5s;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s ease;
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform-origin: right 0;
    transform: rotateY(-90deg);
    opacity: 0;
  }
  .tabs-icon{
    color: #999898;
  }
  .is-selected .tabs-icon{
    color: #26a2ff;
  }
  .container .sidebar{
    height: 100%;
    width: 70%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  @font-face {
    font-family: 'iconfont';
    src: url('../static/iconfont/iconfont.eot');
    src: url('../static/iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
    url('../static/iconfont/iconfont.woff') format('woff'),
    url('../static/iconfont/iconfont.ttf') format('truetype'),
    url('../static/iconfont/iconfont.svg#iconfont') format('svg');
  }

  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .mint-tab-item-label a{
    display: block;
    width: calc(100% / 5);
    height: 55px;
    position: absolute;
    bottom: 0;
  }
</style>

