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
           <span class="icon" :class="classMap[seller.supports[0].type]"></span>
           <span class="text">{{seller.supports[0].description}}</span>
         </div>
       </div>
       <div v-if="seller.supports" class="support-count">
         <span class="count">{{seller.supports.length}}</span>
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
  created() {
    this.classMap = ['decrease','discount','special','invoice','gurantee'];
  }
}
</script>

<style lang="less">
    .top {
      color:white;
      background-color: black;
      .content-wrapper {
        padding:24px 12px 18px 24px; 
        font-size: 0;
        .avatar {
          display: inline-block;
          vertical-align: top;
          img {
            border-radius: 2px;
          }
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
          .description {
            margin-bottom: 10px;
            line-height: 12px;
            font-size: 12px;
          }
          .support {
            .icon {
              display: inline-block;
              width: 12px;
              height: 12px;
              background-size: 12px 12px;
              background-repeat: no-repeat;
              vertical-align: bottom;
              &.decrease {
                background-image: url("../../assets/img/decrease_2@2x.png")
              }
              &.discount {
                background-image: url("../../assets/img/discount_2@2x.png")
              }
              &.gurantee {
                background-image: url("../../assets/img/guarantee_2@3x.png")
              }
              &.invoice {
                background-image: url("../../assets/img/invoice_2@2x.png")
              }
              &.special {
                background-image: url("../../assets/img/special_2@2x.png")
              }
            }
            .text {
              font-size: 12px;
              line-height: 10px;
            }
          }
        }
      } 
    }
</style>
