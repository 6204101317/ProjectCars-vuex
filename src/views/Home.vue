<template>
  <div class="home">
    <b-container>
      <b-row align-v="center">
        <div class="row">
          <product
            v-for="(car, index) in SearchMenu"
            :key="index"
            :NameProduct="car.NameProduct"
            :img="car.img"
            :Price="car.Price"
           
          /></div></b-row
    ></b-container>
    <!-- <User></User> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Product from "@/components/Product.vue";
export default {
  name: "home",
  components: { Product },
  computed: {
    ...mapGetters(["SearchMenu"])
  },
  props: {
    Menuitem: Array
  },
  // methods: {
  //   menuorder(value) {
  //     this.select.push(value);
  //     this.$emit("Order", this.select);
  //   }
  // }
};
</script>
<style></style>
