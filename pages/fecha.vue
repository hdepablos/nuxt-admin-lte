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
                  Fechas
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
                  <div class="row mt-5">
                    <div class="col-md-3">
                      <div class="row">
                        <div class="col-md-12">
                          <label class="control-label">Fecha:</label>
                          <date-picker
                            :shortcuts="shortcuts"
                            :disabled-date="notBeforeToday"
                            v-model="date"
                            name="fecha"
                            id="fecha"
                            lang="es"
                            type="date"
                            style="width: 100%"
                            value-type="YYYY-MM-DD"
                            format="DD-MM-YYYY, ddd"
                          ></date-picker>
                        </div>
                        <div class="col-md-12 mt-2">
                          <button @click.prevent="getFecha()">Get fecha</button>
                          <button @click.prevent="setFecha()">Set fecha</button>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class="row">
                        <div class="col-md-12">
                          <label class="control-label">Hora:</label>
                          <date-picker
                            v-model="time"
                            lang="es"
                            name="hora"
                            id="hora"
                            type="time"
                            format="hh:mm a"
                            :minute-step="10"
                            style="width: 100%"
                            placeholder="Selecciona la hora"
                          ></date-picker>
                        </div>
                        <div class="col-md-12 mt-2">
                          <button @click.prevent="getHora()">Get hora</button>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="row">
                        <div class="col-md-12">
                          <label class="control-label">Fecha y Hora:</label>

                          <date-picker
                            v-model="datetime"
                            :shortcuts="shortcutsfechahora"
                            :disabled-date="notAfterToday"
                            lang="es"
                            name="fechahora"
                            id="fechahora"
                            type="datetime"
                            :minute-step="5"
                            format="DD-MM-YYYY, ddd [con] hh:mm a"
                            placeholder="Selecciona fecha y hora"
                            style="width: 100%"
                          ></date-picker>
                        </div>
                        <div class="col-md-12 mt-2">
                          <button @click.prevent="getFechaHora()">
                            Get fecha y hora
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="row mt-5">
                        <div class="col-md-12 has-error">
                          <label class="control-label">Rango de fecha:</label>
                          <date-picker
                            v-model="rangefecha"
                            :shortcuts="shortcutsrangefecha"
                            lang="es"
                            type="date"
                            range
                            name="rangofecha"
                            id="rangofecha"
                            style="width: 100%"
                            format="DD-MM-YYYY, ddd"
                          ></date-picker>
                        </div>
                        <div class="col-md-12 mt-2">
                          <button @click.prevent="getRangoFecha()">
                            Get rango fecha
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="row mt-5">
                        <div class="col-md-12">
                          <client-only placeholder="Loading...">
                            <label class="control-label"
                              >Rango de fecha y hora:</label
                            >
                            <date-picker
                              v-model="rangefechahora"
                              :shortcuts="shortcutsrangefechahora"
                              lang="es"
                              type="datetime"
                              range
                              name="rangofechahora"
                              id="rangofechahora"
                              style="width: 100%"
                              value-type="YYYY-MM-DD HH:mm:ss"
                              format="DD-MM-YYYY, ddd HH:mm:ss a"
                              confirm
                            ></date-picker>
                          </client-only>
                        </div>
                        <div class="col-md-12 mt-2">
                          <button
                            data-toggle="button"
                            class="btn btn-primary btn-outline"
                            type="button"
                            @click.prevent="getRangoFechaHora()"
                          >
                            Get rango fecha y hora
                          </button>
                          <button
                            data-toggle="button"
                            class="btn btn-success btn-facebook"
                            type="button"
                            @click.prevent="getRangoFechaHora()"
                          >
                            Get rango fecha y hora
                          </button>
                        </div>
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
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/es";
import moment from "moment";

const today = new Date();
today.setHours(0, 0, 0, 0);

export default {
  layout: "adminLte",
  name: "fecha",
  components: {
    DatePicker
  },
  data() {
    return {
      date: "",
      time: "",
      datetime: "",
      // rangefecha: [new Date(2019, 9, 8), new Date(2019, 9, 19)],
      rangefecha: "",
      rangefechahora: "",
      shortcutsrangefecha: [
        {
          text: "Hoy",
          onClick: () => {
            this.rangefechahora = [new Date(moment()), new Date(moment())];
          }
        },
        {
          text: "Mes anterior",
          onClick: () => {
            const date1 = new Date(
              moment()
                .subtract(1, "months")
                .date(1)
            );
            const date2 = new Date(moment().date(0));

            this.rangefechahora = [date1, date2];
            return [date1, date2];
            // return date1;
          }
        }
      ],
      shortcutsrangefechahora: [
        {
          text: "Hoy",
          onClick: () => {
            this.fechahora = new Date();
          }
        },
        {
          text: "mes anterior",
          onClick: () => {
            var fechai = moment()
              .subtract(1, "months")
              .date(1)
              .toDate();
            fechai.setHours(9);
            fechai.setMinutes(30);
            fechai.setSeconds(0);

            var fechaf = moment()
              .date(0)
              .toDate();
            fechaf.setHours(18);
            fechaf.setMinutes(30);
            fechaf.setSeconds(0);

            this.rangefechahora = [fechai, fechaf];

            // return [fechai, fechaf];
          }
        }
      ],
      shortcutsfechahora: [
        {
          text: "fin mes ant",
          onClick: () => {
            var fechahora = moment()
              .date(0)
              .toDate();
            fechahora.setHours(9);
            fechahora.setMinutes(30);
            fechahora.setSeconds(0);
            return fechahora;
          }
        },
        {
          text: "1 mes ant 10 a",
          onClick: () => {
            var fechahora = moment()
              .subtract(1, "months")
              .date(1)
              .toDate();
            fechahora.setHours(18);
            fechahora.setMinutes(30);
            fechahora.setSeconds(0);
            return fechahora;
          }
        }
      ],
      shortcuts: [
        {
          text: "Today",
          onClick() {
            const date = new Date();
            // return a Date
            return date;
          }
        },
        {
          text: "Yesterday",
          onClick() {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            return date;
          }
        }
      ]
    };
  },
  methods: {
    notBeforeToday(date) {
      return date < today;
    },
    notAfterToday(date) {
      return date > today;
    },
    getFecha() {
      console.log("Fecha");
      console.log(this.date);

      console.log(this.date ? moment(this.date).format("LL") : "");
    },
    setFecha() {
      console.log("Setear Fecha");
      console.log(this.date);
    },
    getHora() {
      console.log("Hora");
      console.log(this.time);
    },
    getFechaHora() {
      console.log("Fecha hora");
      console.log(this.datetime);
    },
    getRangoFecha() {
      console.log("Rango Fecha");
      console.log(this.rangefecha);
    },
    getRangoFechaHora() {
      console.log("Rango Fecha hora");
      console.log(this.rangefechahora);
    }
  }
};
</script>

<style></style>
