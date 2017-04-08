<template>
    <div class="shopcar">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'hightlight':totalPrice>0}">
              <span class="shop-car"></span>
            </div>
            <div class="num" v-show="totalCount>0">{{totalCount}}</div>
          </div>
          <div class="price" :class="{'hightlight':totalPrice>0}">￥{{totalPrice}}元</div>
          <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
        </div>
        <div class="content-right">
          <div class="pay">
            ￥{{minPrice}}元起送
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    deliveryPrice: {
      type:Number,
      default:0
    },
    minPrice: {
      type:Number,
      default:0
    }
  },
  data() {
    return {
      selectFoods: []
    }
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.selectFoods.forEach((food)=>{
        total+=food.price*food.count;
      })
      return total;
    },
    totalCount() {
      let count = 0;
      this.selectFoods.forEach((food)=>{
        count+=food.count;
      })
      return count;
    }
  }
}
</script>

<style lang="less">
  .shopcar {
    position: fixed;
    left:0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 48px;
    .content {
      display: flex;
      background: #141d27;
      font-size: 0;
      color:rgba(255,255,255,0.4);
      .content-left {
        flex:1;
        .logo-wrapper {
          display: inline-block;
          position: relative;
          top:-10px;
          margin:0 12px;
          padding:6px;
          width: 52px;
          height: 56px;
          box-sizing: border-box;
          vertical-align: top;
          border-radius: 50%;
          background: #141d27;
          .logo {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #2b343c;
            text-align: center;
            &.hightlight {
              background: rgb(0,160,220);
            }
          }
          .shop-car {
            font-size: 24px;
            color:#80858a;
            line-height: 44px;
            display: inline-block;
            width: 26px;
            height: 26px;
            margin-top: 7px;
            background-size: 26px 26px;
            background-repeat: no-repeat;
            background-image: url("../../assets/img/shopcar.png");
          }
        }
        .num {
          position: absolute;
          top:0;
          right: 0;
          width: 24px;
          height: 24px;
          border-radius: 16px;
          line-height: 24px;
          text-align: center;
          font-size: 9px;
          font-weight: 700;
          color:white;
          background: rgb(240,20,20);
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
        }
        .price {
          display: inline-block;
          vertical-align: top;
          line-height: 24px;
          margin-top: 12px;
          box-sizing: border-box;
          padding-right: 4px;
          border-right: 1px solid rgba(255,255,255,0.1);
          font-size: 13px;
          font-weight: 700;
          &.hightlight {
            color:white;
          }
        }
        .desc {
          display: inline-block;
          vertical-align: top;
          line-height: 24px;
          margin: 12px 0 0 5px;
          font-size: 10px;
        }
      }
      .content-right {
        flex:0 0 90px;
        width: 90px;
        .pay {
          height: 48px;
          line-height: 48px;
          text-align: center;
          font-size: 12px;
          font-weight: 700;
          background: #2b333b;
        }
      }
    }
  }
</style>