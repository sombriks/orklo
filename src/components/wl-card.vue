<template>
  <div class="tile is-child box">
    <div>{{ dt }}</div>
    <div>{{ e1 }}</div>
    <div>{{ s1 || "-" }}</div>
    <div>{{ e2 || "-" }}</div>
    <div>{{ s2 || "-" }}</div>
    <div>{{ wl.obs || "-" }}</div>
  </div>
</template>

<script>
import { Interval, DateTime } from "luxon";
export default {
  name: "wl-card",
  props: ["wl"],
  computed: {
    dt() {
      return this.wl && DateTime.fromISO(this.wl.dt).toFormat("yyyy-MM-dd");
    },
    e1() {
      return this.toTime(this.wl.e1);
    },
    s1() {
      return this.toTime(this.wl.s1);
    },
    e2() {
      return this.toTime(this.wl.e2);
    },
    s2() {
      return this.toTime(this.wl.s2);
    }
  },
  methods: {
    toTime(d) {
      return d && DateTime.fromISO(d).toFormat("HH:mm");
    }
  }
};
</script>

<style></style>
