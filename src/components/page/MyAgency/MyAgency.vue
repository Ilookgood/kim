<template>
  <div>
    <mt-header title="我的代理" fixed>
      <mt-button slot="left" icon="back" @click="$router.back(-1)" >返回</mt-button>
      <mt-button slot="right" icon="more"></mt-button>
    </mt-header>
    <div class="m_top50">
      <mt-search v-model="filters.value" cancel-text=" " >
        <div  v-bind="editVisible">
          <mt-cell
            v-for="(item,index) in result"
            :key="item.value"
            :title="item.title"
            :value="item.value" @click.native="padlock(item.title,item)">
          </mt-cell>
        </div>
      </mt-search>

      <div class="Doctor_box" v-for="(Doctor,index) in Doctors" :key="Doctor.id" @click="handleEdit(index, Doctor.id)" >
        <div class="Doctor_content ks-clear">
          <div class="main_img">
            <img :src="Doctor.img">
          </div>
          <div class="img_contcet">
            <div class="font_size">{{Doctor.title}}</div>
            <div class="font_size color_grey">{{Doctor.name}}</div>
            <div class="font_size">{{Doctor.addLss}}</div>
          </div>
          <div class="img_right"> ></div>
        </div>


      </div>

    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        filters:{
          value:""
        },
        show:false,
        editVisible:false,
        hospital:'',
        hospitalName:"",
        Doctors:[
          {title:"张三",name:"张三",addLss:"广州市",img:"../../../static/logo.png",id:"1"},
          {title:"张四",name:"张四",addLss:"广州市",img:"../../../static/logo.png" ,id:"2"},
          {title:"李白",name:"李白",addLss:"广州市",img:"../../../static/logo.png",id:"3"}
        ],
        result:[
          {title:"你好",value:"1"},
          {title:"你好",value:"2"},
          {title:"你好",value:"3"},
          {title:"你好",value:"4"},
          {title:"你好",value:"5"}

        ]
      }
    },
    methods:{
      searchname:function(hospital){
        this.hospital=hospital;

      },
      padlock(title,item){
        this.filters.value=title;
        console.log(item)
        this.result=[]

        /* this.item.title.show*/
      },
      handleEdit:function (index,id) {
        console.log(index)
        console.log(id)
        if(id==1){
          this.$router.push(`/myAgencyList`)
        }

      }
    }
  }
</script>
<style scoped>
  .out-in{
    margin: 0;
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
  .img_contcet{
    display: inline-block;
    width: 30%;
    vertical-align: middle;
  }
  .font_size{
    font-size: 12px;
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
  .Doctor_content{
    padding:10px 20px 10px 25px;
  }
  .search-input input[data-v-420e089d] {
    border: 1px solid #bfcbd9;
    box-sizing: border-box;
    height: 36px;
    font-size: 18px;
    float: left;
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
    width: 100%;
  }
  .search-input {
    height: 36px;
    width: 100%;
    margin: 0 auto;
    margin-top: 10px;
    position: relative;
    padding:0 10px;
  }
  .search-input input {
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    width: 100%;
    height: 36px;
    font-size: 18px;
    float: left;
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
    -webkit-border-radius:8px;
    -moz-border-radius:8px;
    border-radius:8px;
  }
  .search-btn {
    height: 36px;
    width: 100px;
    border: 1px solid mediumseagreen;
    background-color: mediumseagreen;
    color: white;
    font-size: 16px;
    font-weight: bold;
    float: left;
  }
  .search-btn {
    cursor: pointer
  }
  .search-select {
    position: absolute;
    top: 36px;
    width: 100%;
    box-sizing: border-box;
    z-index: 999;
  }
  .search-select li {
    border: 1px solid #d4d4d4;
    list-style-type: none;
    border-top: none;
    border-bottom: none;
    background-color: #fff;
    width: 100%
  }
  .search-select-option {
    box-sizing: border-box;
    padding: 0px 10px;
  }
  .selectback {
    background-color: #eee !important;
    cursor: pointer
  }
  input::-ms-clear {
    display: none
  }
  .search-reset {
    width: 21px;
    height: 21px;
    position: absolute;
    display: block;
    line-height: 21px;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
    right: 110px;
    top: 12px
  }
  .search-select-list {
    transition: all 0.5s
  }
  .itemfade-enter,
  .itemfade-leave-active {
    opacity: 0;
  }
  .itemfade-leave-active {
    position: absolute;
  }
  .selectback {
    background-color: #eee !important;
    cursor: pointer
  }
  .search-select ul{margin:0;text-align: left;padding:0; }
  .search-reset[data-v-420e089d] {
    width: 21px;
    height: 21px;
    position: absolute;
    display: block;
    line-height: 21px;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
    right: 2px;
    top: 9px;
  }
  .search-input[data-v-33cf06c8]{
    padding: 0 10px;
  }
  .m_top50 .mint-search{
    height:100%;
    height:0vh;
    height:100%;
  }
  .m_top50 .mint-search .mint-search-list{
    padding:0 !important;
    position: inherit !important;
  }

</style>
