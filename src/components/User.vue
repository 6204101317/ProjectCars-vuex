<template>
  <div>
    <div class="card bg-1 mb-3" style="max-width: 120rem">
      <div class="card-body">
        <div class="row justify-content-end">
          <h1 class="col-lg-4">Total : {{ Total }} usd</h1>
          <button type="button " class="btn btn-yyy mr-4" @click="sum()">
            <h1>BUY</h1>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["Total"])
  },
  // props: {
  //   Total: Number,
  //   Data: Array
  // },
  methods: {
    sum() {
      alert(" Total : " + this.Total + " $usd");
    }
  }
};
</script>

<style scoped>
.bg-1 {
  background-color: rgb(253, 0, 106);
  color: rgb(7, 7, 7);
}
.btn-yyy {
  color: rgb(0, 0, 0);
  background-color: #e1fa00;
  border-color: #e1fa00;
}
</style>
