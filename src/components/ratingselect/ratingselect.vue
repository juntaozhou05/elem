<template>
    <div class="raringselect">
      <div class="rating-type">
        <span>{{desc.all}}</span>
        <span>{{desc.positive}}</span>
        <span>{{desc.nagetive}}</span>
      </div>
      <div class="switch">
        <span class="icon-check_circle"></span>
        <span class="text"></span>
      </div>
    </div>
</template>

<script>
const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;
export default {
  props: {
    ratings: {
      type:Array,
      default() {
        return [];
      }
    },
    selectType: {
      type: Number,
      default: ALL
    },
    onlyCoutent: {
      type: Boolean,
      default: false
    },
    desc: {
      type: Object,
      default() {
        return {
          all:'全部',
          positive: '满意',
          nagetive:'不满意'
        }
      }
    }
  },
  data () {
    return {
      
    }
  },
  mounted: function() {
    
  }
}
</script>

<style lang="less">
  
</style>