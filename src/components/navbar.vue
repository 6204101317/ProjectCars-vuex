<template>
  <div id="navbar" class="bg-ww">
    <b-navbar toggleable="lg" type="dark" variant="gg">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-navbar-brand to="/"><h3>Produet</h3></b-navbar-brand>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-brand to="/about"
            ><b-icon icon="cart4" style="width: 35px; height: 35px"></b-icon
          ></b-navbar-brand>
        </b-navbar-nav>
      </b-collapse>
      <div>
        <router-link to="/about">
          <button
            type="button "
            class="btn btn-outline-ee mr-1"
            @click="Submit()"
          >
            Submit
          </button>
          <button type="button" class="btn btn-outline-gg" @click="Clear()">
            Clear
          </button>
        </router-link>
      </div>
    </b-navbar>
    <router-view />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "navber",
  computed: {
    ...mapMutations(["Clear", "Submit"])
  }
  // data() {
  //   return {
  //     Total: 0,
  //     Menuitem: [
  //       {
  //         NameProduct: "Ford Mustang",
  //         img:
  //           "https://i.insider.com/578e9e4588e4a77c708b8db1?width=750&format=jpeg&auto=webp",
  //         Price: 10
  //       },
  //       {
  //         NameProduct: "BUGATTI",
  //         img:
  //           "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg",
  //         Price: 20
  //       },
  //       {
  //         NameProduct: "New Nissan Z Proto",
  //         img:
  //           "https://www.autodeft.com/_files/images/full/2020-09-16/IEYAEBPP.jpg",
  //         Price: 30
  //       },
  //       {
  //         NameProduct: "Subaru BRZ",
  //         img:
  //           "https://www.autodeft.com/_files/images/full/2020-06-18/4EK4D9SO.jpg",
  //         Price: 40
  //       },
  //       {
  //         NameProduct: "Toyota GR Sport ",
  //         img:
  //           "https://www.autodeft.com/_uploads/images/a82858df-toyota-86-gr-sport-1.jpg",
  //         Price: 50
  //       },
  //       {
  //         NameProduct: "Toyota GT 86",
  //         img:
  //           "https://www.checkraka.com/uploaded/logo/9f/9f7723b6caeaeb7d9204eec583f8ed23.jpg",
  //         Price: 60
  //       },
  //       {
  //         NameProduct: "Toyota GR Supra 2020",
  //         img:
  //           "https://www.autodeft.com/_uploads/images/carlineup_86_grade_grade4_5_02_pc.png",
  //         Price: 70
  //       },
  //       {
  //         NameProduct: "Lotus Car Elise",
  //         img:
  //           "https://d2pa5gi5n2e1an.cloudfront.net/th/images/car_models/Lotus_Elise/2/main/L_1.jpg",
  //         Price: 80
  //       }
  //     ],
  //     select: [],
  //     Data: []
  //   };
  // },
  // methods: {
  //   submit() {
  //     this.Data = this.select;
  //     this.Total = 0;
  //     for (var i = 0; i < this.Data.length; i++) {
  //       this.Total = this.Total + this.Data[i].Total;
  //     }
  //   },
  //   cleardata() {
  //     this.Total = 0;
  //     this.Data = [{}];
  //     this.select = [{}];
  //   },
  //   menuorder(value) {
  //     this.select = value;
  //   },
  //   AddMenu(value) {
  //     this.Menuitem.push(value);
  //   }
  // }
};
</script>

<style>
#nav a.router-link-exact-active {
  color: #ffffff;
}
.bg-gg {
  background-color: #000000 !important;
}
#nav a {
  font-weight: bold;
  color: #ffffff;
}
.bg-ww {
  background-color: #b8f50f !important;
}
.btn-outline-ee {
  color: #e1fa00;
  border-color: #e1fa00;
}
.btn-outline-gg {
  color: #fa007d;
  border-color: #fa007d;
}
</style>
