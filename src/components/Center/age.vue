<template>
  <div>
    <mt-header title="年龄" fixed>
      <mt-button slot="left" icon="back" @click="handleBack">返回</mt-button>
      <mt-button slot="right" icon="more"></mt-button>
    </mt-header>
    <div class=" m_top50">
      <mt-field placeholder="请输入年龄"></mt-field>
    </div>
  </div>
</template>
<script>
  import headTop from '../header/head'
  import { Field } from 'mint-ui';
  export default{
    data(){
      return {}
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
