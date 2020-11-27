<template>
  <div class="login_container">
    <div class="login_box">
      <h3 class="title">系统登录</h3>
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        label-width="0px"
        :rules="rules"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-yonghu"
            placeholder="账号"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-password"
            placeholder="密码"
            show-password
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="loginSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface LoginForm {
  username: string
  password: string
  clientId: string
}

@Component
export default class Login extends Vue {
  loginForm: LoginForm= {
    username: 'admin',
    password: 'admin',
    clientId: '3'
  }

  rules = {
    username: [
      { required: true, message: '请输入账号', trigger: 'blur' },
      { min: 5, max: 30, message: '账号长度在 5 到 30 个字符', trigger: 'blur' }
    ],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
  }

  // loginSubmit(): void {
  //   (this.$refs.loginFormRef as any).validate(async (vaild: boolean) => {
  //     if (vaild) {
  //       const { data } = await this.$axios.post('login', this.loginForm)
  //       if (data.code !== 0) return this.$message.error(data.message)
  //       this.$message.success('登录成功')
  //       window.sessionStorage.setItem('token', data.token)
  //       this.$router.push('./home')
  //     }
  //   })
  // }
}
</script>

<style scoped lang="scss">
.login_container {
  height: 100%;
  background-color: #2d3a4b;
}
.login_box {
  width: 450px;
  height: 300px;
  position: relative;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  h3 {
    font-size: 26px;
    color: #eee;
    margin: 0 auto 40px auto;
    text-align: center;
    font-weight: 700;
  }
}
</style>
