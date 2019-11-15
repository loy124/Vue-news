<template>
  <div>
    <div v-for="item in this.$store.state.news">{{ item.title }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
    // var vm = this;
    // fetchNewsList()
    //   .then(function(res) {
    //     console.log(res);
    //     vm.users = res.data; //this의 바인딩 문제 발생
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    // axios
    //   .get('https://api.hnpwa.com/v0/news/1.json')
    //   .then(res => (this.users = res.data))
    //   .catch(e => console.log(e));
  },
};
</script>

<style></style>
