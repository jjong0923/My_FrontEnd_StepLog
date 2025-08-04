<template>
  <div>
    <InputFiled
      :type="'text'"
      :placeholder="'Email'"
      :modelValue="email"
      v-model="email"
    />
    <InputFiled
      :type="'password'"
      :placeholder="'Password'"
      :modelValue="password"
      v-model="password"
    />
    <button @click="login">로그인하기</button>
    <div>
      계정이 없으신가요?
      <span>가입하기</span>
    </div>
  </div>
</template>

<script>
import InputFiled from "@/components/InputFiled.vue";

export default {
  name: "LoginPage",
  components: {
    InputFiled,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      alert(`${this.email} ${this.password}`);
    },
  },
};
</script>

<style></style>
