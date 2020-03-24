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
            
            <!-- <ProductList /> -->
            
          <!-- </div>
        </div> -->
      <!-- Product Component End -->
       <div class="col-md-9 my-3">
          <h4>Our Products</h4>
          <div class="row">

          <div class="col-lg-4 col-md-6 mb-4" v-for="product in allProducts" :key="product.id">
              
            <div class="card h-90 my-4" >
            <img class="card-img-top" :src="product.productImageLink" :alt="product.name" height="200" >
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#"  @click="fetchProductDetail(product)">{{product.name}}</a>
                </h4>
                <h5>&#8358;{{product.price}}</h5>
                <!-- <p class="card-text">Lorem ipsum dolor si amet, consectetur adipisicing elit. Amet numquam aspernatur!</p> -->
              <button class="btn btn-block py-2 btn-primary" @click="fetchProductDetail(product)">Buy Now</button>
              </div>
              <!-- <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div> -->
              
            </div>
          </div>

          </div>
     </div>
        <!-- /.row -->


      <!-- /.col-lg-9 -->

      </div>
    </div>
  
  
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Category from "@/components/Category.vue";
// import ProductList from "@/components/ProductList.vue";

import { Carousel, Slide } from "vue-carousel";


export default {
  name: "App",
  computed: {
    allProducts(){
      return this.$store.state.productList
    }
  },
   methods: {
    fetchProductDetail(product) {
      this.$store.commit("setSelectedProductValue", product);
      this.$router.push({ path: "/product-details" });
    }
  },
  components: {
    // HelloWorld
    Category,
    // ProductList,
    Carousel,
    Slide,
    
  },

  data() {
    return {
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
<style scoped>
.card:hover {
  box-shadow: 8px 12px 31px -10px #ab98ab;
}

.card:hover .card-img-wrapper img {
  transform: scale(1.05);
}
.card-body .card-title {
  margin-bottom: calc(10% + 5px);
  transition: 1.5s ease;
}
.card:hover .card-body .card-title {
  margin-bottom: .5rem;
}
.card-height{
  height: auto;
}
</style>