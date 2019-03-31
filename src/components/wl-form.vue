<template>
  <form class="tile is-child is-vertical box" @submit.prevent="dosave()">
    <b-field label="Data">
      <b-datepicker
        required
        v-model="wl.dt"
        placeholder="Type or select a date..."
        icon="calendar-today"
        editable
      ></b-datepicker>
    </b-field>
    <b-field label="Manhã">
      <b-field>
        <b-timepicker v-model="wl.e1" required></b-timepicker>
        <button type="button" class="button control" @click="e => (wl.e1 = new Date())">Agora</button>
      </b-field>
    </b-field>
    <b-field label="Almoço">
      <b-field>
        <b-timepicker v-model="wl.s1" required></b-timepicker>
        <button type="button" class="button control" @click="e => (wl.s1 = new Date())">Agora</button>
      </b-field>
    </b-field>
    <b-field label="Tarde">
      <b-field>
        <b-timepicker v-model="wl.e2" required></b-timepicker>
        <button type="button" class="button control" @click="e => (wl.e2 = new Date())">Agora</button>
      </b-field>
    </b-field>
    <b-field label="Saída">
      <b-field>
        <b-timepicker v-model="wl.s2" required></b-timepicker>
        <button type="button" class="button control" @click="e => (wl.s2 = new Date())">Agora</button>
      </b-field>
    </b-field>
    <b-field label="Observação">
      <b-input v-model="wl.obs" type="textarea"></b-input>
    </b-field>
    <b-field>
      <button v-if="wl.id" type="button" class="button is-danger" @click="dodel">Excluir</button>
      <button class="button is-primary" type="submit">Salvar</button>
    </b-field>
  </form>
</template>

<script>
// import { DateTime } from "luxon";

const newwl = () => ({
  dt: new Date(),
  e1: null,
  s1: null,
  e2: null,
  s2: null,
  obs: null
});
export default {
  name: "wl-form",
  data: () => ({
    wl: newwl()
  }),
  methods: {
    dosave() {
      const { dt, e1, s1, e2, s2, obs } = this.wl;
      if (!dt || !e1) return alert("Preencha os campos");
      this.$store
        .dispatch("save", {
          dt,
          e1,
          s1,
          e2,
          s2,
          obs
        })
        .then(() => {
          alert("salvo");
          this.wl = newwl();
        });
    },
    dodel() {}
  }
};
</script>

<style></style>
