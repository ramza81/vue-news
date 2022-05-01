<template>
  <div id="app"> 
    <ToolBar></ToolBar>
    <!-- url이 만약 news -->
    <!-- <NewsView></NewsView> -->
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: {
    ToolBar,
  },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

</style>
