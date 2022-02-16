<template>
  <div id="footer" class="footer">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "Footer",
  //   ส่งค่าย้อนกลับ
  mounted() {
    setInterval(() => {
      this.$emit("onClock", Date());
    }, 100);
  },
  props: ["title"],
};
</script>

<style></style>
