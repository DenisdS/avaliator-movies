<script>
export default {
  name: 'CardInfo',
  props: {
    card: {
      type: Object,
      required: true,
    }
  }
}
</script>

<template>
  <div class="card-info">
    <img class="card-info__poster" :src="card.poster_url" />
    <div class="card-info__title">
      {{ card.title }}
    </div>
    <div class="card-info__date">
      {{ card.release_date }}
    </div>
    <div class="card-info__genre">
      {{ card.genre_id }}
    </div>
    <div class="card-info__populary">
      {{ card.populary }}
    </div>
    <div class="card-info__overview">
      {{ card.overview }}
    </div>
  </div>
</template>