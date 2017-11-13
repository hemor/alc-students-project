<template>
  <v-container>
    <v-layout v-if="!student" row>
      <v-flex xs12 sm8 offset-sm2>
        <v-alert color="error" icon="info" value="true">
          Invalid student id
        </v-alert>
      </v-flex>
    </v-layout>
    <div v-else>
      <v-layout row>
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
          <v-card>
            <v-card-media :src="image[student.gender]" height="350px"></v-card-media>
            <v-card-title>
              <div>
                <h3 class="headline mb-0">{{ student.firstname }} {{ student.lastname }}</h3>
                <div>{{ student.course }} | {{ student.level }} Level</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn class="ml-0" color="info" flat :to="{ name: 'EditStudent', params: { id: student._id }}">
                <v-icon>edit</v-icon>
                <div>
                  &nbsp;
                  Edit
                </div>
              </v-btn>
              <v-btn class="ml-0" color="error" flat @click="deleteModal = true">
                <v-icon>delete</v-icon>
                <div>
                  &nbsp;
                  Delete
                </div>
              </v-btn>
            </v-card-actions>
          </v-card>
          <table class="ui celled table">
            <tr>
              <td>Firstname</td>
              <td>{{ student.firstname }}</td>
            </tr>
            <tr>
              <td>Lastname</td>
              <td>{{ student.lastname }}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{{ student.address }}</td>
            </tr>
            <tr>
              <td>Email Address</td>
              <td>{{ student.email }}</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>{{ student.phonenumber }}</td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td>{{ parseDate(student.dob) }}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{{ gender[student.gender] }}</td>
            </tr>
            <tr>
              <td>Course of Study</td>
              <td>{{ student.course }}</td>
            </tr>
            <tr>
              <td>Level</td>
              <td>{{ student.level }} Level</td>
            </tr>
          </table>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-dialog v-model="deleteModal" persistent>
          <v-card>
            <v-card-title class="headline">Delete Student</v-card-title>
            <v-card-text>Are you sure you want to delete {{ student.firstname }} {{ student.lastname }}?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="info" flat @click="deleteModal = false">Cancel</v-btn>
              <v-btn color="error" flat @click="deleteStudent">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    props: ['id'],
    data () {
      return {
        api: null,
        image: {
          f: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Blank_woman_placeholder.svg/1024px-Blank_woman_placeholder.svg.png',
          m: 'https://homewardboundaz.org/wp-content/uploads/2016/09/person-placeholder.jpg'
        },
        student: null,
        gender: {
          m: 'Male',
          f: 'Female'
        },
        deleteModal: false
      }
    },
    created () {
      this.api = axios.create({
        baseURL: 'http://localhost:3000/api/students',
        timeout: 2000
      })
    },
    mounted () {
      this.api.get(`/${this.id}`)
        .then(response => {
          this.student = response.data.data
        })
        .catch(err => {
          if (err) {
            this.student = null
          }
        })
    },
    methods: {
      parseDate (date) {
        let d = new Date(date)
        return d.toDateString()
      },
      deleteStudent () {
        this.api.delete(`/${this.student._id}`)
          .then(response => {
            if (response.data.ok) {
              this.$router.push({ name: 'ViewStudents' })
            }
          })
      }
    }
  }
</script>

<style scoped>
  .table td {
    padding: 10px;
    font-size: 16px;
  }
</style>
