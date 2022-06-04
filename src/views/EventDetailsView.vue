<template>
  <div class="eventDetails py-4 ">
     <!-- {{$route.params.id}} -->
    <img class="object-fill mx-auto mb-4" :src="event.image" alt="" />
    <div class="container mx-auto w-11/12 sm:w-6/12 md:5/12">
      <h1 class="text-4xl text-left font-bold mb-8">{{event.name}}</h1>
      <h2 class="text-lg text-left font-semibold italic mb-2">
        {{ FormatedDate(event.startDate)}} - {{ FormatedDate(event.endDate)}}
      </h2>
      <p class="text-justify">{{event.description}}</p>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'EventDetailsView',
  components: {

  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      event: 'event/eventData'
    })
  },
  methods: {
    ...mapActions({
      getEvent: 'event/getSingleEvent'
    }),
    FormatedDate (date) {
      return moment(date).format('DD/MM/YYYY, h:mm a')
    }
  },
  created () {
    this.getEvent(this.$route.params.id)
    console.log('created')
  }
}
</script>
