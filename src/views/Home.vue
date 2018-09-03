<template>
  <div class="home">
    <Search :loading="loading" :photos="photosArr"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue'
import firebase from 'firebase'

export default {
  name: 'home',
  components: {
    Search
  },
  data() {
    return {
      photos: {  },
      loading: false
    }
  },
  methods: {
    fetchPhoto: function() {
      this.loading = true;
      const db = firebase.database();
      db.ref('/photos/').once('value')
      .then(snap => {
        this.photos = snap.val()
        this.loading = false;
      })
    }
  },
  computed: {
    photosArr() {
       return Object.keys(this.photos).map(e => this.photos[e])
    }
  },
  mounted() {
    this.fetchPhoto();  
  }
}
</script>
