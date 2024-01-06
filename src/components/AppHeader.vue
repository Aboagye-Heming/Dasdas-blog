<template>
  <header>
    <router-link to="/">
      <img src="../assets/images/logo.png" alt="dasdas-logo"
    /></router-link>
    <div class="header-icons">
      <img src="../assets/icons/twitter.png" alt="twitter" />
      <img src="../assets/icons/dribble.png" alt="dribble" />
      <img src="../assets/icons/figma.png" alt="figma" />
      <router-link to="/aboagye">
        <img src="../assets/icons/github.png" alt="github" />
      </router-link>
    </div>
  </header>
</template>
<script>
export default {
  name: "AppHeader",
};
</script>
<style scoped>
@import url("../assets/css/header.css");
</style>
