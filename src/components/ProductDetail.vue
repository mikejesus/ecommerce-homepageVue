<template>
  <div class="container py-4">
    <div class="row py-2">

      <div class="col-md-9">
        <div class="row">
          <div class="col-md-4">
            <div class="" style="width: 15rem;">
              <div class="card-body">
                <img :src="product.productImageLink" width="200" height="200" alt />
                
                <div style="display: flex; justify-content: space-between;">
                  <img :src="product.otherImageLink1" height="70" width="65" alt />
                  <img :src="product.otherImageLink2" height="70" width="65" alt />
                  <img :src="product.otherImageLink3" height="70" width="65" alt />
                </div>
              <hr>
              <h6 class="text-left text-bold">SHARE THIS PRODUCT</h6>
              <p class="text-left p-1">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
              </p>
              </div>

            </div>
            
          </div>

          <div class="col-md-8">
            <div class="text-left">
              <div class="card-body text-left">
               <div class="d-flex justify-content-between">
                <h5>{{product.name}}</h5>
                <p class="text-danger display-5">&#9829;</p>
               </div>
               <i class="fa fa-star text-muted" ></i>
               <i class="fa fa-star text-muted" aria-hidden="true"></i>
               <i class="fa fa-star text-muted" aria-hidden="true"></i>
               <i class="fa fa-star text-muted" aria-hidden="true"></i>
               (No reviews available)
               <hr>

                <p class="display-4"><strong>&#8358;{{product.price}}</strong></p>
                <p class="text-muted"><strong><strike>&#8358;{{product.price * 3}}</strike></strong> <span style="background-color: #ccc; color: red; padding:2px;">-60%</span></p>
                <button class="btn btn-primary btn-block"> <i class="fa fa-shopping-cart text-left mr-5" aria-hidden="true"></i>ADD TO CART</button>
                <hr>  
                <div class="d-flex justify-content-between" style="font-size:14px">
                  <p>2 more offers starting at <strong> &#8358;{{product.price}}</strong></p>
                  <a href="#">See More Offers</a>
                </div>
                <hr>

                <div>
                  <h6>PROMOTIONS</h6>
                  <p><i class="fa fa-star text-muted" ></i><a href="">Enjoy unlimited delivery with our promo codes</a></p>
                  <p><i class="fa fa-star text-muted" ></i><a href="">Refer someone and get free food order</a></p>
                </div>
                <hr>
                <h5>More Details on Product</h5>
                <p>{{product.description}}</p>
              </div>
          </div>
         </div>

          </div>


        </div>

        
      <div class="col-md-3">
        <div class="card bg-muted">
          <div class="card-body">
            <h6 class="text-left"><strong>DELIVERY AND RETURNS</strong></h6>
            <hr>
          <div>
            <p class="text-justify"><i class="fa fa-truck" aria-hidden="true"></i>
              <strong>Delivery Information</strong><br>
              We make deliveries in 24 hours. Ensure you tick the appropriate time in your checkout. Thanks
            </p> 

            <p class="text-justify"><i class="fa fa-truck"  aria-hidden="true"></i>
              <strong>Return Policy</strong><br>
              Return Immediately after delivery in the case of disastisfaction. Thanks
            </p>  
          </div>
          </div>
        </div>
        
        <div class="card bg-muted mt-3">
          <div class="card-body">
            <h6 class="text-left"><strong>PARTNER WITH US</strong></h6>
            <hr>
          <div>
            <p class="text-justify"><i class="fa fa-truck" aria-hidden="true"></i>
              <strong>Opportunity for you</strong><br>
              You know you can get commissions when you refer us to your friends?
              Shoot us email at info@orderchopbymichael.netlify.com
            </p> 
          </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <h5>People Who bought this product also buy the following:</h5>
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
    </div> -->
  </div>
</template>

<script>
export default {
  name: "prod_details",
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