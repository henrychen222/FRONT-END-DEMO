<template>
  <div id="vue_det">
    <h1>Firstname : {{firstname}}</h1>
    <h1>Lastname : {{lastname}}</h1>
    <div>{{htmlcontent}}</div>
  </div>
</template>

<script>
export default {
  /**
   * 2.12 morning
   * 2.13 morning at home
   * https://www.tutorialspoint.com/vuejs/vuejs_template.htm
   */
  name: 'TemplateOne',
  el: "#vue_det",

  // state like react
  data() {
    return {
      firstname: "Ria1",
      lastname: "Singh1",
      htmlcontent: "<div><h1>Vue Js Template</h1></div>"
    };
  }
};
</script>

<style scoped>
</style>
