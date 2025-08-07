<template>
  <div>
    <div class="logo-container">
      <img src="../assets/x-logo.png" class="logo" />
    </div>
    <InputFiled
      :type="'text'"
      :placeholder="'Email'"
      :modelValue="email"
      v-model="email"
      :msg="'이메일을 입력해주세요.'"
    />
    <InputFiled
      :type="'password'"
      :placeholder="'Password'"
      :modelValue="password"
      v-model="password"
      :msg="'비밀번호를 입력해주세요.'"
    />
    <button @click="login" class="login-button">로그인하기</button>
    <div>
      계정이 없으신가요?
      <RouterLink to="/signup" class="signup-button">Sign up</RouterLink>
    </div>
  </div>
</template>

<script>
import InputFiled from "../components/InputFiled.vue";

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
      this.$router.push("/main"); // 페이지 이동
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

.logo-conatiner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  max-width: 60px;
  height: auto;
}
</style>
