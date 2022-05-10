<template>
  <div>
      <p>name : {{ userInfo.id }}</p>
      <p>karma : {{ userInfo.karma }}</p>
      <p>created : {{ userInfo.created }}</p>
      <p>name : {{ fetchedUser.id }}</p>
      <p>karma : {{ fetchedUser.karma }}</p>
      <p>created : {{ fetchedUser.created }}</p>      
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedUser'
      ]),
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  },
}
</script>

<style>

</style>