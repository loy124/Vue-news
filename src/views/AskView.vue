<template>
  <div>
    <div v-for="user in users">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetchAskList()
      .then(res => (this.users = res.data))
      .catch(e => console.log(e));
  },
};
</script>

<style></style>
