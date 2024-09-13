<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	body {
		background-image: url('static/background.png');
		/* 背景图片的路径 */
		background-size: cover;
		/* 背景图自动缩放以覆盖整个页面 */
		background-position: center;
		/* 图片居中显示 */
		background-repeat: no-repeat;
		/* 防止背景重复 */
		background-attachment: fixed;
		/* 背景图固定不随滚动条滚动 */
		min-height: 100vh;
		/* 确保背景覆盖整个视窗 */
	}
</style>