<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
          <span class="text">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="food-list food-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li @click="selectFood(food,$event)" v-for="food in item.foods" class="food-item">
              <div class="icon">
                <img :src="food.icon" alt="" width="57" height="57">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}</span><span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol @addCart="_drop" :food="food"></cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcar @add="add" ref='shopcart' :select-foods="selectFoods" :delivery-price='seller.deliveryPrice' :min-price='seller.minPrice'></shopcar>
    <food :food="selectedFood" ref="food"></food>
    
  </div>
</template>

<script>
import Vue from 'vue';
import BScroll from 'better-scroll';
import shopcar from '../shopcar/shopcar.vue'
import cartcontrol from '../cartcontrol/cartcontrol.vue'
import food from '../food/food.vue'
export default {
  props: {
    seller: {
      type:Object
    }
  },
  data() {
    return {
      goods:[],
      listHeight:[],
      scrollY:0,
      selectedFood:{}
    }
  },
  mounted: function() {
    this.$http.get('../static/data.json').then((res) => {
      this.goods = res.data.goods;
      this.$nextTick(()=>{
        this._initScroll();
        this._calculateHeight();
      })
    });
  },
  computed:{
    currentIndex() {
      for(let i=0;i<this.listHeight.length;i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i+1];
        if(!height2 || (this.scrollY>=height1&&this.scrollY<height2)){
          return i;
        }
      }
      return 0;
    },
    selectFoods() {
      let foods = [];
      this.goods.forEach((good)=>{
        good.foods.forEach((food)=>{
          if(food.count){
            foods.push(food);
          }
        })
      })
      return foods;
    }
  },
  methods: {
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click:true
      });
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        probeType:3,click:true
      });
      this.foodsScroll.on('scroll',(pos)=>{
        this.scrollY = Math.abs(Math.round(pos.y));
      })
    },
    _calculateHeight() {
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
      let height = 0;
      this.listHeight.push(height);
      for(let i=0;i<foodList.length;i++) {
        let item = foodList[i];
        height+=item.clientHeight;
        this.listHeight.push(height);
      }
    },
    selectFood(food,event) {
      this.selectedFood = food;
      this.$refs.food.show();
    },
    selectMenu(index,event) {
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
      let el = foodList[index];
      this.foodsScroll.scrollToElement(el,300);
    },
    _drop(target) {
      this.$refs.shopcart.drop(target);
    },
    add(target) {
      this._drop(target);
    }
  },
  created() {
    this.classMap = ['decrease','discount','special','invoice','gurantee'];
  },
  components: {
    shopcar,
    cartcontrol,
    food
  }
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
        &.current {
          position: relative;
          margin-top: -1px;
          z-index: 10;
          background: #fff;
          font-weight: 700;
          .text {
            border:none;
          }
        }
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
      flex:1;
      .title {
        padding-left: 14px;
        height: 26px;
        line-height: 26px;
        border-left: 2px solid #d9dde1;
        font-size: 12px;
        color:rgb(147,153,159);
        background:#f3f5f7;
      } 
      .food-item {
        display: flex;
        margin: 18px;
        padding-bottom: 18px;
        border-bottom:1px solid rgba(7,17,27,0.1);
            position: relative;
        &:last-child {
          border: none;
          margin-bottom: 0;
        }
        .icon {
          flex:0 0 57px;
          margin-right: 10px;
        }
        .content {
          flex:1;
          .name {
            margin:2px 0 8px 0;
            height: 14px;
            line-height: 14px;
            font-size: 14px;
            color:rgb(7,17,27);
          }
          .desc, .extra  {
            line-height: 10px;
            font-size: 10px;
            color:rgb(7,17,27);
          }
          .desc {
            margin-bottom: 8px;line-height: 12px;
          }
          .extra {
            line-height: 10px;
            .count {
              margin-right: 12px
            }
          }
          .price {
            font-weight: 700;
            line-height: 24px;
            .now {
              margin-right: 8px;
              font-size: 14px;
              color:rgb(240,20,20);
            }
            .old {
              text-decoration: line-through;
              font-size: 10px;
              color:rgb(147,153,159);
            }
          }
          .cartcontrol-wrapper {
            position: absolute;
            right: 0;
            bottom:12px;
          }
        }
      }
    }
  }
</style>