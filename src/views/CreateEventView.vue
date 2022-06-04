<template>
  <div class="createEvent py-4">
    <div class="container w-11/12 sm:w-full mx-auto">
     <form class="mx-auto w-full sm:w-4/12">
                <div class="mb-6">
                    <label for="eName" class="block text-left mb-2 text-sm font-medium">Event Name</label>
                    <input type="text" id="eName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 " placeholder="Event Name" required>
                </div>
                <div class="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="">
                    <label for="startDate" class="block text-left mb-2 text-sm font-medium">Start Date</label>
                    <input type="date" id="startDate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5" required>

                  </div>
                  <div class="">
                    <label for="endDate" class="block text-left mb-2 text-sm font-medium">End Date</label>
                    <input type="date" id="endDate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5" required>

                  </div>
                </div>
                <div class="mb-6">
                  <label for="eDesc" class="block text-left mb-2 text-sm font-medium">Event Description</label>
                  <textarea id="eDesc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 " placeholder="Event Description" required></textarea>
                </div>
                <span class="block text-left mb-2 text-sm font-medium">Event Image</span>
                <div class="flex justify-center items-center w-full mb-6">
                    <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer   hover:bg-gray-100">
                      <div class="flex flex-col justify-center items-center pt-5 pb-6">
                          <svg class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                          <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                  </div>

                <button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/20 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
            </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateEventView',
  components: {

  },
  data () {
    return {
    }
  }
}
</script>
