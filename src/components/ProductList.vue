<template>
     

          <div class="col-lg-4 col-md-6 mb-4">
              
            <div class="card h-90 my-4" >
            <img class="card-img-top" :src="products.productImageLink" :alt="products.name" height="200" >
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">{{products.name}}</a>
                </h4>
                <h5>&#8358;{{products.price}}</h5>
                <!-- <p class="card-text">Lorem ipsum dolor si amet, consectetur adipisicing elit. Amet numquam aspernatur!</p> -->
              <button class="btn btn-block py-2 btn-primary">Buy Now</button>
              </div>
              <!-- <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div> -->
              
            </div>
          </div>

     
        <!-- /.row -->


      <!-- /.col-lg-9 -->
</template>

<script>
export default {
props: ['products'],
    
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