<template>
  <div class="kuangjia">
    <div class="gujia">
      <div class="huanying">WelcomeLogin</div>
      <el-form :inline="false" :model="formInline" class="demo-form-inline">
        <el-form-item label="用户名">
          <el-input v-model="formInline.username" placeholder="用户名" />
        </el-form-item>
        <el-form-item label="密码" label-width="55px">
          <el-input v-model="formInline.password" placeholder="密码" />
        </el-form-item>
        <el-form-item label-width="230px">
          <el-button type="primary" @click="onSubmit">Query</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { login } from "../api/user";
const formInline = reactive<any>({
  username: "13651421125",
  password: "421125",
});

const onSubmit = () => {
  console.log(formInline);
  const { username, password } = formInline;
  login({ username, password }).then((res) => {
    console.log(res);
  });
};
</script>

<style scoped>
.kuangjia {
  height: 100%;
  background-image: linear-gradient(to right, #fed0fc, #63d1ec);
  overflow: auto;
}
.gujia {
  width: 800px;
  height: 574px;
  border-radius: 20px;
}
.huanying {
  height: 200px;
  width: 800px;
  font-size: 60px;
  text-align: center;
  line-height: 200px;
}
.kaishi {
  height: 80px;
  width: 800px;
  font-size: 36px;
  padding-top: 20px;
}
.denglu {
  height: 50px;
  width: 700px;
  border-radius: 20px;
  margin: 0 auto;
}
.zouni {
  height: 80px;
  width: 200px;
  text-align: center;
  margin-top: 10px;
}
.demo-form-inline {
  width: 500px;
  margin: 0 auto;
}
</style>
