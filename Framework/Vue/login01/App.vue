<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  background-color: black;
  color: white;
}

.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.error-message {
  color: red;
  font-size: small;
  width: 100%;
  text-align: left;
}
</style>
