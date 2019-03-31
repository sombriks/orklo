<template>
  <div class="container is-fluid">
    <div class="tile is-ancestor">
      <wl-form></wl-form>
      <wl-stats class="tile is-child box"></wl-stats>
      <wl-card v-for="wl in $store.state.logs" :key="wl.id" :wl="wl" class="tile is-child box"></wl-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    this.$store.dispatch("list");
  }
};
</script>

<style></style>
