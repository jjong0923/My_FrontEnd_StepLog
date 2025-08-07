<template>
  <div class="container">
    <input
      class="input-form"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue"
      @blur="hanldeBlur"
    />
    <span v-if="!modelValue && showError" class="error-message">{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: "InputFiled",
  data() {
    return {
      showError: false,
    };
  },
  props: {
    // type: String,
    // placeholder: String,
    // modelValue: String,
    // msg: String,
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "입력하세요요",
    },
    modelValue: {
      type: String,
      required: true,
    },
    msg: {
      type: String,
      default: "이 값을 필수입니다.",
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateValue(event) {
      const value = event.target.value.trim();
      this.$emit("update:modelValue", value);
    },
    hanldeBlur() {
      this.showError = true;
    },
  },
};
</script>

<style scoped>
.container {
  height: fit-content;
  width: 300px;
}

.input-form {
  box-sizing: border-box; /* 패딩과 테두리를 포함한 너비 */
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  background-color: #000000;
  margin-bottom: 10px;
  font-size: 12px;
  color: gray;
}
</style>
