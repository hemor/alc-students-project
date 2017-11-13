<template>
  <v-container fluid grid-list-lg text-xs-center>
    <v-layout row v-if="loading">
      <v-flex xs12 text-xs-center>
        <v-progress-circular indeterminate :size="70" :width="7" color="primary"></v-progress-circular>
      </v-flex>
    </v-layout>
    <div v-else>
      <v-layout v-if="!students.length" row>
        <v-flex xs12 sm8 offset-sm2>
          <v-alert color="primary" icon="info" value="true">
            There are no students
          </v-alert>
        </v-flex>
      </v-layout>
      <div v-else>
        <v-snackbar
          top
          right
          v-model="snackbar"
          color="info"
          multi-line
        >
          The student has been successfully deleted.
          <v-btn flat @click="snackbar = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-snackbar>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="student in students" :key="student._id">
            <v-card>
              <v-card-media :src="image[student.gender]" height="250px"></v-card-media>
              <v-card-title>
                <div>
                  <h3 class="headline mb-0">{{ student.firstname }} {{ student.lastname }}</h3>
                  <div>{{ student.course }} | {{ student.level }} Level</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn class="ml-0" color="info" flat :to="{ name: 'ViewStudent', params: { id: student._id }}">
                  <v-icon>visibility</v-icon>
                  <div>
                    &nbsp;
                    View
                  </div>
                </v-btn>
                <v-btn class="ml-0" color="info" flat :to="{ name: 'EditStudent', params: { id: student._id }}">
                  <v-icon>edit</v-icon>
                  <div>
                    &nbsp;
                    Edit
                  </div>
                </v-btn>
                <v-btn class="ml-0" color="error" flat @click="showDeleteModal(student._id)">
                  <v-icon>delete</v-icon>
                  <div>
                    &nbsp;
                    Delete
                  </div>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row justify-center>
          <v-dialog v-model="deleteModal" persistent>
            <v-card>
              <v-card-title class="headline">Delete Student</v-card-title>
              <v-card-text>Are you sure you want to delete {{ selectedStudent.firstname }} {{ selectedStudent.lastname }}?</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="info" flat @click="hideDeleteModal">Cancel</v-btn>
                <v-btn color="error" flat @click="deleteStudent">Delete</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>
      </div>
    </div>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        api: null,
        image: {
          f: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Blank_woman_placeholder.svg/1024px-Blank_woman_placeholder.svg.png',
          m: 'https://homewardboundaz.org/wp-content/uploads/2016/09/person-placeholder.jpg'
        },
        students: [],
        selectedStudent: {},
        deleteModal: false,
        snackbar: false,
        loading: true
      }
    },
    created () {
      this.api = axios.create({
        baseURL: 'http://localhost:3000/api/students',
        timeout: 2000
      })
    },
    mounted () {
      this.api.get('/')
        .then(response => {
          this.students = response.data.data
          this.loading = false
        })
    },
    methods: {
      selectStudent (id) {
        this.selectedStudent = this.students.find(student => student._id === id)
      },
      showDeleteModal (id) {
        this.selectStudent(id)
        this.deleteModal = true
      },
      hideDeleteModal () {
        this.deleteModal = false
        this.selectedStudent = {}
      },
      deleteStudent () {
        let id = this.selectedStudent._id
        this.loading = true
        this.api.delete(`/${id}`)
          .then(response => {
            if (response.data.ok) {
              this.students.find((student, i) => {
                if (student._id === id) {
                  this.snackbar = true
                  this.hideDeleteModal()
                  this.students.splice(i, 1)
                  this.loading = false
                }
              })
            }
          })
      }
    }
  }
</script>

<style scoped>

</style>
