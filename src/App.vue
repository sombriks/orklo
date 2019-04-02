<template>
  <section>
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-parent is-5 is-vertical">
          <wl-form></wl-form>
        </div>
        <div class="tile is-parent is-7 is-vertical">
          <wl-stats></wl-stats>
          <wl-card
            v-for="wl in $store.state.logs"
            :key="wl.id"
            :wl="wl"
          ></wl-card>
        </div>
      </div>
    </div>
  </section>
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
