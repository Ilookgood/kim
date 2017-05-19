<template>
  <div>
    <head-top head-title="订单列表" go-back='true'></head-top>
    <mt-header title="我是标题" fixed>
      <mt-button slot="left" icon="back" @click="handleBack">返回</mt-button>
      <mt-button slot="right" icon="more"></mt-button>
    </mt-header>
  </div>
</template>
<script>
  import headTop from '../header/head'
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
