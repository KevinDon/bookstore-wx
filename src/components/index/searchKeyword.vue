<template>
	<div id="searchForm" v-show="searchShow" ref="searchForm">
		<form action="" @submit.prevent="" target="frameFile">
			<label>
				<!--            <input class="" type="text"  v-model="mtSearchConf.commodityName" cancel-text="取消" placeholder="搜索" @keyup.enter.native="getRemoteData(mtSearchConf)" :autofocus="true" />-->
				<i-panel title="基础用法">
					<i-input class="searchInput"
							 @keyup.enter.native="getRemoteData(mtSearchConf)"
							 :value="placeholder"
							 :placeholder="placeholder"
							 @input="handleSearchClick"
							 :type="text"
					/>
					<a href="javascript:void(0)" class="search" @click="handleSearchClick">搜索</a>
					<a href="javascript:void(0)" class="searchCancel" @click="handleClick">取消</a>
				</i-panel>
			</label>
			<div :key="item.id" v-for="item in searchResult" class="searchResult">
				<span class="bookImg"><img :src="item.bookImg" :alt="item.bookName"></span>
				<span class="bookContent">
                                <span class="bookName">{{item.bookName}}</span>
                                <span class="brief">{{item.brief}}</span>
                                <span class="author">
                                    <i class="icon iconfont icon-account"/>{{item.author}}
                                    <span class="book-meta">
                                        <span>{{item.type}}</span>
                                        <span style="color: red">{{item.isEnd}}</span>
                                        <span style="color:#4284ed">{{item.wordCount}}</span>
                                    </span>
                                </span>
                            </span>
			</div>
		</form>
		<div id="searchResult" v-show="mtSearchConf.searchClicked"></div>
	</div>
</template>

<script>
	import {fetch} from '@/utils/axios';
	import {keywordData} from '@/mock/index';

	export default {
	    'props': {
	        'conf': {
	            'type': Object,
	            'default': () => {
	            }
	        },
	        'searchShow': {
	            'type': Boolean,
	            'default': false
	        },
	        'callback': {}
	    },
	    data() {
	        return {
	            'placeholder': '诡秘之主',
	            'searchResult': []
	        };
	    },
	    'mounted': function () {
	        this.$nextTick(() => {
	            let me = this;

	            console.log(me);
	        });
	    },
	    'computed': {
	        mtSearchConf() {
	            let conf = this.conf ? this.conf : {};
	            let defaultConf = {
	                'commodityName': '请输入书名/作者',
	                'searchPopStatus': false,
	                'searchClicked': false
	            };

	            return Object.assign({}, defaultConf, conf);
	        }
	    },
	    'methods': {
	        'getRemoteData': async function (conf) {
	            let me = this;

	            conf.searchClicked = true;
	            console.log('search');
	            let data = await fetch({
	                url: conf.getUrl,
	                method: 'post',
	                params: {}
	            });

	            if (data) {
	                console.log(data);
	                me.searchResult = data.data;
	            } else {
	                console.log('访问失败');
	            }
	        },
	        'handleClick': function () {
	            let me = this;

	            me.$emit('setPopStatus', false);
	            me.mtSearchConf.searchClicked = false;
	            me.mtSearchConf.searchResult = [];
	            console.log('handleClick');
	        },
	        'handleSearchClick': function () {
	            console.log('handleSearchClick');
	            this.searchResult = keywordData;
	            // console.log(this.searchResult);
	            // return;
	            // eslint-disable-next-line no-unreachable
	            this.getRemoteData(this.mtSearchConf);
	        },
	        'handleChange': function () {
	            console.log('HandleChange');
	        },
	        'handleConfirm': function () {
	            console.log('handleConfirm');
	        }
	    }
	};
</script>

<style scoped lang="stylus">
	#searchForm
		position: fixed;
		z-index: 20;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: #fff;

		.searchResult
			overflow hidden;
			width 100%;
			float left;
			margin-top 1rem;
			margin-left: .3em;
			margin-right .3rem;

			span
				float left;

				&.bookContent
					width 75%;
					margin-right: .5rem;
					margin-left: .5rem;

					span
						display block;
						width: 100%;
						text-align: left;

						&.bookName
							line-height: 1.4;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;

						&.brief
							font-size: .875rem;
							line-height: 1.125rem;
							overflow: hidden;
							margin: .375rem 0;
							color: #969ba3;
							height 2.8rem;

						&.author
							font-size: .8125rem;
							display: block;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							color: #969ba3;

							& span.book-meta
								width 50%
								float right;

								& span
									width auto
									color: #969ba3;
									opacity: .5;
									border: 1px solid;
									border-radius: .11111em;
									margin-right: 0.2rem;

		img
			height 6rem;

	.searchInput
		float left;
		width 70%

		& > input
			background-color #d9d9d9;

	.searchCancel,.search
		float right;
		width auto
		line-height 45px
		height 45px
		padding 7px 15px
		font-size 14px;
		color #3e3e3e;

</style>
