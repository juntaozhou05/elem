<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
          <span class="text">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div>
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
      goods:[]
    }
  },
  mounted: function() {
    this.$http.get('../static/data.json').then((res) => {
      this.goods = res.data.goods;
    });
  },
  created() {
    this.classMap = ['decrease','discount','special','invoice','gurantee'];
  },
  
}
</script>

<style lang="less">
  .goods {
    display: flex;
    position: absolute;
    width: 100%;
    top:174px;
    bottom: 46px;
    overflow: hidden;
    .menu-wrapper {
      flex:0 0 80px;
      width: 80px;
      background:#f3f5f7;
      .menu-item {
        display: table;
        height: 54px;
        width: 56px;
        line-height: 14px;
        padding:0 12px;
        .icon {
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-right: 2px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          vertical-align: middle;
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
          display: table-cell;
          width: 56px;
          vertical-align: middle;
          border-bottom:1px solid rgba(7,17,27,0.1);
        }
      }
    }
    .foods-wrapper{
      flex:1
    }
  }
</style>