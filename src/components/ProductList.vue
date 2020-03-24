<template>
     <div class="col-md-9 my-3">
          <h4>Our Products</h4>
          <div class="row">

          <div class="col-lg-4 col-md-6 mb-4" v-for="product in productList" :key="product.id">
              
            <div class="card h-90 my-4" >
            <img class="card-img-top" :src="product.productImageLink" :alt="product.name" height="200" >
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#"  @click="fetchProductDetail(product.id)">{{product.name}}</a>
                </h4>
                <h5>&#8358;{{product.price}}</h5>
                <!-- <p class="card-text">Lorem ipsum dolor si amet, consectetur adipisicing elit. Amet numquam aspernatur!</p> -->
              <button class="btn btn-block py-2 btn-primary" @click="fetchProductDetail(product.id)">Buy Now</button>
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
</template>

<script>
export default {
props: ['products'],
data(){
  return{
    
  }
},
  methods: {
    fetchProductDetail(prod_id){
      // console.log(prod_id);
      let productDetails = this.productList.filter((item) => {
                return item.id === prod_id
            });
          
            let itemParams = {
                name: 'Details',
                params: {

                    details: productDetails[0],
                    id: prod_id
                }
            };
            this.$router.push(itemParams)
    }
  },
    
}
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