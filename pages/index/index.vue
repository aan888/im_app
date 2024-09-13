<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<im_tabbar></im_tabbar>
	</view>
</template>

<script>
	import im_tabbarVue from '../../components/im_tabbar/im_tabbar.vue';
	export default {
		data() {
			return {
				title: '你好, 我的朋友'
			}
		},
		methods: {
		},
		components:{
			im_tabbarVue
		}
	};
	
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.text-area {
		height: 200rpx;
		width: 600rpx;
		margin-top: 40%;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36px;
		font-weight: bold;
		color: #000000;
	}
</style>
