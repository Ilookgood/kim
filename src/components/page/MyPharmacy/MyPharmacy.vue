<template>
  <div>
    <mt-header title="我的药库" fixed>
      <mt-button slot="left" icon="back" @click="$router.back(-1)" >返回</mt-button>
      <mt-button slot="right" icon="more"></mt-button>
    </mt-header>
    <div class="m_top40">
      <div  class="options_box ks-clear">
        <div class="options_itme">
          <router-link to="/AllDrugs"  class="options_to">
            <span>全部药品</span>
          </router-link>
        </div>
        <div class="options_itme">
          <router-link to="/Classify"   class="options_to">
            <span>药品分类</span>
          </router-link>
        </div>
      </div>
      <div class="grabble"><input class="grabble_input iconfont" type="text" placeholder="请输入药品名字"></div>
      <div >
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>
<script>
    export default{
        data(){
            return {}
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
