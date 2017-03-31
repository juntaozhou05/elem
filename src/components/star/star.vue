<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
  </div>
</template>

<script>
export default {
  props: {
  	size:{
  		type: Number
  	},
  	score: {
  		type: Number
  	}
  },
  computed: {
  	starType() {
  		return 'star-'+this.size;
  	}
  }
}
</script>

<style lang="less">
	.star{
		font-size: 0;
		&.star-48 {
			.star-item {
				width: 20px;
				height: 20px;
				margin-right: 22px;
				background-size: 20px 20px;
				&.on {
					background-image: url('../../assets/img/brand@2x.png');
					
				}
			}
		};
		&.star-36;
		&.star-24;
		
	}
</style>
