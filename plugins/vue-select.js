import Vue from 'vue'
import vSelect from 'vue-select'
if (process.BROWSER_BUILD) {
  Vue.use(vSelect, {})
}