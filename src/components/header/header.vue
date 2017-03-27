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
       <div v-if="seller.supports" class="support-count" @click="showDetail">
         <span class="count">{{seller.supports.length}}个</span>
         <i class="ticon-keyboard_arrow_righ"></i>
       </div>
     </div>
     <div class="bullentin-wrapper" @click="showDetail">
       <span class="bullentin-title"></span><span class="bullentin-text">{{seller.bulletin}}</span>
       <i class="ticon-keyboard_arrow_righ"></i>
     </div>
     <div class="background">
       <img :src="seller.avatar" width="100%" height="100%">
     </div>
     <div v-show="detailShow" class="detail">
       <div class="detail-wrapper clearfix">
         <div class="detail-main">
           <h1 class="name">{{seller.name}}</h1>
         </div>
       </div>
       <div class="detail-close">
         <i class="icon-close"></i>
       </div>
     </div>
  </div>
  
</template>

<script>
export default {
  props: {
    seller: {
      type:Object
    }
  },
  data() {
    return {
      detailShow:false    }
  },
  methods: {
    showDetail: function() {
      this.detailShow = true;
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
      position: relative;
      overflow: hidden;
      background: rgba(7,17,27,0.5);
      .content-wrapper {
        position: relative;
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
        .support-count {
          position: absolute;
          right: 12px;
          bottom:14px;
          padding:0 8px;
          height: 24px;
          line-height: 24px;
          border-radius: 14px;
          background-color: rgba(0,0,0,0.2);
          text-align: center;
          .count {
            font-size: 10px;
          }
          .icon-keyboard_arrow_right {
            font-size: 10px;
          }
        }
      } 
      .bullentin-wrapper {
        height: 28px;
        line-height: 28px;
        padding:0 22px 0 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
        background: rgba(7,17,27,0.2);
        .bullentin-title {
          display: inline-block;
          width: 22px;
          height: 12px;
          background-image: url('../../assets/img/bulletin@2x.png');
          background-size: 22px 12px;
          background-repeat: no-repeat;
          vertical-align: text-bottom;
          margin-top: 8px;
        }
        .bullentin-text {
          font-size: 10px;
          margin:0 4px;
        }
      }
      .background {
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        filter:blur(10px);
      }
      .detail {
        position: fixed;
        z-index: 100;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background: rgba(7,17,27,0.8);
        .detail-wrapper {
          min-height: 100%;
          width: 100%;
          .detail-main {
            margin-top: 64px;
            padding-bottom: 64px;
          }
          .name {
            line-height: 16px;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
          }
          .detail-close {
            position: relative;
            width: 32px;
            height: 32px;
            margin:-64px auto 0 auto;
            clear: both;
            font-size: 32px;
          }
        }
      }
    }
</style>
