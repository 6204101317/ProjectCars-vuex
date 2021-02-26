import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Total: 0,
    Menuitem: [
      {
        NameProduct: "Ford Mustang",
        img:
          "https://i.insider.com/578e9e4588e4a77c708b8db1?width=750&format=jpeg&auto=webp",
        Price: 10
      },
      {
        NameProduct: "BUGATTI",
        img:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg",
        Price: 20
      },
      {
        NameProduct: "New Nissan Z Proto",
        img:
          "https://www.autodeft.com/_files/images/full/2020-09-16/IEYAEBPP.jpg",
        Price: 30
      },
      {
        NameProduct: "Subaru BRZ",
        img:
          "https://www.autodeft.com/_files/images/full/2020-06-18/4EK4D9SO.jpg",
        Price: 40
      },
      {
        NameProduct: "Toyota GR Sport ",
        img:
          "https://www.autodeft.com/_uploads/images/a82858df-toyota-86-gr-sport-1.jpg",
        Price: 50
      },
      {
        NameProduct: "Toyota GT 86",
        img:
          "https://www.checkraka.com/uploaded/logo/9f/9f7723b6caeaeb7d9204eec583f8ed23.jpg",
        Price: 60
      },
      {
        NameProduct: "Toyota GR Supra 2020",
        img:
          "https://www.autodeft.com/_uploads/images/carlineup_86_grade_grade4_5_02_pc.png",
        Price: 70
      },
      {
        NameProduct: "Lotus Car Elise",
        img:
          "https://d2pa5gi5n2e1an.cloudfront.net/th/images/car_models/Lotus_Elise/2/main/L_1.jpg",
        Price: 80
      }
    ],
    select: []
  },
  getters: {
    SearchMenu: state => {
      return  state.Menuitem;
    },
    SearchMenuSelect: state => {
      return state.Sclect;
    },

    Order: state => (Amount, id) => {
      state.select.push({
        Amount: Amount,
        NameProduct: state.Menuitem[id].NameProduct,
        Price: state.Menuitem[id].Price,
        Total: Amount * state.Menuitem[id].Price
      });
      alert("Please press  Submit to confirm the product you have chosen ");
    }
  },
  mutations: {
    Clear: state => {
      for (let i = 0; i <= state.select.length; i++) {
        state.Total = 0;
        state.select = [];
      }
    },
    Submit: state => {
      state.Total = 0;
      for (let i = 0; i <= state.select.length; i++)
        state.Total = state.Total + state.select[i].Total;
    }
  },
  actions: {},
  modules: {}
});
