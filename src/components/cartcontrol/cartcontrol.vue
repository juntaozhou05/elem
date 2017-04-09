<template>
  <div class="cartcontrol">
    <transition name="move">
      <div transition="move" class="cart-decrease" v-show="food.count>0" @click="decreaseCart">-</div>
    </transition>
    
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <transition>
      <div class="cart-add" @click="addCart">+</div>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  props: {
    food: {
      type:Object
    }
  },
  data () {
    return {

    }
  },
  methods:{
    addCart() {
      if(!this.food.count) {
        Vue.set(this.food,'count',1);
      }else {
        this.food.count++;
      }
      this.$emit('addCart',event.target)
    },
    decreaseCart() {
      if(this.food.count) {
        this.food.count--;
      }
    }
  }
}
</script>

<style lang="less">
  .cartcontrol {
    font-size: 0;
    .cart-decrease {
      display: inline-block;
      padding:6px;
      line-height: 24px;
      font-size: 24px;
      color:rgb(0,160,220);
      transition:all 0.4s linear;
      &.move-transition {
        opacity: 1;
        transform:translate3D(0,0,0);
      }
      &.move-enter, &.move-leave-active {
        opacity: 0;
        transform:translate3D(24px,0,0);
      }
    }
    .cart-count {
      display: inline-block;
      vertical-align: top;
      width: 12px;
      padding-top: 6px;
      line-height: 24px;
      text-align: center;
      font-size: 10px;
      color:rgb(147,153,159);
    }
    .cart-add {
      display: inline-block;
      line-height: 24px;
      font-size: 24px;
      padding:6px;
      color:rgb(0,160,220);
    }
  }
</style>