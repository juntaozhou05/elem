<template>
    <transition name="move">
      <div v-show="showFlag" class="food">
        <div>111111</div>
      </div>
    </transition>
</template>

<script>
export default {
  props:{
    food:{
      type:Object
    }
  },
  data () {
    return {
      showFlag:false
    }
  },
  methods: {
    show() {
      this.showFlag = true;
    }
  }   
}
</script>

<style lang="less">
  .food {
    position: fixed;
    left:0;
    top:0;
    bottom:48px;
    z-index: 30;
    width: 100%;
    background: #fff;
    transform: translate3d(0, 0, 0);
    &.move-enter-active, &.move-leave-active {
      transition:all 0.2s linear;
    }
    &.move-enter, &.move-leave-active {
      transform:translate3D(100%,0,0);
    }
  }
</style>