<script>
import { mapState } from 'vuex'
import CardInfo from '@/components/CardInfo'
import LikeButton from '@/components/LikeButton'
import SkipButton from '@/components/SkipButton'
import DislikeButton from '@/components/DislikeButton'

export default {
  name: 'CardView',
  components: {
    LikeButton,
    SkipButton,
    DislikeButton,
    CardInfo
  },
  methods : {
    likeMovie(title) {
      this.$store.dispatch('LIKE_MOVIE', { title })
    }
  },
  computed: {
    ...mapState({
      card: 'card',
    })
  }
}
</script>

<template>
  <div>
    <CardInfo :card="card" />
    <LikeButton 
      @liked="likeMovie" />
    <SkipButton />
    <DislikeButton />
  </div>
</template>
