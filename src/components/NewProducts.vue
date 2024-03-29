<!-- NewProducts.vue -->
<template>
    <div class="col-md-12">
      <div class="card table-card">
        <div class="card-header">
          <h5>New Products</h5>
        </div>
        <div class="card-block p-b-0">
          <div class="table-responsive">
            <table class="table table-hover m-b-0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Product Code</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(product, index) in newProducts" :key="index">
                  <td>{{ product.name }}</td>
                  <td>{{ product.product_code }}</td>
                  <td>{{ product.customer }}</td>
                  <td><label :class="{'label-danger': product.status === 'Out Stock', 'label-success': product.status === 'In Stock'}">{{ product.status }}</label></td>
                  <td>
                    <template v-for="i in product.rating">
                      <i class="fa fa-star f-12 text-c-yellow"></i>
                    </template>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newProducts: []
      };
    },
    mounted() {
      this.loadData();
    },
    methods: {
      async loadData() {
        try {
          const response = await fetch('jsons/New_Products.json');
          const jsonData = await response.json();
          this.newProducts = jsonData.new_products;
        } catch (error) {
          console.error('Error loading data:', error);
        }
      }
    }
  };
  </script>
  