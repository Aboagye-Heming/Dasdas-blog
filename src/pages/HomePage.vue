<template>
  <div>
    <AppHero />
    <section class=" blog-container">
      <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </section>
    <AppFooter />
  </div>
</template>
<script>
import AppHero from "@/components/AppHero.vue";
import AppFooter from "@/components/AppFooter.vue";
import BlogCard from "@/components/BlogCard.vue";


import blog1 from "@/assets/images/blog-1.png";
import blog2 from "@/assets/images/blog-2.png";
import blog3 from "@/assets/images/blog-3.png";
export default {
  name: "HomePage",

  components: {
    AppHero,
    AppFooter,
    BlogCard,
  },
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: "CSS Grid",
          image: blog1,
          description:
            "The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.",
        },
        {
          id: 2,
          title: "CSS color",
          image: blog2,
          description:
            "Colors play a vital role in making a web page usable or not. In CSS, we can control the foreground and background color of an element with the color and background properties.",
        },
        {
          id: 3,
          title: "CSS variables",
          image: blog3,
          description:
            "CSS variables are custom properties that cascade normally and even inherit. They start with a reserved -- prefix, and there are no real rules about their value.",
        },
      ],
    };
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
