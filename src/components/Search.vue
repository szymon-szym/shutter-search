<template>
<div class="search-root">
  <div class="search-cont" v-if="loading===false">
     <div class="search-input">
        <v-text-field
          v-model="search"
          label="Search"
        >
        </v-text-field>
    <v-btn  @click="filterPhotos($event)">Search</v-btn>
    <v-btn @click="clear()" color="error">Clear</v-btn>
    </div>
  </div>
   <v-progress-circular v-if="loading"
      :size="100"
      :width="7"
      color="red darker-1"
      indeterminate
      class="loader"
    ></v-progress-circular>
  <div class="mb-2 mt-0" v-if="(filteredPhotos.length>0)">Found: {{ filteredPhotos.length  }} </div>
  <div class="photo-cont">
    <PhotoCard v-for="photo in filteredPhotos" :photo="photo" :key="photo.id"/>
  </div>
</div>
</template>
<script>

import PhotoCard from '@/components/Photo-Card.vue'

export default {
  name: 'Search',
  components: {
    PhotoCard
  },
  props: {
    photos: Array,
    loading: Boolean
  },
  data() {
    return{
      test: 'this is search comp',
      filteredPhotos: [],
      search: ''
    }
  },
  methods: {
    filterPhotos: function(e) {
      if ((e.type==='click') || (e.key==='Enter')) {
        if (this.search.length < 3) { return console.log('min 3 chars') } 
        this.filteredPhotos = []
        return this.filteredPhotos = this.photos.filter(e => e.link.toLowerCase().includes(this.search.toLowerCase()))
      }
    },
    clear: function() {
      this.filteredPhotos = []
      this.search = ''
    }
  },
  created() {
    window.addEventListener('keyup', this.filterPhotos)
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.filterPhotos)
  }
}

</script>

<style scoped>
.search-cont {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 500px 1fr; 
  align-items: center;
}
.search-input {
  grid-column: 2 / 3;
  display: flex;
}
.photo-cont {
  padding: 0 10px 0 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}
.loader{
  position: absolute;
  top: 50vH;
  margin-top: -50px;
}
/* .found-counter {
  margin-top:
} */
</style>
