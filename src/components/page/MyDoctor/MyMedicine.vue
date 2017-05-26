<template>
  <div class="octorMedictin">
    <div class="container ks-clear">
      <div class="card ks-clear">
        <div class="card-block ks-clear">
          <div id="app">
            <form>
              <div class="row ks-clear" v-for="(index, item) in items">
                <div class="col-xs-3 ks-clear checkboxFour">
                  <label class="c-input c-checkbox ks-clear">
                    <input type="checkbox" class="input_check" id="item.id" v-model="item.selected" >
                    <label for="item.id"></label>
                    <span class="c-indicator"></span>
                  </label>
                </div>
                <div class="col-xs-2 ks-clear">
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
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="ks-clear foods">
        <label class="c-input c-checkbox c-inputs">
          <input type="checkbox" @change="allfn" v-model="allSelected">全选
        </label>
        <button type="submit" class="btn btn-primary" :disabled="sum === 0" @click="send">添加({{ sum }})</button>
      </div>
    </div>

  </div>
</template>
<script>
  export default{

    data(){
      return  {
        value:[],
        AllList:[
          {id:'1',img:'../../static/bg2x.png',DoctorName:"科采 蛹你草菌粉胶囊",etalon:"0.25g*48粒/盒",data_addlass:"广州市小小村",retailPrice:"￥258.00",},

        ],

        items: [{
          id:1,
          message: 'Apple',
          selected: false,
          num: 1,
          price: 5
        }, {
          id:2,
          message: 'Peach',
          selected: false,
          num: 1,
          price: 10
        }, {
          id:3,
          message: 'Orange',
          selected: false,
          num: 1,
          price: 15
        }, {
          id:4,
          message: 'Pear',
          selected: false,
          num: 1,
          price: 20
        }]
      }
    },
    methods: {
      allfn: function(){
        for (let i = 0;i < this.items.length ;i++ )
        {
          let store = this.stores[i];
          store.sellength = this.all ? store.items.length : 0;
          store.all = this.all;
          for (let j = 0;j < store.items.length ;j++ )
          {
            store.items[j].xuanze = this.all;
          }
        }
      },
      fillIn: function (index, n) {
        this.items[index].num = n;
      },
      send:function () {
        var formData = new FormData();
        console.log(formData)

        for (var i = 0, length = this.items.length; i < length; i++) {
          if (this.items[i].selected === true) {
          }
        }

        //发送ajax请求
        this.$http.post('/someUrl', formData).then((response) => {
          // success callback
        }, (response) => {
          // error callback
        });
      }
    },

    computed: {
      nums: function() {
        return [1,2,3,4,5];
      },
      allSelected: {
        get: function() {
          for (var i = 0, length = this.items.length; i < length; i++) {
            if (this.items[i].selected === false) {
              return false;
            }
          }
          return true;
        },
        set: function(val) {
          for (var i = 0, length = this.items.length; i < length; i++) {
            this.items[i].selected = val;
          }
        }
      },
      sum: function() {
        var totalAmount = 0;
        for (var i = 0, length = this.items.length; i < length; i++) {
          var item = this.items[i];
          if (item.selected === true) {
            totalAmount += item.num;
          }
        }
        return totalAmount;
      }
    }

  }
</script>
<style scoped>
  .octorMedictin{
    position: absolute;
    top:150px;
    bottom:60px;
    width: 100%;


  }
  .foods{
    display: flex;
    bottom:60px;
    height:45px;
    line-height: 45px;
    border-top:1px solid #ddd;
    border-bottom:1px solid #ddd;
    background: #fff;
  }
  .container {
    margin-left: auto;
    margin-right: auto;
  }
  input[type=checkbox] {
    visibility: hidden;
  }
  .card {
    position: relative;
    display: block;
    margin-bottom: .75rem;
    background-color: #fff;
    border-top: 1px solid rgba(0,0,0,.125);
  }
  .AllDrugsbox{
    display: flex;

  }
  .card-block {
    padding: 1.25rem;
  }
  .row {
    margin-left: -15px;
    margin-right: -15px;
  }
  .col-xs-3 {
    float: left;
    width: 15%;
  }
  .col-xs-2 {
    float: left;
    width: 80%;
  }
  label {
    display: inline-block;
    margin-bottom: .5rem;
  }

  .AllDrugsbox .Allimg{
    flex: 0 0 80px;
    width: 80px;
    height: 80px;

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
  .btn{
    border: navajowhite;
    background: #2bb0f1;
    display: inline-block;
    color: #fff;
    font-size: 14px;
    width: 30%;
    outline:none;
  }
  .c-inputs{
    display: inline-block;
    width: 63%;
    text-align: left;
    vertical-align: middle;
    margin-left:7%;
  }
  .checkboxFour{

    margin: 20px auto;

  }
  .checkboxFour label {
    position: relative;

  }
  .checkboxFour .input_check {position: absolute;visibility: hidden;}
  .checkboxFour .input_check+label {display: inline-block;width: 16px;height: 16px;border: 1px solid #ddd;border-radius: 100%}
  .checkboxFour .input_check:checked+label:after {content: "";position: absolute;left: 2px;bottom: 8px;width: 9px;height: 4px;
    border: 2px solid #36b5f8 ;border-top-color: transparent;border-right-color: transparent;
    -ms-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -webkit-transform: rotate(-60deg);
    transform: rotate(-45deg);
  }
</style>
