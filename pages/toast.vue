<template>
  <div>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- Left col -->
          <section class="col-lg-12 connectedSortable my-2">
            <!-- Custom tabs (Charts with tabs)-->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="fas fa-chart-pie mr-1" />
                  Gráfico
                </h3>
                <div class="card-tools">
                  <ul class="nav nav-pills ml-auto">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href="#revenue-chart"
                        data-toggle="tab"
                        >Area</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#sales-chart" data-toggle="tab"
                        >Donut</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <div class="tab-content p-0">
                  <!-- Contenido -->
                  <div class="row">
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-md-12">
                          <!-- <client-only>
                            <notifications
                              group="foot"
                              class="notifications-vue"
                            ></notifications>
                          </client-only> -->
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                          <p>
                            Use any of the available button classes to quickly
                            create a styled button.
                          </p>

                          <h3 class="font-bold">
                            Normal buttons
                          </h3>
                          <p>
                            <button
                              type="button"
                              class="btn btn-w-m btn-default"
                            >
                              Default
                            </button>
                            <button
                              type="button"
                              class="btn btn-w-m btn-primary"
                            >
                              Primary
                            </button>
                            <button
                              type="button"
                              class="btn btn-w-m btn-success"
                              @click.prevent="generarPdf"
                            >
                              Generar pdf
                            </button>
                            <button type="button" class="btn btn-w-m btn-info">
                              Info
                            </button>
                            <button
                              type="button"
                              class="btn btn-w-m btn-warning"
                              @click="getWar()"
                            >
                              Warning mostrar el registro seleccionado
                            </button>
                            <button
                              type="button"
                              class="btn btn-w-m btn-danger"
                            >
                              Danger
                            </button>
                            <button type="button" class="btn btn-w-m btn-link">
                              Link
                            </button>
                          </p>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <h3>Icono</h3>

                          <h3>Input Mask moneda</h3>
                          <imask-input
                            v-model="numberModel"
                            :mask="Number"
                            radix=","
                            :unmask="true"
                            @accept="onAccept"
                            placeholder="Enter number here"
                            thousandsSeparator="."
                            :padFractionalZeros="true"
                            id="monto"
                            name="monto"
                            maxlength="20"
                            autocomplete="off"
                          />
                        </div>
                        <div class="col-md-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </section>
          <!-- /.Left col -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { IMaskComponent } from "vue-imask";
import SweetalertIcon from "../components/pages/NavBar";
// import jspdf from 'jspdf';

export default {
  layout: "adminLte",
  data() {
    return {
      numberModel: "",
      onAccept(value) {
        console.log(value);
      }
    };
  },
  components: {
    SweetalertIcon,
    "imask-input": IMaskComponent
  },
  methods: {
    generarPdf() {
      console.log("generar pdf");
    },
    getWar() {
      console.log("Esto es una prueba");

      //   Vue.swal("Hello Vue world!!!");
      //   this.$swal("Hello Vue work");

      //   this.$swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: "Something went wrong!",
      //     footer: "<a href>Why do I have this issue?</a>"
      //   });

      //   this.$swal.fire({
      //     title: "Sweet!",
      //     text: "Modal with a custom image.",
      //     imageUrl: "https://unsplash.it/400/200",
      //     imageWidth: 400,
      //     imageHeight: 200,
      //     imageAlt: "Custom image"
      //   });

      //   const Toast = this.$swal.mixin({
      //     toast: true,
      //     position: "top-end",
      //     showConfirmButton: false,
      //     timer: 3000,
      //     timerProgressBar: true,
      //     onOpen: toast => {
      //       toast.addEventListener("mouseenter", this.$swal.stopTimer);
      //       toast.addEventListener("mouseleave", this.$swal.resumeTimer);
      //     }
      //   });

      //   Toast.fire({
      //     icon: "error",
      //     title: "Signed in successfully"
      //   });

      this.$swal("Heading", "this is a Heading", "OK");
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped></style>
