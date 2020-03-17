<template>

     
        <div class="list-group leftAlign">
          <a href="#" class="list-group-item">{{categories.categoryName}}</a>
          <!-- <a href="#" class="list-group-item">Category 2</a>
          <a href="#" class="list-group-item">Category 3</a> -->
        </div>

      <!-- /.col-lg-3 -->

</template>
<script>
export default {
    props: ["categories"]
}
</script>

<style scoped>
.leftAlign{
  text-align: left;
  margin-bottom: 5px;
}
.list-group-item:hover{
  background-color: lightblue;
}

</style>