<template>
  <div class="footer">
    <div class="container">
      <span v-html="settings.footer"></span>
    </div>
  </div>
</template>

<script>
const settings = require("../../data/theme.json");
export default {
  data() {
    return {
      settings
    };
  }
};
</script>

<style scoped>
.footer {
  font-size: 0.8rem;
  padding: 6rem 0;
}
</style>