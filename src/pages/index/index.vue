<template>
  <div class="index">
    <div class="header">
      <div class="logo">
        <img src="/static/images/logo.png" alt="Book Store" />
      </div>
      <div class="search">
        <a href="javascript:void (0)" id="searchPopup" @click="openSearchPopup(mtSearchConf)">
          <i class="icon iconfont icon-search"></i>
          {{bookName}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import searchKeyword from '@/components/index/searchKeyword'

export default {
  data () {
    return {
      bookName: '诡秘之主'
    }
  },

  components: {
    searchKeyword
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped lang="stylus">
  .index
    margin 5px
  .header
    overflow hidden;
    float left;
    margin-left : 5px;
    width 100%
    &>.logo
      float left;
      img
        height: 30px;
        width: 150px;
  &>.search
       width 55%;
       float right;
       margin-right 5px;
      a
        text-decoration: none;
        cursor: pointer;
        height 30px
        font-size: 12px;
        line-height: 30px;
        display: block;
        text-align: center;
        color: #969ba3;
        border-radius: 5px;
        background-color: #f5f5f5;
</style>
