<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router';
const ruleFormRef = ref<FormInstance>()
const router = useRouter()

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
  username: '',
  password: '',
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
      localStorage.setItem('login', JSON.stringify({
        username: ruleForm.username
      }))
      router.push('/')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

</script>

<template>
  <div class="g-login-wrapper">
    <h1>vue3企业级管理后台</h1>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="auto"
      class="login-Form"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="秘密" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped>
.g-login-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login-Form {
  width: 400px;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0 -5px 100px #bbb;
  background-color: #fff;
}
</style>