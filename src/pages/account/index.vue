<template>
	<div>
		<van-row gutter="20">
			<van-col span="8" offset="8">

				<van-skeleton
					avatar
					avatar-size="128rpx"
					:loading="skeLoading">
					<van-image
						round
						width="128"
						height="128"
						fit="cover"
						lazy-load
						v-bind:src="userAvatarUrl">
						<template v-slot:loading>
							<van-loading type="spinner" size="20"/>
						</template>
					</van-image>
				</van-skeleton>
			</van-col>
		</van-row>
		<van-row gutter="20">
			<van-col span="10" offset="4" >
				<van-skeleton
					title
					row="3"
					:loading="skeLoading">
					<view style="text-align: center">{{ userInfo.nickName }}</view>
				</van-skeleton>
				<button v-if="!userInfo.nickName" type="primary" open-type="getUserInfo"
						bindgetuserinfo="bindGetUserInfo" @getuserinfo="userAuth">授权登录
				</button>

			</van-col>
		</van-row>

	</div>
</template>

<script>
    export default {
        name: 'Account',
        data() {
            return {
                userInfo: {}
            };
        },
        mounted() {

        },

        methods: {
            bindGetUserInfo(e) {
                console.log(e.detail.userInfo);
            },
            async userAuth(detail) {
                let me = this;

                console.log(detail);
                await wx.getSetting({
                    success(res) {
                        debugger;
                        if (!res.authSetting['scope.userInfo']) {
                            wx.authorize({
                                scope: 'scope.userInfo',
                                success() {
                                    wx.getUserInfo({
                                        success: result => {
                                            me.userInfo = result.userInfo;
                                            console.log(result);
                                        }
                                    });
                                },
                                fail(err) {
                                    console.error('wx get setting for scope.userInfo failed!', err);
                                }
                            });
                        } else {
                            wx.getUserInfo({
                                success: result => {
                                    me.userInfo = result.userInfo;
                                    console.log(result);
                                }
                            });
                        }


                    },
                    fail(err) {
                        console.error('wx get setting failed!', err);
                    }
                });
            }
        },
        computed: {
            skeLoading: {
                get() {
                    return !Object.keys(this.userInfo).length > 0;
                }
            },
            userAvatarUrl: {
                get() {
                    return this.userInfo.hasOwnProperty('avatarUrl') ? this.userInfo.avatarUrl : '';
                }
            }

        }
    };
</script>

<style>

</style>
