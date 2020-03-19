<template>
  <!-- Footer -->
  <footer class="py-4 bg-danger">
    <div class="container">
      <div class="row py-4">
        <div class="col-md-3">
          <h5 class="text-left">Help</h5>
          <ul>
            <li class="custom">
              <a href="#">Help Center</a>
            </li>
            <li class="custom">
              <a href="#">Contact Us</a>
            </li>
            <li class="custom">
              <a href="#">How to shop on Order&Chop</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5 class="text-left" >About</h5>
          <ul>
            <li class="custom">
              <a href="#">About Us</a>
            </li>
            
            <li class="custom">
              <a href="#">Careers</a>
            </li>
            
            <li class="custom">
              <a href="#">Terms and Conditions</a>
            </li>

          </ul>
        </div>
        <div class="col-md-3">
          <h5 class="text-left">Make Money</h5>
          <ul>
            <li class="custom">
              <a href="#">Make Money with us</a>
            </li>
            <li class="custom">
              <a href="#">Referrel Programme</a>
            </li>
            
            <li class="custom">
              <a href="#">Network Marketing</a>
            </li>
            
          </ul>
        </div>
        <div class="col-md-3">
          <h5 class="text-left">International Offices</h5>
          <ul>
            <li class="custom">
                Headquarters: 
              <a href="#">Abuja</a>
            </li>
          
            <li class="custom">
                Branch Office: 
              <a href="#">Kaduna</a>
            </li>
            
            <li class="custom">
                West Branch Office:
              <a href="#">Ibadan</a>
            </li>
            
          </ul>
        </div>
      </div>

      <div class="row my-3">
          <div class="col-md-4">
              <h5 class="text-left">Join us on</h5>
              <div class="text-left">
                <i class="fab fa-twitter"></i>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-linkedin"></i>
              </div>
          </div>
          <div class="col-md-8">
               <h5 class="text-left">Our Payment Methods and Partners</h5>
              <ul class="classPayment">
                  <li><a href="#"><img class="payment" src="../assets/payment/paystack.png"></a></li>
                  <li><a href="#"><img class="payment" src="../assets/payment/interswitch.jpg"></a></li>
                  <li><a href="#"><img class="payment" src="../assets/payment/visacardmastercard.png"></a></li>

              </ul>
          </div>
      </div>
      <hr />
      <p class="m-0 text-center text-white">Made with &#9829; by Michael S. Olawuni.</p>
    </div>
    <!-- /.container -->
  </footer>
</template>

<script>
export default {
  
};
</script>

<style scoped>
    ul{
        margin-left: 0;
        padding-left: 0;
    }
    .custom{
        list-style: none;
        color:white;
        text-align:left;
        line-height: 30px;


    }
    .custom a {
        color: #eee;
      
    }
    h5{
        color: white;
        font-weight: bold;
    }
    .fa-twitter, .fa-facebook, .fa-linkedin, .fa-youtube{
        color:#ccc;
        /* background-color: white; */
        font-size: 40px;
        padding-left: 10px;
        padding-right: 0;
        cursor: pointer;
    }

    .fa-twitter:hover, .fa-facebook:hover, .fa-linkedin:hover, .fa-youtube:hover{
        color: blue;
        
    }

    .classPayment{
        margin: 0;
        padding: 0;
        display: flex;
        /* justify-content: center; */
    }
    .classPayment li {
        list-style: none;
        text-align: left;
        
    }
    .classPayment li a {
        text-align: left;
    }
    .payment{
        width: 80px;
        height: 40px;
        margin-left: 10px;
        text-align: left;

    }
    hr {
        background-color: white;
    }
</style>