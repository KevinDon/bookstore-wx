<template>
  <div class="index">
    <div class="header">
      <div class="logo">
        <img src="/static/images/logo.png" alt="Book Store" />
      </div>
      <div class="search">
        <a href="javascript:void (0)" id="searchPopup" @click="openSearchPopup">
          <i-icon type="search" size="12" color="#80848f" />
          {{bookName}}
        </a>
      </div>
      <searchKeyword :conf="mtSearchConf" @setPopStatus="setPopStatus"  :searchShow="searchPopStatus" />
    </div>
  </div>
</template>

<script>
import searchKeyword from '@/components/index/searchKeyword';
export default {
    name: 'Index',
    data () {
        return {
            bookName: '诡秘之主',
            searchPopStatus: false,
            mtSearchConf: {
                'getUrl': '/base/books/searchKeyword.do/'
            }
        };
    },

    components: {
        searchKeyword
    },

    methods: {
        openSearchPopup: function () {
            console.log('test');
            this.searchPopStatus = true;
        },
        setPopStatus: function (status) {
            this.searchPopStatus = status;
        },
        getRemote: function(){
            console.log('getRemote');
        }
    },

    created () {
    // let app = getApp()
    }
};
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
