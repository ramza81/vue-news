<template>
  <div>
      <!-- <p>name : {{ itemInfo }}</p> -->
      <p>{{ fetchedItem.title }}</p>      
      <p>{{ fetchedItem.content }}</p>      
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedItem'
      ]),
    itemInfo() {
      return this.$store.state.item;
    }
  },
  created() {
    const item = this.$route.params.id;
    console.log(item);
    this.$store.dispatch('FETCH_ITEM', item);
  },
}
</script>

<style>

</style>