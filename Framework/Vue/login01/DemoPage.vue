<template>
  <div>
    <div>
      {{ price }}
    </div>
    <div>
      {{ disCountRate }}
    </div>
    <div>
      {{ finalPrice }}
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoPage",
  data() {
    return {
      price: 10000,
      disCountRate: 0.1,
    };
  },
  computed: {
    finalPrice() {
      return this.price * (1 - this.disCountRate);
    },
  },
};
</script>

<style></style>
