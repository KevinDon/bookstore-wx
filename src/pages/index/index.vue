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
import card from '@/components/card'

export default {
  data () {
    return {
      bookName: '诡秘之主'
    }
  },

  components: {
    card
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
  .header
    overflow hidden;
    float left;
    margin-left : 5px;
    &>.logo
      float left;
      img
        height: 30px;
        width: 150px;
  &>.search
     width 65%;
     float right;
    a
      text-decoration: none;
      cursor: pointer;
      height 2rem
      font-size: .8125rem;
      line-height: 2rem;
      display: block;
      text-align: center;
      color: #969ba3;
      border-radius: .25rem;
      background-color: #f5f5f5;
</style>
