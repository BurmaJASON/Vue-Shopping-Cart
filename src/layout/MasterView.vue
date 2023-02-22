<template>
  <div>
    <!-- Nav -->
    <NavView></NavView>
    <slot></slot>
    <!-- Content -->
    
  </div>
</template>

<script>
import NavView from './NavView'
export default {
  components: { NavView },

}
</script>

<style>

</style>