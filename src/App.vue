<template>
  <div id="app">
    <h2>Users</h2>
    <p v-for="user in users" :key="`user-${user.id}`">{{ user.name }}</p>
    <hr />
    <h2>Products</h2>
    <p v-for="product in products" :key="`product-${product.id}`">{{ product.name }}</p>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      users: [],
      products: []
    };
  },
  mounted() {
    /*
     * In development Mirage JS will intercept all HTTP requests and respond with data.
     * Check your browser console for more info.
     */
    fetch("api/users")
      .then(res => res.json())
      .then(({ users }) => {
        this.users = users;
      });

    fetch("api/products")
      .then(res => res.json())
      .then(({ products }) => {
        this.products = products;
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
