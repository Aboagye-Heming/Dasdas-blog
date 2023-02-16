<template>
  <div>
    <AppHero />
    <section class="blog-container">
      <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </section>
    <AppFooter />
  </div>
</template>
<script>
import AppHero from "@/components/AppHero.vue";
import AppFooter from "@/components/AppFooter.vue";
import BlogCard from "@/components/BlogCard.vue";

export default {
  name: "HomePage",

  components: {
    AppHero,
    AppFooter,
    BlogCard,
  },
  data() {
    return {
      blogs: [],
    };
  },
  methods: {
    getData: (data) => {
      // console.log(data)
      this.blogs = data;
    },

    getBlogs() {
      fetch("https://techcrunch.com/wp-json/wp/v2/posts", {
        method: "GET",
        headers: {},
      })
        .then((response) => {
          response.json().then((data) => {
            // console.log(data)
            this.blogs = data;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getBlogs();
    // console.log(this.$route)
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
