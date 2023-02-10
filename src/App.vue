<template>
  <div>
    <AppHeader />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "App",

  components: { AppHeader },
};
</script>

<style>
@import url("@/assets/css/style.css");
</style>
