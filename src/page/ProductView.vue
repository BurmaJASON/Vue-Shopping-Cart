<template>
    <MasterView>
        <!-- Loader -->
        <LoaderView v-show="isLoad"></LoaderView>
        <div v-show="!isLoad" class="container">
          <div class="row">
            <div class="col-md-4" v-for="(product,i) in products" :key="i">
              <div class="card p-3 m-3">
                <div class="card-header">{{ product.brand }}</div>
                <div class="card-body" >
                  <img :src="product.thumbnail" style="width : 100%;">
                </div>
                <div class="card-footer">
                  <span>Price - <small>${{ product.price }}</small></span>
                  <a @click="addToCart(product)" class="btn btn-sm btn-dark float-end">Add To Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </MasterView>
    
</template>

<script>
import LoaderView from '../component/LoaderView'
import MasterView from '../layout/MasterView'
import axios from 'axios'

export default {
  components: {
    LoaderView, MasterView },
  data() {
    return {
      isLoad : true,
      products : []
    }
  },
  created() {
    axios.get("https://dummyjson.com/products").then(res => {
      this.products = res.data.products;
      this.isLoad = false;
    });
  },
  methods : {
    addToCart(product) {
      var cart = this.$root.cart;
      var  isInCart = cart.find(v => {
        return v.id == product.id;
      });

      if(isInCart) {
        isInCart.qty++;
      }else {
        cart.push({...product,qty:1,isMuted:false});
      }
    }
  }
}
</script>

<style>

</style>