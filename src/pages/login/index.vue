<template>
  <div class="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-1 lg:px-0">
    <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <Card>
        <CardHeader>
          <CardTitle>登录</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="grid gap-4">
            <div class="grid gap-2">
              <Label for="username">用户名</Label>
              <Input id="username" v-model="form.username" placeholder="请输入用户名" />
            </div>
            <div class="grid gap-2">
              <Label for="password">密码</Label>
              <Input id="password" v-model="form.password" type="password" placeholder="请输入密码" />
            </div>
          </div>
          <Button class="w-full mt-6" :loading="loading" @click="handleLogin">
            登录
          </Button>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const router = useRouter()
const loading = ref(false)
const form = reactive({
  username: '',
  password: ''
})

const handleLogin = async () => {
  loading.value = true
  try {
    // 登录逻辑
    await router.push('/')
  } finally {
    loading.value = false
  }
}
</script> 