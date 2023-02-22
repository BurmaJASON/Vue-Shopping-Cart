<template>
    <ul class="nav bg-dark py-4">
        <li class="nav-item">
            <router-link to="/"  class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/product"  class="nav-link">Product</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/cart"  class="nav-link text-white">
            <i class="fas fa-shopping-cart"></i>
            <small class="badge badge-primary" style="font-size: 9px;">{{ cart.length }}</small>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            cart :[]
        }
    },
    created() {
        this.cart = this.$root.cart;
    }
}
</script>

<style>

</style>