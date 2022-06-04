<template>
  <div class="shadow-sm shadow-green-500/50">
    <div class="container mx-auto">
      <div class="header p-4 flex flex-col items-center justify-between sm:flex-row">
        <div class="header__logo w-48 mb-4 sm:mb-0">
          <router-link to="/">
            <img alt="Vue logo" src="@/assets/logo.svg" />
          </router-link>
        </div>
        <div class="header__actions">
          <router-link to="/create-event">
            <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/20 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Create Event</button>
          </router-link>

          <router-link to="/login">
            <button  type="button" class="text-green-400 hover:text-white border border-green-400 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Login
          </button>
          </router-link>

        </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    msg: String
  }
}
</script>
