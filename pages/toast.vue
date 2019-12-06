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
                          <client-only>
                            <notifications
                              group="foot"
                              class="notifications-vue"
                            ></notifications>
                          </client-only>
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
    "imask-input": IMaskComponent
  },
  methods: {
    generarPdf() {
      console.log("generar pdf");
    },
    getWar() {
      console.log("Esto es una prueba");

      this.$notify({
        group: "foot",
        type: "warn",
        title: "&#9888; Hello notify",
        text: "Every are time now! :)"
      });

      this.$notify({
        group: "foot",
        type: "error",
        title: "&#10008; Hello notify",
        text: "Every are time now! :)"
      });

      this.$notify({
        group: "foot",
        type: "success",
        title: "&#10004; Hello notify",
        text: "Every are time now! :)"
      });

      this.$notify({
        group: "foot",
        title: "Hello notify",
        text: "Every are time now! :)"
      });
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped></style>
