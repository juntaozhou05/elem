<template>
  <div id="app">
    <top :seller="seller"></top>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
       <div class="tab-item">
         <router-link to="/sellers">商家</router-link>
       </div>
     </div>
    <router-view></router-view>
  </div>
</template>

<script>
import top from './components/header/header.vue'
export default {
  name: 'app',
  data () {
    return {
      seller: {}
    }
  },
  mounted: function() {
    this.$http.get('static/data.json').then((res) => {
      this.seller = res.data.seller
    });
  },
  components: {
    top
  }
}
</script>

<style lang="less">
@border1: 0.1rem solid rgba(7,17,27,0.1);

body {
  font-size: 62.5%;
}
a {
  text-decoration: none;
}
.clearfix {
  display: inline-block;
  &:after {
    display: block;
    height: 0;
    line-height: 0;
    clear:both;
    visibility: hidden;
    content:'.'
  }
}
  #app {
    .tab {
      display: flex;
      width: 100%;
      height: 4rem;
      line-height: 4rem;
      border-bottom: @border1;
      .tab-item {
        flex:1;
        text-align: center;
      }
      & a {
        display: block;
        font-size: 1.4rem;
        color:rgb(77,85,93);
        &.router-link-active {
          color:rgb(240,20,20);
        }
      }
    }
  }
</style>
