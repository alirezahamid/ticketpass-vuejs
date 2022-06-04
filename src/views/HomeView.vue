<template>
  <div class="home py-4">
    <div class="container w-11/12 sm:w-full mx-auto">
      <div class="home__items grid sm:grid-cols-2 md:grid-cols-4 gap-4" >
        <div v-for="(event,index) in events" :key='index' class="home__item max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
          <a href="#">
              <img class="rounded-t-lg" :src="event.image" :alt="event.name" />
          </a>
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Event Name {{event.name}}</h5>
              </a>
              <p class="mb-3 font-normal w-9/12 text-gray-700 mx-auto">
                {{ FormatedDate(event.startDate)}} - {{ FormatedDate(event.endDate)}}
              </p>
              <router-link :to="`/event/${event.id}`">
                <span class="inline-flex items-center py-2 px-3 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/20 font-medium rounded-lg text-sm text-center mr-2 mb-2">
                  View
              </span>
              </router-link>

          </div>
        </div>

     </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'HomeView',
  components: {

  },
  data () {
    return {
    }
  },

  computed: {
    ...mapGetters({
      events: 'event/eventsData'
    })

  },
  methods: {
    ...mapActions({
      getEvents: 'event/getEvents'
    }),
    FormatedDate (date) {
      return moment(date).format('DD/MM/YYYY, h:mm a')
    }
  },
  created () {
    this.getEvents(1)
    console.log('created')
  }
}
</script>
