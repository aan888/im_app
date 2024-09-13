<template>
	<view class="chat-page">
		<view class="chat-container">
			<!-- chat介绍 -->
			<view class="chat_simple_describe">
				<text>ai friend</text>
			</view>

			<!-- 消息展示区域 -->
			<scroll-view class="chat-box" scroll-y="true" :scroll-into-view="lastMessageId"
				:scroll-with-animation="true">
				<!-- 循环渲染消息 -->
				<view v-for="(message, index) in messages" :key="index" :id="'msg_' + index" class="chat-message">
					<!-- 如果消息是文本 -->
					<view v-if="message.type === 'text'" class="message-content">
						<text>{{ message.username }}: </text>
						<br>
						<text>{{ message.content }}</text>
					</view>

					<!-- 如果消息是图片 -->
					<view v-else-if="message.type === 'image'" class="message-content">
						<text>{{ message.username }}: </text>
						<br>
						<image :src="message.content" class="chat-image" mode="widthFix"></image>
					</view>
				</view>
				<!-- 占位符，用于滚动到最新消息 -->
				<view :id="lastMessageId"></view>
			</scroll-view>

			<!-- 输入框和发送按钮 -->
			<view class="input-container">
				<textarea v-model="newMessage" placeholder="输入消息..." @keyup.enter="sendMessage" auto-height></textarea>
				<button @click="sendMessage">发送</button>
				<button @click="chooseImage">发送图片</button>
			</view>
		</view>

		<!-- 底部导航栏 -->
		<im_tabbar></im_tabbar>
	</view>
</template>

<script>
	import im_tabbarVue from '../../components/im_tabbar/im_tabbar.vue';
	export default {
		data() {
			return {
				messages: [], // 保存消息的数组
				newMessage: '', // 当前输入的消息
				lastMessageId: 'msg_0' // 用于定位最新消息的 ID
			};
		},
		methods: {
			// 发送消息的方法
			sendMessage() {
				const content = this.newMessage;

				if (content) {
					const message = {
						username: 'User1', // 可以根据实际情况设置用户名
						content: content,
						type: 'text' // 标记为文本消息
					};
					// 清空输入框
					this.newMessage = '';

					// 将消息添加到消息列表
					this.messages.push(message);

					// 滚动到最后一条消息
					this.lastMessageId = 'msg_' + (this.messages.length - 1);
				}
			},

			chooseImage() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['album', 'camera'],
					success: (res) => {
						const tempFilePath = res.tempFilePaths[0];
						const message = {
							username: 'User1',
							content: tempFilePath,
							type: 'image' // 标记为图片消息
						};
						this.messages.push(message);
						this.lastMessageId = 'msg_' + (this.messages.length - 1);
					}
				});
			}
		},
		components: {
			im_tabbarVue
		}
	}
</script>

<style>
	/* 聊天容器，占满整个页面 */
	.chat-container {
		display: flex;
		flex-direction: column;
		background-color: white;
		margin-left: 5%;
		margin-right: 5%;
		/* padding-left: 10px;
		padding-right: 10px;*/
		height: 93vh;
		overflow: hidden;
	}

	/* 聊天详情 */
	.chat_simple_describe {
		height: 80px;
		width: 100vh;
		padding-left: 10px;
	}


	/* 消息展示区域 */
	.chat-box {
		flex: 1;
		/* 弹性布局，占满剩余空间 */
		padding: 10px;
		overflow-y: auto;
		background-color: #f5f5f5;
		border: 1px solid #ddd;
	}

	/* 每条消息的样式 */
	.chat-message {
		margin-bottom: 10px;
	}

	/* 消息内容区域 */
	.message-content {
		background-color: white;
		padding: 10px;
		border-radius: 5px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
		word-wrap: break-word;
		word-break: break-all;
		white-space: normal;
		max-width: 90%;
	}


	/* 输入框和按钮的容器 */
	.input-container {
		display: flex;
		flex-direction: row;
		padding: 10px;
		border-top: 1px solid #ddd;
		background-color: white;
	}

	textarea {
		width: 100%;
		min-height: 50px;
		/* 设置最小高度 */
		max-height: 500px;
		/* 设置最大高度 */
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
		resize: none;
		/* 禁止用户调整大小 */
		overflow: auto;
		/* 显示滚动条以便于查看内容 */
		box-sizing: border-box;
	}

	button {
		padding: 10px 20px;
		background-color: #007bff;
		color: white;
		border: none;
		cursor: pointer;
		margin-top: 10px;
	}

	button:hover {
		background-color: #0056b3;
	}

	.chat-image {
		width: 150px;
		height: auto;
		border-radius: 5px;
		margin-top: 5px;
	}
</style>