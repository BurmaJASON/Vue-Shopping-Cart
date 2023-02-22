<template>
  <div>
    <MasterView>
      <!-- Jumbotron -->
      <div class="p-4 shadow-4 rounded-3 " >
        <h2 class="display-4">Hello world!</h2>
        <p class="lead">
          This is a simple hero unit, a simple jumbotron-style component for calling extra
          attention to featured content or information.
        </p>

        <hr class="my-4" />

        <p>
          It uses utility classes for typography and spacing to space content out within the
          larger container.
        </p>
        <a  class="btn btn-primary btn-lg">
          Learn more
        </a>
      </div>
      <!-- Jumbotron -->
    </MasterView>
  </div>
</template>

<script>
import MasterView from '../layout/MasterView'
export default {
  components: { MasterView },

}
</script>

<style>

</style>