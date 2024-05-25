<script setup lang="ts">
import { useRouter } from 'vue-router/auto'
import { RouteNamedMap } from 'vue-router/auto-routes'

const router = useRouter()
const myRouteName = 'Foo1' as keyof RouteNamedMap

router.push({name: myRouteName })
</script>

<template>
  <div></div>
</template>
