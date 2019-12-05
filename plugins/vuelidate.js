import vuelidate from "vuelidate";
import Vue from "vue";
import VuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";

Vue.use(vuelidate);

Vue.component("form-group", templates.singleErrorExtractor.foundation6);

Vue.use(VuelidateErrorExtractor, {
  i18n: false,
  // Define common validation messages.
  messages: {
    required: "{attribute} es requerido xxx!",
    isJoe: "{attribute} must be Joe",
    notGmail: "{attribute} must not be gmail",
    email: "{attribute} is not a valid Email address.",
    isEmailAvailable:
      "{attribute} is not available. Must be at least 10 characters long."
  }
});
