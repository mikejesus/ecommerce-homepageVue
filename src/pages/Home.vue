<template>
  <div>    
    <div class="container mt-5 py-3">
      <!-- Carousel Slider -->
      <div class="row">
        <div class="col-md-12 col-lg-12 col-sm-12">
        <carousel :per-page="1" :mouse-drag="false" :autoplay="true" :loop="true" :navigationEnabled="true">
          <slide v-for="image in sliders" :key="image.id">
             <img style="margin-top: ; width: 100%; height: 450px" :src="image.imgName" alt="">
          </slide>
        </carousel>
        </div>
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
        <!-- <div class="col-md-9 my-3">
          <h4>Our Products</h4>
          <div class="row"> -->
            
            <ProductList />
            
          <!-- </div>
        </div> -->
      <!-- Product Component End -->
      </div>
    </div>
  
  
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Category from "@/components/Category.vue";
import ProductList from "@/components/ProductList.vue";

import { Carousel, Slide } from "vue-carousel";


export default {
  name: "App",
  components: {
    // HelloWorld
    Category,
    ProductList,
    Carousel,
    Slide,
    
  },
  data() {
    return {
      footerItems:[
        {
          help:[
          {
            name: "Test 1"
          },
          {
            name: "Test 2"
          },
          ],
          about: [
            {
              name: "about 1"
            },
            {
              name: "about 2"
            },
          ]
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
  },
  
};
</script>
<style>

</style>