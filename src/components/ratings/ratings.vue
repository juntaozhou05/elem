<template>

</template>

<script>
export default {
  name: 'app',
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