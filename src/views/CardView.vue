<script>
import { mapState } from 'vuex'
import CardInfo from '@/components/CardInfo'
import LikeButton from '@/components/LikeButton'
import SkipButton from '@/components/SkipButton'
import DislikeButton from '@/components/DislikeButton'

export default {
  name: 'CardView',
  components: {
    CardInfo,
    LikeButton,
    SkipButton,
    DislikeButton
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
    <LikeButton />
    <SkipButton />
    <DislikeButton />
  </div>
</template>
