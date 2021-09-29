<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { tableData } from "./dataAdvancedtable";

/**
 * Advanced table component
 */
export default {
  page: {
    title: "Менің аймақтарым",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader },
  data() {
    return {
      tableData: tableData,
      title: "Менің аймақтарым",
      items: [
        {
          text: "Tables",
          href: "/"
        },
        {
          text: "Advanced",
          active: true
        }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "age",
      sortDesc: false,
        itemss: [
            { name: '', position: '', office: '', dateOfBirth: '' }
        ],
      fields: [
        { key: "name", label: "№" },
        { key: "position", label: "Аудандар" },
        { key: "office", label: "Мектептер" },
        { key: "age", label: "Қолданушылар" },
        { key: "date", label: "Қолданушылар" },
        { key: "salary", sortable: true }
      ]
    };
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.tableData.length;
    },
      regions () {
          return this.$store.state.regions
      }
  },
    created () {
        if (this.regions.length === 0) {
            this.$store.dispatch('regions/fetchRegions')
        }
    },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    /**
     * Search the table data with search input
     */
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>
<style>
    .hidden_header {
        display: none;
    }
</style>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row mt-4">
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_length" class="dataTables_length">
                  <label class="d-inline-flex align-items-center">
                      <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>Жазбаны&nbsp;көрсету
                  </label>
                </div>
              </div>
              <!-- Search -->
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_filter" class="dataTables_filter text-md-right">
                  <label class="d-inline-flex align-items-center">
                    Search:
                    <b-form-input
                      v-model="filter"
                      type="search"
                      placeholder="Search..."
                      class="form-control form-control-sm ml-2"
                    ></b-form-input>
                  </label>
                </div>
              </div>
              <!-- End search -->
            </div>
            <!-- Table -->
            <div class="table-responsive mb-0">
                <b-table :items="itemss" :fields="fields">
                    <template #cell(name)="data">
                        <b-form-input type="text" placeholder="№" :value="data.value"></b-form-input>
                    </template>
                    <template #cell(position)="data">
                        <b-form-input type="text" placeholder="Аудандар" :value="data.value"></b-form-input>
                    </template>
                    <template #cell(office)="data">
                        <b-form-input type="text" placeholder="Мектептер" :value="data.value"></b-form-input>
                    </template>
                    <template #cell(age)="data">
                        <b-form-input type="text" placeholder="Қолданушылар" :value="data.value"></b-form-input>
                    </template>
                    <template #cell(date)="data">
                        <b-form-input type="text" placeholder="Қолданушылар" :value="data.value"></b-form-input>
                    </template>
                    <template #cell(salary)="data">
                        <b-form-input type="text" placeholder="Salary" :value="data.value"></b-form-input>
                    </template>
                </b-table>
              <b-table
                :items="tableData"
                responsive="sm"
                :per-page="perPage"
                :current-page="currentPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
                thead-class="hidden_header"
              ></b-table>
            </div>
            <div class="row">
              <div class="col">
                <div class="dataTables_paginate paging_simple_numbers float-right">
                  <ul class="pagination pagination-rounded mb-0">
                    <!-- pagination -->
                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
