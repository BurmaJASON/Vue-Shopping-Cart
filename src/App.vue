<template>
    <div>
        <router-view></router-view>
        <!-- <MasterView></MasterView> -->
    </div>
</template>

<script>


// import MasterView from './components/MasterView.vue';
export default {
  // components: {  MasterView },
  name : 'App',
  data() {
    return {
      cart : []
    }
  }
}
</script>

<style>

</style>
