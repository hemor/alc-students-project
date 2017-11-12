<template>
  <v-container fluid class="pa-0 ma-0">
    <v-layout row>
      <v-carousel>
        <v-carousel-item
          v-for="(image, i) in carouselImages"
          :key="i"
          :src="image.src"
        ></v-carousel-item>
      </v-carousel>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <h4 class="text-xs-center">Welcome To ALC Student Project</h4>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        carouselImages: [
          { src: 'https://s-i.huffpost.com/gen/1956165/images/o-SMILING-STUDENTS-facebook.jpg' },
          { src: 'http://thecampussocialite.com/wp-content/uploads/college-hobby-1.jpg' },
          { src: 'https://steinhardt.nyu.edu/site/ataglance/files/2016/03/Collegestudents.jpg' },
          { src: 'http://media.beam.usnews.com/69/42/5e01ed8c40a9a2f4c56e312bc5e0/150814-pfccollegestudents-stock.jpg' },
          { src: 'http://www.youthconnect.in/wp-content/uploads/2014/07/college-students-awesome.jpg' },
          { src: 'https://assets.entrepreneur.com/content/3x2/1300/20150714194833-students-college-school-campus.jpeg' },
          { src: 'http://www.trbimg.com/img-5862f2de/turbine/sc-strip-college-grads-gain-10-pounds-health-0104-20161227' },
          { src: 'http://www.autismsocietyofindiana.org/wp-content/uploads/Resources-for-Students-1.png' },
          { src: 'http://static3.businessinsider.com/image/56e06137dd0895d77e8b485d/we-talked-to-a-bunch-of-college-students-and-its-official--theyre-totally-over-yik-yak.jpg' },
          { src: 'https://www.skylinecollege.edu/international/images/internationalForWeb.jpg' }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
