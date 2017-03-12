<template>
  <div id="goods">
    <div>goods</div>
  </div>
</template>

<script>
export default {
  name: 'goods',
  data () {
    return {
      
    }
  },
  mounted: function() {
    this.$http.get('static/data.json').then((res) => {
      this.msg = res.data.seller
    });
  }
}
</script>

<style lang="less">
  
</style>