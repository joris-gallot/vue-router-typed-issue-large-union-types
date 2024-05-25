<script setup lang="ts">
import { RouteNamedMap } from 'vue-router/auto-routes'

interface NavigationItem {
  name: keyof RouteNamedMap
  title: string
}

const navigationItems: NavigationItem[] = [
  { name: 'Foo1', title: 'Foo1' },
  { name: 'Foo2', title: 'Foo2' },
  { name: 'Foo3', title: 'Foo3' },
]

</script>

<template>
  <div v-for="{ title, name } in navigationItems">
    <router-link :to="{name}">{{ title }}</router-link>
  </div>
</template>
