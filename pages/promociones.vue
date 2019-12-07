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
                  Promociones
                </h3>
                <!-- <div class="card-tools">
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
                </div> -->
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <div class="tab-content p-0">
                  <!-- Contenido -->
                  <client-only>
                    <!-- <promociones-allseasons></promociones-allseasons> -->
                  </client-only>
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
export default {
  layout: "adminLte",
  name: "Promociones",
  data() {
    return {
      prueba: ""
    };
  },
  methods: {}
};
</script>

<style></style>
