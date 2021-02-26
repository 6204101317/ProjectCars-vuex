<template>
  <div class="col-lg-3">
    <b-card
      class="bg-ee"
      border-variant="dark"
      header="NameProduct"
      header-bg-variant="qq"
      header-text-variant="white"
      align="center"
      style="height: 30rem"
    >
      <b-card-img
        :src="img"
        alt="Image"
        style="height: 200px; max-width; object-fit: contain"
        class="mb-2"
      ></b-card-img>
      <b-card-text
        ><h3>Price : {{ Price }} usd</h3></b-card-text
      >
      <b-form-spinbutton
        id="sb-small"
        size="lg"
        v-model="Amount"
        class="mb-5"
      ></b-form-spinbutton>
      <div>
        <button type="button" class="btn btn-outline-info" @click="Order(Amout,id)">
          Add to cart
        </button>
      </div>
    </b-card>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    NameProduct: String,
    img: String,
    Price: Number,
    id: Number
  },
  data() {
    return {
      Amount: 1
    };
  },
  computed: {
    ...mapGetters(["Order"])
  }
};
// },
// methods: {
//   Order() {
//     alert("Please press  Submit to confirm the product you have chosen ");
//     this.$emit("Order", {
//       NameProduct: this.NameProduct,
//       Price: this.Price,
//       Amount: this.Amount,
//       Total: this.Price * this.Amount
//     });
//   }
// }
</script>
<style>
.btn-outline-info {
  color: #fa007d;
  border-color: #fa007d;
}
.btn-outline-info:hover {
  color: #fff;
  background-color: #fa007d;
  border-color: #fa007d;
}
.bg-qq {
  background-color: #fa007d !important;
}
.bg-ww {
  background-color: #181717 !important;
}
.bg-bb {
  background-color: #000000 !important;
}
.bg-ee {
  background-color: #e1fa00 !important;
}
</style>
