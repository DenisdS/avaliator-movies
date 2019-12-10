<script>
import LikeButton from '@/components/LikeButton'
import SkipButton from '@/components/SkipButton'
import DislikeButton from '@/components/DislikeButton'

export default {
  name: 'CardView',
  components: {
    LikeButton,
    SkipButton,
    DislikeButton
  }
}
</script>

<template>
  <div>
    <LikeButton />
    <SkipButton />
    <DislikeButton />
  </div>
</template>
