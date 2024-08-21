<script setup lang="ts">
  // You might choose this based on an API call or logged-in status
  const layout = "default";
</script>

<style>
  @import url("~/src/css/output.css");
</style>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
