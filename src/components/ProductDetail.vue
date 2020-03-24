<template>
  <div class="container py-4">
    <!-- <Header /> -->
    <div class="row py-2">
      <div class="col-md-3">
        <div class="card" style="width: 15rem;">
          <div class="card-body">
            <!-- <h5 class="card-title">Card title</h5> -->
            <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
            <img :src="product.productImageLink" width="200" height="200" alt />

            <div style="display: flex; justify-content: space-between;">
              <img :src="product.otherImageLink1" height="70" width="65" alt />
              <img :src="product.otherImageLink2" height="70" width="65" alt />
              <img :src="product.otherImageLink3" height="70" width="65" alt />
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card">
          <div class="card-body text-left">
            <h5 class="card-text">Product: {{product.name}}</h5>
            <h5 class="card-text">Price: &#8358;{{product.price}}</h5>

            <h5>Product Description</h5>
            <p>{{product.description}}</p>
            <button class="btn btn-primary btn-block">Add to Cart</button>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Our Services</h5>
            <p>Quick Delivery</p>
            <p>Quick preparation</p>
          </div>
        </div>
      </div>
    </div>
    <hr />

    <h5>People Who bought this product also buy the following:</h5>
    <div class="card mb-3" style="max-width: 500px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="product.productImageLink" class="card-img" alt="" height="150" />
        </div>
        <div class="col-md-8">
          <div class="card-body" style="line-height: 80px;">
            <h5 class="card-title">Product: Chicken Soup</h5>
            <p class="card-text">Price: &#8358; 2,000</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "prod_details",
  // props: ["details"],
  component: { Header },
  computed: {
    product() {
      return this.$store.state.selectedProduct;
    }
  }
};
</script>

<style scoped>
img {
  margin-bottom: 10px;
}
</style>