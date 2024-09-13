<template>
	<view>
		<u-tabbar v-model="active" @change="onChange">
			<u-tabbar-item text="首页" icon="home"></u-tabbar-item>
			<u-tabbar-item text="聊天" icon="chat"></u-tabbar-item>
			<u-tabbar-item text="我的" icon="account"></u-tabbar-item>
		</u-tabbar>
	</view>
</template>s

<script>
	export default {
		name: "im_tabbar",
		methods: {
			onChange(index) {
				// 根据点击的 tab 索引进行页面跳转
				this.active = index; // 更新当前激活的 tab 索引

				switch (index) {
					case 0:
						// 跳转到首页
						uni.navigateTo({
							url: '/pages/index/index' // 注意这里是 tabBar 页面时使用 switchTab
						});
						break;
					case 1:
						// 跳转到聊天页面
						uni.navigateTo({
							url: '/pages/chat/chat'
						});
						break;
					case 2:
						// 跳转到我的页面
						uni.navigateTo({
							url: '/pages/mine/mine'
						});
						break;
				}
			}
		}
	}
</script>

<style>

</style>