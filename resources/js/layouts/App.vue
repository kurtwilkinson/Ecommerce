<template>
  <router-link :to="{ name: 'items.index' }">
    List
  </router-link>
  <router-link :to="{ name: 'items.create' }">
    Create
  </router-link>
  <router-view></router-view>
</template>