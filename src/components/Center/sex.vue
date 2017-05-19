<template>
    <div>
      <mt-header title="性别" fixed>
        <mt-button slot="left" icon="back" @click="handleBack">返回</mt-button>
        <mt-button slot="right" icon="more"></mt-button>
      </mt-header>
      <div class="m_top50">
        <mt-radio
          align="right"
          :key="value"
          :value.sync="value"
          :options="options">
        </mt-radio>
      </div>
    </div>
</template>
<script>
  import { Cell  } from 'mint-ui'
  import { Radio } from 'mint-ui';
    export default{
        data(){
            return {
              label:'',
              value:'',
              options:[
                {
                  label: '男',
                  value: '男'
                },
                {
                  label: '女',
                  value: '女'

              }]
            }

        },
      methods:{
        handleBack(){
          this.$router.back(-1)
        }
      }
    }
</script>
<style scoped>

</style>
