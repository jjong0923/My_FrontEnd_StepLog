<template>
  <div>
    <div class="logo-container">
      <img src="../assets/x-logo.png" class="logo" />
    </div>
    <div class="title">계정을 생성하세요.</div>
    <InputFiled
      :type="'text'"
      :placeholder="'이메일'"
      v-model="email"
      :msg="'이메일을 입력하세요.'"
    />
    <InputFiled
      :type="'text'"
      :placeholder="'이름'"
      v-model="name"
      :msg="'이름을 입력하세요.'"
    />
    <InputFiled
      :type="'password'"
      :placeholder="'비밀번호'"
      v-model="password"
      :msg="'비밀번호를 입력하세요.'"
    />
    <InputFiled
      :type="'password'"
      :placeholder="'비밀번호 확인'"
      v-model="passwordConfirm"
      :msg="'비밀번호가 일치하지 않습니다.'"
    />
    <button class="signup-button" @click="signup">회원가입</button>
  </div>
</template>

<script>
import InputFiled from "../components/InputFiled.vue";

export default {
  name: "SignUpPage",
  components: {
    InputFiled,
  },
  data() {
    return {
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
    };
  },
  computed: {
    isPasswordCorrect() {
      return this.password === this.passwordConfirm;
    },
  },
};
</script>

<style scoped>
.logo-conatiner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  max-width: 60px;
  height: auto;
}

.title {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: large;
  padding: 1%;
}

.signup-button {
  border-radius: 20px;
  border: 1px solid white;
  font-size: 15px;
  font-weight: bold;
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  cursor: pointer;
}
</style>
