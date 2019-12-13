<script>
export default {
  name: 'LikeButton',
  data() {
    return {
      title: ''
    }
  }
}
</script>

<template>
  <form @click.prevent="$emit('liked', title)">
    <input type="text" v-model="title" />
    <button type="button">Enviar</button>
  </form>
</template>