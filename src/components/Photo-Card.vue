<template>
  <div class="photo">
    <v-hover>
    <v-card
    slot-scope="{hover }"
    :class="`elevation-${hover ? 12 : 2}`"
    >
      <v-img
     :src="photo.link"
     class="card-img"
      ></v-img>
      <div class="card-description">
      <div class="car-descr-txt">
      <span>{{ description }}</span>
      </div>
      <v-btn small
      :href="linkToShutt"
      target="_blank"
      color="error"
      flat
      class="shuttBtn">Shutter</v-btn>
      </div>
    </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: 'Photo',
  props: {
    photo: Object
  },
  data() {
    return {
      test: 'this is photo comp',
      img: 'link'
    }
  },
  computed: {
    description() {
      const keywordRegEx = /-(.*)-/gm
      let description = this.photo.link.match(keywordRegEx).reduce((acc, curr) => {
        return acc += curr
      }, '')
      return description.replace(/-/g, " ")
      },
      linkToShutt() {
        return `https://www.shutterstock.com/search/${this.photo.id}`
      }
  }
}
</script>

<style scoped>
v-card {
  align-content: center;
}
.card-img {
  width: 200px;
  height: 250px;
  overflow: hidden;
  margin: auto;
}
.card-description {
  font-size: 12px;
  padding: 10px;
  height: 100px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}
.car-descr-txt {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  }
</style>
