<template>
  <div class="card-wrapper">
    <router-link :to="`/${blog.id}/details`">
      <img :src="blog.jetpack_featured_media_url" alt="" />
      <h4 class="text-lg">{{ blog.title.rendered }}</h4>
      <p class="text-sm">
        {{ blog.description }}
      </p>
    </router-link
    >
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

a{
  cursor: pointer;
}
.card-wrapper {
  width: 350px;
}
.card-wrapper img {
  width: 330px;
  height: 200px;
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
