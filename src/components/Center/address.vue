<template>
    <div>
      <mt-header title="修改地址" fixed>
        <mt-button slot="left" icon="back" @click="handleBack">返回</mt-button>
        <mt-button slot="right" icon="more"></mt-button>
      </mt-header>
      <div class="m_top50">
        <a class="mint-cell mint-field">
          <div class="mint-cell-left"></div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
              <span class="mint-cell-text">所在地区</span>
            </div>
            <div class="mint-cell-value">
              <div class="mint-cell-value is-link" @click="choiceArea">
                <input placeholder="请选择省市" type="text" class="mint-field-core text-right" readonly="readonly" v-model="data.areaText">
                <div class="mint-field-clear" style="display: none;"><i class="mintui mintui-field-error"></i></div>
              </div>
            </div>
            <i class="mint-cell-allow-right"></i>
            <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
              <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="cancleaddress">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="selectaddress">确定</span>
              </div>
              <mt-picker :slots="citySlots" @change="onCityChange" :visible-item-count="3"></mt-picker>
            </mt-popup>
          </div>
        </a>
        <a class="mint-cell mint-field">
          <div class="mint-cell-left"></div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
              <span class="mint-cell-text">详细地址</span>
            </div>
            <div class="mint-cell-value">
              <div class="mint-cell-value">
                <input placeholder="街道、楼牌号等" type="text" class="mint-field-core text-right" v-model="data.address">
                <div class="mint-field-clear" style="display: none;"><i class="mintui mintui-field-error"></i></div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  export default{
        data(){
            return {
              popupVisible: false,
              data: {
                photo: '',
                userName: '',
                sex: '',
                sexText: '',
                mobile: '',
                birthday: '',
                privinceName: '',
                provinceId: '',
                cityName: '',
                cityId: '',
                address: '',
                areaText: ''
              },
              citySlots: [
                {
                  flex: 1,
                  values: Object.keys(address),
                  className: 'slot1',
                  textAlign: 'center'
                }, {
                  divider: true,
                  content: '-',
                  className: 'slot2'
                }, {
                  flex: 1,
                  values: Object.values(address)[0],
                  className: 'slot3',
                  textAlign: 'center'
                }
              ]
            }
        },
        methods:{
          handleBack(){
            this.$router.back(-1)
          },
          choiceArea () {
            this.popupVisible = true
            // 设置默认选中
            if (this.data.privinceName !== '' && this.data.cityName !== '') {
              this.areaPicker.setSlotValue(0, this.data.privinceName)
              this.areaPicker.setSlotValue(1, this.data.cityName)
              console.log(this.data.privinceName + '-' + this.data.cityName)
            }
          },
          cancleaddress() {
            this.popupVisible = false
            this.areaPicker.setSlotValue(0, this.data.privinceName)
            this.areaPicker.setSlotValue(1, this.data.cityName)
          },
          selectaddress () {
            this.popupVisible = false
            this.data.privinceName = this.addressProvince
            this.data.cityName = this.addressCity
            this.data.provinceId = this.addressProvinceId
            this.data.cityId = this.addressCityId
            this.data.areaText = this.data.privinceName + this.data.cityName
          },
          onCityChange (picker, values) {
            this.areaPicker = picker
            /* 此处不直接使用this.data.privinceName、this.data.cityName、this.data.provinceId、this.data.cityId，由于在加载地区信息之后，我又重新设置了绑定到slots属性的值，此时也会触发@change事件，所以在nCityChange方法里需要用四个变量替代上述四个变量来记录当前选中的值，然后在点击确定之后的方法里将这四个值赋给上述四个变量。如果直接在该方法里使用上述四个变量来获取当前选中的值，可能导致数据错乱 */
            picker.setSlotValues(1, address[values[0]])
            this.addressProvince = values[0]
            this.addressCity = values[1]
            this.addressProvinceId = provinceCodeList[this.addressProvince] + ''
            this.addressCityId = cityCodeList[this.addressCity] + ''
          },
        }

    }
  let address = {}
  let provinceCodeList = {}
  let cityCodeList = {}
</script>
<style scoped>
  .mint-popup-4 {
    width: 100%;
  }
  .mint-popup-4 .picker-slot-wrapper, .page-popup .mint-popup-4 .picker-item {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

</style>
