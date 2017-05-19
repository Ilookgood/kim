<template>
  <div>
    <mt-header title="我的药库" fixed>
      <mt-button slot="left" icon="back" @click="$router.back(-1)" >返回</mt-button>
      <mt-button slot="right" icon="more"></mt-button>
    </mt-header>
    <div class="m_top45">我是药库</div>
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

</style>
