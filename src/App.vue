<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header />
    <div class="container mt-5 py-3">
      <!-- Carousel Slider -->
      <div class="row">
        <carousel :per-page="1" :mouse-drag="false" :autoplay="true" :loop="true" :navigationEnabled="true" :ease="ease" :speed="30">
          <slide v-for="image in sliders" :key="image.id">
             <img style="margin-top: ; width: 100%; height: 450px" :src="image.imgName" alt="">
          </slide>
        </carousel>
        </div>
      <!-- Carousel Slider End -->

      <div class="row">
        <!-- Categories Component Section -->
        <div class="col-md-3">
          <h4 class="my-4 text-left">Categories</h4>
          <Category v-for="cat in categories" :categories="cat" :key="cat.id" />
        </div>
        <!-- Categories Component End -->

      <!-- Product Component Section -->
        <div class="col-md-9 my-3">
          <h4>Our Products</h4>
          <div class="row">
            <ProductList v-for="product in productList" :products="product" :key="product.id" />
          </div>
        </div>
      <!-- Product Component End -->
      </div>
    </div>
    <!-- Footer -->
    <footer class="py-4 bg-danger">
      <div class="container">
        <p class="m-0 text-center text-white">Made with &#9829; by Michael S. Olawuni.</p>
      </div>
      <!-- /.container -->
    </footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/Header.vue";
import Category from "./components/Category.vue";
import ProductList from "./components/ProductList.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Header,
    Category,
    ProductList,
    Carousel,
    Slide
  },
  data() {
    return {
      productList: [
        {
          name: "Jollof Rice",
          price: 500.0,
          categoryId: 2,
          productImageLink: require("@/assets/images/rice1.jpeg")
        },
        {
          name: "India Rice",
          price: 1000.0,
          categoryId: 2,

          productImageLink: require("@/assets/images/rice2.jpeg")
        },
        {
          name: "Peridian Rice",
          price: 1500.0,
          categoryId: 2,
          productImageLink: require("@/assets/images/rice3.jpg")
        },

        {
          name: "Suya with Sticks",
          price: 500.0,
          categoryId: 1,
          productImageLink: require("@/assets/images/suya.jpeg")
        },
        {
          name: "Suya with Onions",
          price: 500.0,
          categoryId: 1,
          productImageLink: require("@/assets/images/suya-2.jpg")
        },
        {
          name: "Suya with Cabbage",
          price: 800.0,
          categoryId: 1,
          productImageLink: require("@/assets/images/suyanew.jpeg")
        },
        {
          name: "Suya Variety",
          price: 800.0,
          categoryId: 1,
          productImageLink: require("@/assets/images/SuyavarietiesTX.jpeg")
        },
        {
          name: "Beans Porridge",
          price: 500.0,
          categoryId: 3,
          productImageLink: require("@/assets/images/beans1.jpg")
        },
        {
          name: "Beans and Yam",
          price: 1000.0,
          categoryId: 3,
          productImageLink: require("@/assets/images/beans2.jpeg")
        },
        {
          name: "Beans and Yam",
          price: 1000.0,
          categoryId: 3,
          productImageLink: require("@/assets/images/beans3.jpg")
        },
        {
          name: "Sprite Drink",
          price: 200.0,
          categoryId: 4,
          productImageLink: require("@/assets/images/sprite.png")
        },
        {
          name: "Drinks",
          price: 500.0,
          categoryId: 4,
          productImageLink: require("@/assets/images/softdrinks.jpg")
        }
      ],
      categories: [
        {
          id: 1,
          categoryName: "Rice"
        },
        {
          id: 2,
          categoryName: "Suya"
        },
        {
          id: 3,
          categoryName: "Beans"
        },
        {
          id: 4,
          categoryName: "Soft Drinks"
        }
      ],
      sliders:[
        {
          id: 1,
          imgName: require("@/assets/sliders/sliderImage1.jpg")
        },
        {
          id: 2,
          imgName: require("@/assets/sliders/sliderImage2.jpg")
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
