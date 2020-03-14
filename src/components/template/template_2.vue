<template>
  <div id="vue_det">
    <h1>Firstname : {{firstname}}</h1>
    <h1>Lastname : {{lastname}}</h1>
    <div v-html="htmlcontent"></div>
  </div>
</template>

<script>
export default {
  /**
   * 2.13 morning at home
   * https://www.tutorialspoint.com/vuejs/vuejs_template.htm
   */
  el: "#vue_det",

  data() {
    return {
      firstname: "Ria2",
      lastname: "Singh2",
      htmlcontent: "<div><h1>Vue Js Template</h1></div>"
    };
  }
};
</script>

<style scoped>
</style>
