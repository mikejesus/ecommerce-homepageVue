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
    productList: [
        {
          id: 1,
          name: "Jollof Rice",
          price: 500.0,
          categoryId: 2,
          productImageLink: require("@/assets/images/rice1.jpeg"),
          otherImageLink1: require("@/assets/images/rice1.jpeg"),
          otherImageLink2: require("@/assets/images/rice1.jpeg"),
          otherImageLink3: require("@/assets/images/rice1.jpeg"),
          description: "This is african jollof rice with a difference. You can get it by just a button click"
        },
        {
          id: 2,
          name: "India Rice",
          price: 1000.0,
          categoryId: 2,
          productImageLink: require("@/assets/images/rice2.jpeg"),
          otherImageLink1: require("@/assets/images/rice1.jpeg"),
          otherImageLink2: require("@/assets/images/rice1.jpeg"),
          otherImageLink3: require("@/assets/images/rice1.jpeg"),
          description: "Have a taste of intercontinental dish here in Nigeria. "
        },
        {
          id: 3,
          name: "Peridian Rice",
          price: 1500.0,
          categoryId: 2,
          productImageLink: require("@/assets/images/rice3.jpg"),
          otherImageLink1: require("@/assets/images/rice1.jpeg"),
          otherImageLink2: require("@/assets/images/rice1.jpeg"),
          otherImageLink3: require("@/assets/images/rice1.jpeg"),
          description: "This is african jollof rice with a difference. You can get it by just a button click"
        },

        {
          id: 4,
          name: "Suya with Sticks",
          price: 500.0,
          categoryId: 1,
          productImageLink: require("@/assets/images/suya.jpeg"),
          otherImageLink1: require("@/assets/images/rice1.jpeg"),
          otherImageLink2: require("@/assets/images/rice1.jpeg"),
          otherImageLink3: require("@/assets/images/rice1.jpeg"),
          description: "This is african jollof rice with a difference. You can get it by just a button click"
        },
        {
          id: 5,
          name: "Suya with Onions",
          price: 500.0,
          categoryId: 1,
          productImageLink: require("@/assets/images/suya-2.jpg"),
          otherImageLink1: require("@/assets/images/rice1.jpeg"),
          otherImageLink2: require("@/assets/images/rice1.jpeg"),
          otherImageLink3: require("@/assets/images/rice1.jpeg"),
          description: "This is african jollof rice with a difference. You can get it by just a button click"
        },
        {
        id: 6,
          name: "Suya with Cabbage",
          price: 800.0,
          categoryId: 1,
          productImageLink: require("@/assets/images/suyanew.jpeg"),
          otherImageLink1: require("@/assets/images/rice1.jpeg"),
          otherImageLink2: require("@/assets/images/rice1.jpeg"),
          otherImageLink3: require("@/assets/images/rice1.jpeg"),
          description: "This is african jollof rice with a difference. You can get it by just a button click"

        },
        {
            id: 7,
          name: "Suya Variety",
          price: 800.0,
          categoryId: 1,
          productImageLink: require("@/assets/images/SuyavarietiesTX.jpeg")
        },
        {
            id: 8,
          name: "Beans Porridge",
          price: 500.0,
          categoryId: 3,
          productImageLink: require("@/assets/images/beans1.jpg"),
          otherImageLink1: require("@/assets/images/rice1.jpeg"),
          otherImageLink2: require("@/assets/images/rice1.jpeg"),
          otherImageLink3: require("@/assets/images/rice1.jpeg"),
          description: "This is african jollof rice with a difference. You can get it by just a button click"
        },
        {
            id: 9,
          name: "Beans and Yam",
          price: 1000.0,
          categoryId: 3,
          productImageLink: require("@/assets/images/beans2.jpeg"),
          otherImageLink1: require("@/assets/images/rice1.jpeg"),
          otherImageLink2: require("@/assets/images/rice1.jpeg"),
          otherImageLink3: require("@/assets/images/rice1.jpeg"),
          description: "This is african jollof rice with a difference. You can get it by just a button click"
        },
        {
            id: 10,
          name: "Beans and Yam",
          price: 1000.0,
          categoryId: 3,
          productImageLink: require("@/assets/images/beans3.jpg"),
          otherImageLink1: require("@/assets/images/rice1.jpeg"),
          otherImageLink2: require("@/assets/images/rice1.jpeg"),
          otherImageLink3: require("@/assets/images/rice1.jpeg"),
          description: "This is african jollof rice with a difference. You can get it by just a button click"
        },
        {
            id: 11,
          name: "Sprite Drink",
          price: 200.0,
          categoryId: 4,
          productImageLink: require("@/assets/images/sprite.png"),
          otherImageLink1: require("@/assets/images/rice1.jpeg"),
          otherImageLink2: require("@/assets/images/rice1.jpeg"),
          otherImageLink3: require("@/assets/images/rice1.jpeg"),
          description: "This is african jollof rice with a difference. You can get it by just a button click"
        },
        {
            id: 12,
          name: "Drinks",
          price: 500.0,
          categoryId: 4,
          productImageLink: require("@/assets/images/softdrinks.jpg")
        }
      ],
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