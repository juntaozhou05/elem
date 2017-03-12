<template>
  <div class="top">
     <div class="content-wrapper">
       <div class="avatar">
         <img :src="seller.avatar" width="128" height="128">
       </div>
       <div class="content">
         <div class="title">
           <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
         </div>
         <div class="description">
           {{seller.description}}/{{seller.deliveryTime}}分钟送达
         </div>
       </div>
     </div>
     <div class="bullentin-wrapper"></div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type:Object
    }
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="less">
  
</style>
