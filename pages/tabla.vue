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
                  Tabla
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
                  <div class="row">
                    <div class="col-md-10">
                      <div class="row justify-content-md-center">
                        <div class="col-md-10">
                          <client-only>
                            <v-client-table
                              id="idtabla"
                              name="idtabla"
                              :data="tableData"
                              :columns="columns"
                              :options="options"
                            ></v-client-table>
                          </client-only>
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
export default {
  layout: "adminLte",
  data() {
    return {
      columns: ["id", "name", "age"],
      tableData: [
        { id: 1, name: "John", age: "20" },
        { id: 2, name: "Jane", age: "24" },
        { id: 3, name: "Susan", age: "16" },
        { id: 4, name: "Chris", age: "55" },
        { id: 5, name: "Dan", age: "40" }
      ],
      options: {
        // see the options API
      }
    };
  },
  mounted() {},
  beforeDestroy() {}
};
</script>

<style lang="scss" scoped></style>
