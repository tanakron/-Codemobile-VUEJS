<template>
  <div id="nav">
    <!-- สร้าง components แยกเป็น ส่วน -->
    <Header />
    <!-- สร้างส่วน Concent  -->
    <Content />
    <Footer @onClock="onClock" title=" Copyright 2020" />

    <!-- สร้าง event ย้อนกลับ -->
  </div>
  <div>{{ time }}</div>
</template>
<script>
import Header from "@/components/Layout/Header.vue";
import Footer from "@/components/Layout/Footer.vue";

import moment from "moment";
import Content from "@/components/Layout/Content.vue";
export default {
  methods: {
    // จัดรูปแบบ เวลา
    onClock(value) {
      this.time = moment(value).format("MM/DD/YYYY hh:mm:ss");
    },
  },
  data() {
    return {
      time: "",
    };
  },
  components: {
    Header,
    Footer,
    Content,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
