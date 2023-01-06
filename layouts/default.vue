<template>
  <div class="container mx-auto h-screen">
    <div class="flex flex-row justify-center">
      <SidebarRight></SidebarRight>

      <slot></slot>
      <SidebarLeft></SidebarLeft>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SidebarRight from '~/components/common/SidebarRight.vue'
import SidebarLeft from '~~/components/common/SidebarLeft.vue'
defineOptions({ name: 'DefaultLayout' })
</script>

<style lang="scss" scoped></style>
