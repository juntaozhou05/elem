<template>
    <div class="shopcar">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo">
              <span class="shop-car"></span>
            </div>
          </div>
          <div class="price"></div>
          <div class="desc"></div>
        </div>
        <div class="content-right"></div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  mounted: function() {
    
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
      .content-left {
        flex:1;
        .logo-wrapper {
          display: inline-block;
          position: relative;
          top:-10px;
          margin:0 12px;
          padding:6px;
          width: 56px;
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
        .price {
          display: inline-block;
          vertical-align: top;
          line-height: 24px;
          margin-top: 12px;
          box-sizing: border-box;
          padding-right: 12px;
          border-right: 1px solid rgba(255,255,255,0.1);
          font-size: 16px;
          font-weight: 700;
          
        }
        .desc {
          display: inline-block;
        }
      }
      .content-right {
        flex:0 0 105px;
        width: 105px;
      }
    }
  }
</style>