<template>
  <div>{{ bar }}</div>
  <div>{{ foo }}</div>
</template>

<script setup lang="ts">
import { useFoo } from '#imports'
import { foo } from '@/foo'

const { bar } = useFoo()
</script>
