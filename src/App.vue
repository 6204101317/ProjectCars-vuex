<template>
  <div id="app" class="ww">
    <navbar></navbar>
  </div>
</template>
<script>
import navbar from "@/components/navbar.vue";
export default {
  name: "app",
  components: { navbar }
};
</script>

<style>
#nav a.router-link-exact-active {
  color: #fdfafa;
}
.bg-info {
  background-color: #0d4736 !important;
}
#nav a {
  font-weight: bold;
  color: #e6e7e9;
}
.bg-ww {
  background-color: #b8f50f !important;
}
</style>
