<template>
  <b-field>
    <b-timepicker
      v-model="val"
      @input="$emit('input', val)"
      required
    ></b-timepicker>
    <button
      type="button"
      class="button control"
      @click="e => $emit('input', new Date())"
    >
      Agora
    </button>
    <button type="button" class="button control">-1h</button>
    <button type="button" class="button control">+1h</button>
  </b-field>
</template>

<script>
export default {
  name: "wl-time",
  props: ["value"],
  data() {
    return {
      val: null
    };
  },
  watch: {
    value(v) {
      this.val = v;
    }
  }
};
</script>

<style></style>
