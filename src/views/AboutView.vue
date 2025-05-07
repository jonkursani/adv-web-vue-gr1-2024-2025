<script setup>
import AppCard from "@/components/ui/AppCard.vue";
</script>

<template>
  <app-card>
    <template #header>
      <h5>About view header</h5>
    </template>

    <!--    <template #default>-->
    <!--      <p>About content body</p>-->
    <!--    </template>-->
    <p>About content body</p>
  </app-card>
</template>
