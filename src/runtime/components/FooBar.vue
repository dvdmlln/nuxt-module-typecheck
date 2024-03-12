<template>
  <div>{{ bar }}</div>
</template>

<script setup lang="ts">
import { useFoo } from '#imports'

const { bar } = useFoo()
</script>