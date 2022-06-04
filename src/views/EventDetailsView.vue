<template>
  <div class="eventDetails py-4 ">
     {{$route.params.id}}
    <img class="object-fill mx-auto mb-4" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
    <div class="container mx-auto w-11/12 sm:w-6/12 md:5/12">
      <h1 class="text-4xl text-left font-bold mb-8">Event Name</h1>
      <h2 class="text-lg text-left font-semibold italic mb-2">Start Date - End Date</h2>
      <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quod consequuntur, animi eligendi deleniti eveniet sed! Quidem eos esse facere in sapiente, debitis natus inventore! Recusandae iste architecto rem amet!</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'EventDetailsView',
  components: {

  },
  data () {
    return {
    }
  }
}
</script>
