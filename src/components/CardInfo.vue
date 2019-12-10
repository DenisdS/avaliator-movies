<script>
export default {
  name: 'CardInfo',
  props: {
    card: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>

<template>
  <div>
    CardInfo
  </div>
</template>