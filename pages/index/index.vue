<template>
	<view class="content" @click="addNum">
		{{num}}
	</view>
</template>

<script setup scoped>
	import { ref } from "vue";
	
	// About num
	const num = ref(0);
	const addNum = () => num.value ++;
	
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
