<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router';
// import { getUserMenus } from '@/apis';
// import { useMenus } from '@/stores/menus';
import BgLogin from "@/assets/images/bg-login.png"

const ruleFormRef = ref<FormInstance>()
const router = useRouter()
// const { addMenus } = useMenus()
const loading = ref(false)

const validateUsername = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入用户名'))
  } else {
    callback()
  }
}
const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  username: 'admin',
  password: 'admin',
})

const rules = reactive<FormRules<typeof ruleForm>>({
  username: [{ validator: validateUsername, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
      loading.value = true
      localStorage.setItem('login', JSON.stringify({
        username: ruleForm.username
      }))

      loading.value = false
      router.push('/')
      // getUserMenus(ruleForm.username).then(res => {
      //   console.log(res)
      //   addMenus(res)
      //   loading.value = false
      //   router.push('/')
      // })
    } else {
      console.log('error submit!')
      return false
    }
  })
}

</script>

<template>
  <div class="g-login-wrapper" v-loading="loading" element-loading-text="正在登录中...">
    <div class="g-login-left">
      <img :src="BgLogin" style="max-width: 600px;" />
    </div>
    <div class="g-login-right">
      <div class="g-login-content">
        <h1>vue3企业级管理后台</h1>
        <!-- <span>使用admin模拟获取超级管理员菜单，其他账户获取普通用户菜单</span> -->
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          size="large"
          label-width="auto"
          class="g-login-form"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username" placeholder="admin" type="text" autocomplete="off" />
          </el-form-item>
          <el-form-item label="秘密" prop="password">
            <el-input
              v-model="ruleForm.password"
              type="password"
              autocomplete="off"
              placeholder="admin"
            />
          </el-form-item>
          <el-form-item label="&nbsp;">
            <el-button type="primary" style="width: 100%; " @click="submitForm(ruleFormRef)"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
        <div class="g-login-foot">
          <el-button link type="primary">忘记密码？</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.g-login-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(#4082ffad, #409eff1c, #4069ffab);
}
.g-login-left {
  margin-right: 50px;
}
.g-login-content {
  width: 400px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 -5px 100px #fff;
  background-color: #fff;
  text-align: center;
}
.g-login-form {
  padding: 12px 0;
}
.g-login-foot {
  text-align: right;
  margin-top: -30px;
}
</style>