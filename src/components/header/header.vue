<template>
  <div class="top">
     <div class="content-wrapper">
       <div class="avatar">
         <img :src="seller.avatar" width="64" height="64">
       </div>
       <div class="content">
         <div class="title">
           <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
         </div>
         <div class="description">
           {{seller.description}}/{{seller.deliveryTime}}分钟送达
         </div>
         <div v-if="seller.supports" class="support">
           <span clas="icon"></span>
           <span class="text">{{seller.supports[0].description}}</span>
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
    .top {
      color:white;
      background-color: black;
      .content-wrapper {
        padding:2.4rem 1.2rem 1.8rem 2.4rem; 
        font-size: 0;
        .avatar {
          display: inline-block;
          vertical-align: top;
        }
        .content {
          display: inline-block;
          margin-left: 16px;
          font-size: 14px;
          .title {
            margin:2px 0 8px 0;
            .brand {
              width: 30px;
              height: 18px;
              display: inline-block;
              background: url("../../assets/img/brand@2x.png");
              background-size: 30px 18px;
              vertical-align: top;
            }
            .name {
              margin-left: 6px;
              font-size: 16px;
              line-height: 18px;
              font-weight: bold;
            }
          }
        }
      } 
    }
</style>
