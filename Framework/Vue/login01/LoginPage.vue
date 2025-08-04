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
    <button @click="login" class="login-button">로그인하기</button>
    <div>
      계정이 없으신가요?
      <span class="signup-button">가입하기</span>
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

<style scoped>
.login-button {
  border-radius: 20px;
  border: 1px solid white;
  font-size: 15px;
  font-weight: bold;
  margin: 10px 0px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
}

.signup-button {
  color: aqua;
  cursor: pointer;
}
</style>
