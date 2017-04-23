<template>
    <div v-show="showFlag" class="food">
      <div>111111</div>
    </div>
</template>

<script>
export default {
  props:{
    food:{
      type:Object
    }
  },
  data () {
    return {
      showFlag:true
    }
  },
  mounted: function() {
    
  }
}
</script>

<style lang="less">
  .food {
    position: fixed;
    left:0;
    top:0;
    bottom:48px;
    z-index: 30;
    width: 100%;
    background: #fff;
  }
</style>