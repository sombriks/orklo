<template>
  <form @submit.prevent="dosave()">
    <div class="row bottom-xs">
      <div class="col-xs-6">
        <b-field label="Data do worklog">
          <b-datepicker
            v-model="worklog.dt"
            placeholder="Type or select a date..."
            icon="calendar-today"
            editable
          ></b-datepicker>
        </b-field>
      </div>
      <div class="col-xs-6 end-xs">
        <button class="button is-primary" type="submit">Salvar</button>
      </div>
    </div>
    <div class="row bottom-xs">
      <div class="col-xs-3">
        <b-field label="Manhã">
          <b-timepicker></b-timepicker>
        </b-field>
      </div>
      <div class="col-xs-3">
        <b-field label="Almoço">
          <b-timepicker></b-timepicker>
        </b-field>
      </div>
      <div class="col-xs-3">
        <b-field label="Tarde">
          <b-timepicker></b-timepicker>
        </b-field>
      </div>
      <div class="col-xs-3">
        <b-field label="Saída">
          <b-timepicker></b-timepicker>
        </b-field>
      </div>
    </div>
  </form>
</template>

<script>
// import { DateTime } from "luxon";
export default {
  name: "wl-bar",
  data: () => ({
    worklog: {
      dt: new Date()
    }
  }),
  methods: {
    dosave() {
      this.$store.dispatch("save", this.worklog).then(() => {
        alert("salvo");
        this.worklog = {
          dt: new Date()
        };
      });
    }
  }
};
</script>

<style></style>
