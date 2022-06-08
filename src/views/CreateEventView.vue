<template>
  <div class="createEvent py-4">
    <div class="container w-11/12 sm:w-full mx-auto">
     <form class="mx-auto w-full sm:w-4/12" @submit="onSubmit">
                <div class="mb-6">
                    <label for="eName" class="block text-left mb-2 text-sm font-medium">Event Name</label>
                    <input type="text" v-model="eventObj.name" id="eName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 " placeholder="Event Name" required>
                </div>
                <div class="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="">
                    <label for="startDate" class="block text-left mb-2 text-sm font-medium">Start Date</label>
                    <input type="date" v-model="eventObj.startDate"  id="startDate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5" required>

                  </div>
                  <div class="">
                    <label for="endDate" class="block text-left mb-2 text-sm font-medium">End Date</label>
                    <input type="date" v-model="eventObj.endDate" id="endDate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5" required>

                  </div>
                </div>
                <div class="mb-6">
                  <label for="eDesc" class="block text-left mb-2 text-sm font-medium">Event Description</label>
                  <textarea id="eDesc" v-model="eventObj.description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 " placeholder="Event Description" required></textarea>
                </div>
                <span class="block text-left mb-2 text-sm font-medium">Event Image</span>
                <div class="flex justify-center items-center w-full mb-6">
                    <label
                    v-show="!preview.length"
                    for="dropzone-file"
                    class="dragZone flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointerhover:bg-gray-100"
                    @dragenter="onDragEnter"
                    @dragleave="onDragLeave"
                    @dragover.prevent
                    @drop="onDrop"
                    :class="{dragging: isDragging}"
                    >
                      <div class="flex flex-col justify-center items-center pt-5 pb-6">
                          <svg class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                          <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>

                      <input id="dropzone-file" @change="onImageInput" accept="image/*" type="file" class="hidden" />
                    </label>
                    <div v-show="preview.length" class="flex flex-col justify-center items-center pt-5 pb-6">
                        <span class="self-start text-sm text-red-700 cursor-pointer" @click="resetImage">Delete Image</span>
                        <img class="fit" :src="preview[0]" alt="">
                                          {{eventObj.image.name}}

                      </div>
                  </div>
                <button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/20 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
            </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CreateEventView',
  components: {

  },
  data () {
    return {
      dragCount: 0,
      isDragging: false,
      eventObj: {
        name: '',
        description: '',
        image: [],
        startDate: '',
        endDate: ''
      },
      preview: []
    }
  },
  methods: {
    ...mapActions({
      createEvent: 'event/createEvent'
    }),
    onSubmit (e) {
      e.preventDefault()

      const formdata = new FormData()
      formdata.append('name', this.eventObj.name)
      formdata.append('description', this.eventObj.description)
      formdata.append('image', this.eventObj.image, this.eventObj.image.name)
      formdata.append('startDate', new Date(this.eventObj.startDate).getTime() / 1000)
      formdata.append('endDate', new Date(this.eventObj.endDate).getTime() / 1000)

      this.createEvent(formdata)
    },
    resetImage () {
      this.preview = []
      this.eventObj.image = []
    },
    onDragEnter (e) {
      e.preventDefault()
      this.dragCount++
      this.isDragging = true
    },
    onDragLeave (e) {
      e.preventDefault()
      this.dragCount--
      if (this.dragCount <= 0) {
        this.isDragging = false
      }
    },
    onDrop (e) {
      e.preventDefault()
      e.stopPropagation()

      this.isDragging = false

      const file = e.dataTransfer.files[0]
      this.addImage(file)
    },
    addImage (file) {
      if (!file.type.match('image.*')) {
        console.log(`${file.name} is not an Image`)
        return
      }
      this.resetImage()
      this.eventObj.image = file

      const reader = new FileReader()

      reader.onload = (e) => this.preview.push(e.target.result)
      reader.readAsDataURL(file)
    },
    onImageInput (e) {
      e.preventDefault()
      e.stopPropagation()

      this.isDragging = false
      const file = e.target.files[0]
      this.addImage(file)
    }
  }
}
</script>
<style lang="scss">
.dragZone{

  &.dragging{
    background-color: lightgray;
  }
}
</style>
