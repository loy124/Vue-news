<template>
  <div>
    <div v-for="item in fetchedAsk">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedAsk"])
    // ...mapGetters({
    //   fetchedAsk: "fetchedAsk"
    // })
    // #2
    // ...mapState({
    //   ask: state => state.ask
    // })
    // #3
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  }
};
</script>

<style></style>
