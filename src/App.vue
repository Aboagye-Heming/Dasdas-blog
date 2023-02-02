<template>
  <div>
    <AppHeader />
    <div class="">
      <h1>this is my first vue page</h1>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style>
@import url("./assets/css/style.css");
@import url("./assets/css/hero.css");
</style>
