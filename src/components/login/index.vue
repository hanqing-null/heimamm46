<template>
  <!-- 整体容器 -->
  <div class="login-container">
    <!-- 左侧盒子 -->
    <div class="left-box">
      <!-- 顶部的标题 -->
      <div class="title-box">
        <img src="../../assets/login_logo.png" alt class="logo" />
        <span class="title">黑马面面</span>
        <span class="line"></span>
        <span class="sub-title">用户登录</span>
      </div>
      <!-- 表单 -->
      <el-form :rules="rules" ref="loginForm" :model="loginForm" label-width="43px">
        <!-- 手机号 -->
        <el-form-item>
          <el-input placeholder="请输入手机号" prefix-icon="el-icon-user" v-model="loginForm.phone"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="loginForm.password"></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="loginCode">
          <el-row>
            <el-col :span="17">
              <el-input
                placeholder="请输入验证码"
                prefix-icon="el-icon-key"
                v-model="loginForm.loginCode"
              ></el-input>
            </el-col>
            <el-col :span="7">
              <img class="login-code" src="../../assets/logo.png" alt />
            </el-col>
          </el-row>
        </el-form-item>
        <!-- 用户协议 -->
        <el-form-item>
          <el-checkbox v-model="loginForm.isCecked">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登陆</el-button>
          <el-button type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 右边的图片 -->
    <img src="../../assets/login_banner_ele (1).png" alt />
  </div>
</template>

<script>
export default {
  // 组件的名字
  data() {
    return {
      // 表单属性
      loginForm: {
        // 手机号
        phone: "",
        // 密码
        passwrod: "",
        // 验证码
        loginCode: "",
        // 用户协议
        isChecke: false
      },

      //  效验规格
      rules: {
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "密码长度为6-12位", trigger: "blur" }
        ],
        loginCode: [
          { required: true, message: "验证码不能为空", trigger: "blur" },
          { min: 4, max: 4, message: "验证码长度为4位", trigger: "blur" }
        ]
      }
    };
  }
};
</script>

<style lang="less">
.login-container {
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  /* 开启弹性布局 */
  display: flex;
  /* 上下居中 */
  align-items: center;
  /* 左右均分 */
  justify-content: space-around;

  // 左侧盒子
  .left-box {
    width: 478px;
    background-color: #f5f5f5;
    height: 550px;
    box-sizing: border-box;
    padding-right: 41px;
    // 左侧盒子顶部
    .title-box {
      display: flex;
      align-items: center;
      margin-top: 44px;
      margin-left: 48px;
      margin-bottom: 27px;

      .title {
        font-size: 24px;
        margin-left: 16px;
        margin-right: 14px;
      }
      .line {
        width: 1px;
        height: 28px;
        background-color: #c7c7c7;
      }
      .sub-title {
        font-size: 21px;
        margin-left: 12px;
      }
    }
    // 表单
    .el-form {
      // 验证码图片
      .login-code {
        width: 100%;
        height: 48.8px;
      }
      // 协议样式
      .el-checkbox {
        display: flex;
        .el-checkbox__label {
          display: flex;
        }
      }

      .el-row .el-col-7 {
        height: 48.8px;
      }

      // 按钮
      .el-form-item__content .el-button--primary {
        width: 100%;
        margin-bottom: 20px;
        margin-left: 0px;
      }
    }
  }
}
</style>
