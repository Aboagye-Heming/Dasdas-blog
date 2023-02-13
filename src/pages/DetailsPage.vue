<template>
  <div>
    <section>
      <p>By Ryan Jackson <span>2 Month Ago </span></p>
      <h1>{{ currentBlog.title }}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nunc non blandit
        massa enim. Pulvinar sapien et ligula ullamcorper malesuada proin libero
        nunc consequat. Aliquam sem fringilla ut morbi tincidunt augue interdum
        velit. Tellus elementum sagittis vitae et leo duis ut diam. Eget nullam
        non nisi est sit amet. Dignissim suspendisse in est ante in nibh mauris.
        Nec feugiat in fermentum posuere urna. Diam in arcu cursus euismod quis
        viverra. Facilisis mauris sit amet massa vitae tortor condimentum
        lacinia. Diam quam nulla porttitor massa id neque aliquam vestibulum
        morbi. Sed egestas egestas fringilla phasellus faucibus scelerisque
        eleifend. Sed elementum tempus egestas sed sed risus pretium quam
        vulputate. Lacus sed turpis tincidunt id aliquet risus feugiat in ante.
        Viverra nibh cras pulvinar mattis nunc sed blandit libero. Morbi
        tincidunt augue interdum velit euismod in. Accumsan lacus vel facilisis
        volutpat est velit egestas dui. Erat pellentesque adipiscing commodo
        elit at imperdiet. Quis risus sed vulputate odio ut. Nulla aliquet enim
        tortor at auctor urna.
      </p>

      <img src="/assets/cardMedia/mini.png" alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nunc non blandit
        massa enim. Pulvinar sapien et ligula ullamcorper malesuada proin libero
        nunc consequat. Aliquam sem fringilla ut morbi tincidunt augue interdum
        velit. Tellus elementum sagittis vitae et leo duis ut diam. Eget nullam
        non nisi est sit amet. Dignissim suspendisse in est ante in nibh mauris.
        Nec feugiat in fermentum posuere urna. Diam in arcu cursus euismod quis
        viverra. Facilisis mauris sit amet massa vitae tortor condimentum
        lacinia. Diam quam nulla porttitor massa id neque aliquam vestibulum
        morbi. Sed egestas egestas fringilla phasellus faucibus scelerisque
        eleifend. Sed elementum tempus egestas sed sed risus pretium quam
        vulputate. Lacus sed turpis tincidunt id aliquet risus feugiat in ante.
        Viverra nibh cras pulvinar mattis nunc sed blandit libero. Morbi
        tincidunt augue interdum velit euismod in. Accumsan lacus vel facilisis
        volutpat est velit egestas dui. Erat pellentesque adipiscing commodo
        elit at imperdiet. Quis risus sed vulputate odio ut. Nulla aliquet enim
        tortor at auctor urna. Proin fermentum leo vel orci porta non pulvinar
        neque. In egestas erat imperdiet sed euismod nisi porta lorem. Metus
        vulputate eu scelerisque felis imperdiet proin fermentum. Luctus
        venenatis lectus magna fringilla. Nunc scelerisque viverra mauris in
        aliquam. Et molestie ac feugiat sed lectus vestibulum mattis. Sem et
        tortor consequat id porta nibh venenatis cras sed. Sed felis eget velit
        aliquet sagittis id. Auctor neque vitae tempus quam pellentesque nec nam
        aliquam sem. Tincidunt ornare massa eget egestas purus viverra accumsan
        in. Aliquet lectus proin nibh nisl condime.
      </p>
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
    getBlog(){
     fetch("https://techcrunch.com/wp-json/wp/v2/posts").then((response) => {
        response.json().then((data) => {
            this.blog = data;
        })
     })
    }
  },

  mounted() {},
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
