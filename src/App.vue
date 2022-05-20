<template>
  <div id="app"> 
    <ToolBar></ToolBar>
    <!-- url이 만약 news -->
    <!-- <NewsView></NewsView> -->
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinnerBar :loading="loadingStatus"></spinnerBar>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import SpinnerBar from './components/SpinnerBar.vue';
import bus from './utils/bus.js';

export default {
  components: {
    ToolBar,
    SpinnerBar,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);    
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
/* Router Transition */
.page-enter-active, page-leave-active {
  transition: opacity 5s;
}
.page-enter, page-leave-to {
  opacity: 0;
}
</style>
