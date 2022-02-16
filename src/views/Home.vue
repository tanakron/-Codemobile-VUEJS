<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div><h2 v-if="isLogged">test</h2></div>
    <div>{{ account.username }}</div>
    <!-- <div>{{ courses }}</div> -->
    <li v-for="(item, index) in lists" :key="index">
      <img :src="thumbnailUrl + item.id" alt="" />
      <!-- {{ index + 1 }}.{{ thumbnailUrl }} -->
      <br />
      {{ item.id }}
    </li>
  </div>
</template>

<script>
// @ is an alias to /src
const axios = require("axios");
export default {
  watch: {},
  name: "Home",
  created() {
    // Simple GET request using axios
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      this.lists = res.data;
    });
  },

  data() {
    return {
      thumbnailUrl: "https://via.placeholder.com/",
      lists: {},
      isLogged: "1",
      account: {
        username: "admin",
        password: "1234",
      },
    };
  },
};
</script>
<style scope>
.li {
  color: rgb(179, 0, 0);
}
</style>
