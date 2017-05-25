<template>
    <div>
      <mt-header title="代理数据" fixed>
        <mt-button slot="left" icon="back" @click="$router.back(-1)" >返回</mt-button>
        <mt-button slot="right" icon="more"></mt-button>
      </mt-header>
      <div class="m_top50">我是代理数据</div>
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
