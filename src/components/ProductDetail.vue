<template>
  <div class="container py-4">
  <Header />
    <div class="row">
      <div class="col-md-4">
           
              <img :src="details.productImageLink" width="200" height="200" alt="">
              <img :src="details.productImageLink" width="200" height="200" alt="">
              <img :src="details.productImageLink" width="200" height="200" alt="">
           
      </div>
      <div class="col-md-8">
            <img :src="details.productImageLink" height="400" width="500">

            <h4>{{details.name}}</h4>
             <button class="btn btn-primary">Add to Cart</button>

            <br><br><br>
            <h4>Product Description:</h4>
            <p>{{details.description}}</p>
           
      </div>

    </div>
    
  
      
    

  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: "prod_details",
  props: ["details"],
  component: { Header }
}
</script>

<style scoped>
 img {
   margin-bottom: 10px;
 }
</style>