<template>
  <div>
    <div v-for="user in users">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js';
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetchJobsList().then(res => (this.users = res.data));
  },
};
</script>

<style></style>
