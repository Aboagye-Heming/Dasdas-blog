<template>
  <div>
    <section>
      <p>By Ryan Jackson <span>2 Month Ago </span></p>
      <h1>{{ currentBlog.title.rendered }}</h1>

      <div v-html="currentBlog.content.rendered"></div>
      <h3>More Articles</h3>
    </section>
    <div class="blog-container">
      <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </div>
  </div>
</template>

<script>
import BlogCard from "@/components/BlogCard.vue";

export default {
  name: "DetailsPage",

  components: {
    BlogCard,
  },

  data() {
    return {
      currentBlog: {},
      blogs: [],
    };
  },
  methods: {
    getBlog() {
      fetch(
        `https://techcrunch.com/wp-json/wp/v2/posts/${this.$route.params.id}`
      ).then((response) => {
        response.json().then((data) => {
          this.currentBlog = data;
        });
      });
    },
  },

  mounted() {
    this.getBlog();
    console.log(this.$route);
  },
};
</script>

<style scoped>
.blog-container {
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  align-items: center;
  justify-content: space-between;
  margin-top: 52px;
  padding: 10px 10px;
}
</style>
