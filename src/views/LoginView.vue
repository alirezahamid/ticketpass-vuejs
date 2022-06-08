<template>
  <div class="login h-screen flex justify-center items-center">
      <div class="container w-11/12 sm:w-full mx-auto">
        <div class="inner_container mx-auto flex flex-col justify-center items-center w-full sm:w-2/5">

            <router-link to="/" class="w-3/6 pb-8 flex flex-col">
                <span class="self-start"> {{"<"}} Home</span>
                <img alt="TicketPass logo" src="@/assets/logo.svg" />
            </router-link>
            <form class="mx-auto w-full sm:w-1/2" v-on:submit.prevent="onLogin">
                <div class="mb-6">
                    <input v-model="credentials.username" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 " placeholder="name@flowbite.com" required>
                </div>
                <div class="mb-6">
                    <input v-model="credentials.password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5" placeholder="Your Password" required>
                </div>

                <button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/20 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login</button>
            </form>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'LoginView',
  components: {
  },
  data () {
    return {
      credentials: {
        username: 'test@ticketpass.org',
        password: 'Ticketpass2022'
      }
    }
  },
  computed: {
    ...mapGetters({
      error: 'auth/errorData'
    })
  },
  methods: {
    ...mapActions({
      login: 'auth/callLogin'
    }),

    onLogin () {
      this.login(this.credentials)
      if (this.error.raiseError) {
        console.log(this.error.blueprint)
      }
    }
  }
}
</script>
