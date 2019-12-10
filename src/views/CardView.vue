<script>
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
  data () {
    return {
      card: { movie: '' } 
    }
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
