<template>
  <div class="login_container">
    <div class="login_box">
      <h3 class="title">系统登录</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
  @Prop() private msg!: string
}
</script>

<style scoped lang="scss">
.login_container {
  height: 100%;
  background-color: #2d3a4b;
}
.login_box{
  width: 450px;
  height: 300px;
  // background-color: #fff;
  position: relative;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  h3 {
    font-size: 26px;
    color: #eee;
    margin: 0 auto 40px auto;
    font-weight: 700;
  }
}
</style>
