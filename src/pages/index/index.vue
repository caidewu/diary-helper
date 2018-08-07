<template>
  <div class="container">
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__hd">起始时间</div>
        <div class="weui-cell__bd">
          <picker mode="date" :value="start" @change="handleStartChange">{{start || '请选择开始时间'}}</picker>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">结束时间</div>
        <div class="weui-cell__bd">
          <picker mode="date" :value="end" @change="handleEndChange">{{end || '请选择结束时间'}}</picker>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">生成起床时间</div>
        <div class="weui-cell__bd">
          <switch :checked="isGenRiseTime" @change="handleChange"></switch>
        </div>
      </div>
    </div>
    <button class="weui-btn" @click="getCurrentDiary">生成日志</button>
    <textarea class="text-area" placeholder="粘贴预览..."></textarea>
  </div>
</template>

<script>
import { dateFormat } from '../../utils';

export default {
  data() {
    return {
      start: undefined,
      end: undefined,
      isGenRiseTime: true,
    };
  },
  methods: {
    handleStartChange(e) {
      this.start = e.target.value;
    },
    handleEndChange(e) {
      this.end = e.target.value;
    },
    handleChange(e) {
      this.isGenRiseTime = e.target.value;
    },
    genaratorText(today, isGenRiseTime) {
      const now = new Date();
      const date = dateFormat(today, 'YYYY.MM.DD EEE');
      const lost = (today - this.lostDay) / 1000 / 3600 / 24;
      const currentTime = isGenRiseTime ? `${now.getHours()}:${now.getMinutes()} ` : '';
      return `${date} ${lost}\n起床时间: ${currentTime}\n\n`;
    },
    getCurrentDiary() {
      let startTime = new Date(this.start);

      let text = '';
      if (this.end) {
        const endTime = new Date(this.end);
        while (endTime >= startTime) {
          text += this.genaratorText(endTime);
          endTime.setDate(endTime.getDate() - 1);
        }
      } else {
        text = this.genaratorText(startTime, this.isGenRiseTime);
      }

      wx.setClipboardData({
        data: text,
        success: (res) => {
          console.log(res);
        },
      });
    },
  },
  onLoad() {
    this.lostDay = new Date('2018-04-17');

  },
};
</script>

<style scoped>
  .weui-cell__bd {
    text-align: right;
  }

  .container {
    padding: 20rpx;
  }
  .text-area {
    width: 100%;
    margin-top: 20rpx;
    padding: 10rpx;
    box-sizing: border-box;
    border-radius: 10rpx;
    height: 500rpx;
    border: 1rpx solid #ccc;
  }

</style>
