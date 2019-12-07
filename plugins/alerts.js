import Vue from "vue";
import VueSweetalert2 from "vue-sweetalert2";

import "sweetalert2/dist/sweetalert2.css";

// import SweetAlertIcons from "vue-sweetalert-icons";

// Vue.use(SweetAlertIcons);

const options = {
  confirmButtonColor: "#41b882",
  cancelButtonColor: "#ff7674"
};
Vue.use(VueSweetalert2, options);
