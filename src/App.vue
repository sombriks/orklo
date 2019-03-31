<template>
  <div class="container is-fluid">
    <div class="tile is-ancestor" style="flex-wrap:wrap;">
      <div class="tile is-parent is-vertical is-6">
        <wl-form></wl-form>
        <wl-stats class="tile"></wl-stats>
      </div>
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
