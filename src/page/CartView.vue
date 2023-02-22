<template>
  <MasterView>
    <div class="container">
      <table class="table table-striped table-hover align-middle">
        <thead>
          <tr>
            <td>Name</td>
            <td>Image</td>
            <td>+-</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, i) in cart" :key="i">
            <td>{{ product.brand }}</td>
            <td>
              <img style="width : 5%;" :src="product.thumbnail">
            </td>
            <td>
              <span class="btn btn-sm btn-success m-1"  @click="addQty(product)">+</span>
              <span class="btn btn-sm btn-danger m-1" :class="{ 'muted' : product.isMuted }" @click="reduceQty(product)">-</span>
            </td>
            <td>{{ product.qty }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.price * product.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </MasterView>
</template>

<script>
import MasterView from '../layout/MasterView'
export default {
  components: { MasterView },
  data() {
    return {
      cart : [],
    }
  },
  created() {
    this.cart = this.$root.cart;
  },
  methods: {
    addQty(product){
      product.qty++;
      product.isMuted = false;
    },
    reduceQty(product){
      if(product.qty >= 1){
        product.qty--
      }else {
        product.isMuted = true;
      }
    }
  }
}
</script>

<style>
.muted {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>