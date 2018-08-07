<template>
  <div class="container">
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">用户名</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" v-model="user.username" placeholder="请输入用户名"/>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input" v-model="user.password" placeholder="请输入密码"/>
        </div>
      </div>
    </div>
    <div>
      <button @click="saveUser">保存</button>
    </div>
  </div>
</template>

<script>
import AV from 'leancloud-storage';

export default {
  data() {
    return {
      motto: 'Hello World',
      user: {},
      day: 106,
    };
  },
  methods: {
    setUserName() {
      const user = AV.User.current();
      const ret = user && user.setUsername('caidewu').save();
      console.log(ret);
    },
    saveUser() {
    // dd
    },
    login() {
      Promise.resolve(AV.User.current())
        .then(user => {
          if (!user) return null;
          console.log(user);
          return user.isAuthenticated();
        })
        .then(user => (user || AV.User.loginWithWeapp()))
        .catch(error => console.error(error));
    },
  },
  onLoad() {
    this.login();

  },
};
</script>

<style scoped>

  .container {
    padding: 20rpx;
  }
  .text-area {}

</style>
