<script setup lang="ts">
import PrimeButton from "primevue/button";
import PrimeCard from "primevue/card";
</script>

<template>
  <PrimeCard style="margin: auto; width: 300px">
    <template #header> header </template>
    <template #title> title </template>
    <template #subtitle> subtitle </template>
    <template #content>
      <div>
        <PrimeButton> teste </PrimeButton>
      </div>
      <div>
        <slot />
      </div>
    </template>
    <template #footer> footer </template>
  </PrimeCard>
  <br />
</template>
