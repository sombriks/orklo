<template>
  <div class="tile is-child box">
    <div>{{ wl.dt }}</div>
    <div>{{ wl.e1 }}</div>
    <div>{{ wl.s1 || "-" }}</div>
    <div>{{ wl.e2 || "-" }}</div>
    <div>{{ wl.s2 || "-" }}</div>
  </div>
</template>

<script>
export default {
  name: "wl-card",
  props: ["wl"]
};
</script>

<style></style>
