<template>
    <div class="shopcar">
      <div class="content" @click="toggleList">
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
          <div class="pay" :class="payClass">
            {{payDesc}}
          </div>
        </div>
      </div>
      <!-- <div class="ball-container">
        <transition-group name="drop" tag="div" class="ball" v-for="ball in balls" v-show="ball.show" >
        	<div class="inner inline-hook" :key="ball"></div>
        </transition-group>
      </div> -->
      <transition name="fold">
      	<div class="shopcart-list" v-show="listShow">
	      	<div class="list-header">
	      		<h1 class="title">购物车</h1>
	      		<span class="empty" @click="empty">清空</span>
	      	</div>
	      	<div class="list-content">
	      		<ul>
	      			<li class="food" v-for="food in selectFoods">
	      				<span class="name">{{food.name}}</span>
	      				<div class="price">
	      					<span>￥{{food.price*food.count}}</span>
	      				</div>
	      				<div class="cartcontrol-wrapper">
	      					<cartcontrol></cartcontrol>
	      				</div>
	      			</li>
	      		</ul>
	      	</div>
	      </div>
      </transition>
    </div>
</template>

<script>
import cartcontrol from '../cartcontrol/cartcontrol.vue'
export default {
  props: {
    deliveryPrice: {
      type:Number,
      default:0
    },
    minPrice: {
      type:Number,
      default:0
    },
    selectFoods: {
      type:Array,
      default:[]
    }
  },
  data() {
    return {
      balls: [
        {
          show:false
        },
        {
          show:false
        },
        {
          show:false
        },
        {
          show:false
        }
      ],
      dropBalls:[],
      fold:true
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
    },
    payDesc() {
      if(this.totalPrice === 0) {
        return `￥${this.minPrice}起送`;
      }else if(this.totalPrice<this.minPrice) {
        let diff = this.minPrice - this.totalPrice;
        return `还差￥${diff}元起送`;
      }else {
        return '去结算';
      }
    },
    payClass() {
      if(this.totalPrice<this.minPrice) {
        return 'not-enough';
      }else {
        return 'enough';
      }
    },
    listShow() {
    	if(!this.totalCount) {
    		this.fold = true;
    		return false;
    	}
    	let show = !this.fold;
    	return show;
    }
  },
  methods: {
    drop(el) {
      for(let i=0;i<this.balls.length;i++) {
      	let ball = this.balls[i];
      	if(!ball.show) {
      		ball.show = true;
      		ball.el = el;
      		this.dropBalls.push(ball);
      		return;
      	}
      }
    },
    toggleList() {
    	if(!this.totalCount) {
    		return;
    	}
    	this.fold = !this.fold;
    },
    transitions: {
    	drop: {
    		beforeEnter(el) {
    			let count = this.balls.length;
    			while(count--) {
    				let ball = this.balls[count];
    				if(ball.show) {
    					let rect = ball.el.getBoundingClientRect();
    					let x = rect.left - 32;
    					let y = -(window.innerHeight - rect.top - 22);
    					el.style.display = '';
    					el.style.transform = `translate3d(0,${y}px,0)`;
    					let inner = el.getElementByClassName('inline-hook')[0];
    					inner.style.transform = `translate3d(${x}px,0,0)`;
    				}
    			}
    		},
    		enter(el) {
    			let rf = le.offsetHight;
    			this.$nextTick(() =>{
					el.style.transform = `translate3d(0,0,0)`;
					let inner = el.getElementByClassName('inline-hook')[0];
					inner.style.transform = `translate3d(0,0,0)`;
    			})
    		},
    		afterEnter(el) {
    			let ball = this.dropBalls.shift();
    			if(ball) {
    				ball.show = false;
    				el.style.display = 'none';
    			}
    		}
    	}
    },
    empty() {
      this.selectFoods.forEach((food)=>{
        food.count = 0;
      });
    }
  },
  components: {
  	cartcontrol
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
          &.not-enough {
            background: #2b333b;
          }
          &.enough {
            background: #00b43c;
            color:white;
          }
        }
      }
    }
    .ball-container {
      .ball {
        position: fixed;
        left:32px;
        bottom:22px;
        z-index: 200;
        &.drop-move {
        	transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
        }
        .inner {
			width: 16px;
            height: 16px;
            border-radius: 50%;
            background: rgb(0, 160, 220);
            transition: all 0.4s linear;
    	}
      }
    }
    .shopcart-list {
    	position: absolute;
    	bottom:50px;
    	left: 0;
    	width: 100%;
      padding: 20px 0;
      background: white;
      z-index:-1;
		&.fold-enter-active{
			transition:all 0.5s;
			transform:translate3d(0,110%,0);
		}
		&.fold-enter,&.fade-leave-active {
			transform:translate3d(0,0,0);
		}
		.list-header {
			height: 40px;
			line-height: 40px;
			padding:0 18px;
			background: #f3f5f7;
			border-bottom: 1px solid rgba(7,17,27,0.1);
			.title {
				float:left;
				font-size: 14px;
				color:rgb(7,17,27);
			}
			.empty {
				float:right;
				font-size: 12px;
				color:rgb(0,160,220);
			}
		}
		.list-content {
			padding:0 18px;
			max-height: 217px;
			background: #fff;
			overflow: hidden;

		}
    }
  }
</style>