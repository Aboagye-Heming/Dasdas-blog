<template>
  <div class="card-wrapper">
    <img :src="blog.image" alt="" />
    <p class="text-md">Front-end <span>1 Month Ago </span></p>
    <h4 class="text-lg">{{ blog.title }}</h4>
    <p class="text-sm">
      {{ blog.description }}
    </p>
    <div class="grid-time">
      <p class="text-md">12 Min Read</p>
      <router-link :to="`/${blog.id}/${blog.title}/details`"> <p class="text-xl">Read Full</p></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    blog: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.card-wrapper {
  width: 350px;
}
.card-wrapper .text-md {
  margin-top: 16px;
  margin-bottom: 8px;
}
.card-wrapper .text-sm {
  margin-top: 8px;
  margin-bottom: 21px;
}
.grid-time {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
