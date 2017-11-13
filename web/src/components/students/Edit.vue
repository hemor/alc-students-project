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
      <v-layout row v-if="isUpdated">
        <v-flex xs12 sm8 offset-sm2>
          <v-alert color="primary" icon="info" dismissible v-model="isUpdated">
            The student has been updated successfully.
          </v-alert>
        </v-flex>
      </v-layout>
      <div v-else>
        <v-layout row>
          <v-flex xs12 sm10 md6 offset-sm1 offset-md3>
            <h4 class="text-xs-center primary--text">Update Student</h4>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-form v-model="valid" ref="form">
              <v-layout>
                <v-flex xs12 sm10 md6 offset-sm1 offset-md3>
                  <v-text-field
                    label="Firstname"
                    v-model="student.firstname"
                    :rules="rules.firstname"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Lastname"
                    v-model="student.lastname"
                    :rules="rules.lastname"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Address"
                    v-model="student.address"
                    :rules="rules.address"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Email Address"
                    v-model="student.email"
                    :rules="rules.email"
                    type="email"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Phone Number"
                    v-model="student.phonenumber"
                    :rules="rules.phonenumber"
                    type="tel"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Date of Birth"
                    v-model="student.dob"
                    :rules="rules.dob"
                    type="date"
                    required
                  ></v-text-field>
                  <v-select
                    :items="selectItems.gender"
                    v-model="student.gender"
                    :rules="rules.gender"
                    label="Gender"
                    required
                  ></v-select>
                  <v-text-field
                    label="Course"
                    v-model="student.course"
                    :rules="rules.course"
                    required
                  ></v-text-field>
                  <v-select
                    :items="selectItems.level"
                    v-model="student.level"
                    :rules="rules.level"
                    label="Level"
                    required
                  ></v-select>
                  <v-btn @click="clear">Clear</v-btn>
                  <v-btn color="primary" :disabled="!valid" @click="submit">
                    Update
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-form>
          </v-flex>
        </v-layout>
      </div>
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
        valid: false,
        selectItems: {
          gender: [
            {
              text: 'Male',
              value: 'm'
            },
            {
              text: 'Female',
              value: 'f'
            }
          ],
          level: [
            {
              text: '100 Level',
              value: 100
            },
            {
              text: '200 Level',
              value: 200
            },
            {
              text: '300 Level',
              value: 300
            },
            {
              text: '400 Level',
              value: 400
            },
            {
              text: '500 Level',
              value: 500
            },
            {
              text: '600 Level',
              value: 600
            }
          ]
        },
        student: null,
        rules: {
          firstname: [
            (v) => !!v || 'Firstname is required'
          ],
          lastname: [
            (v) => !!v || 'Lastname is required'
          ],
          address: [
            (v) => !!v || 'Address is required'
          ],
          email: [
            (v) => !!v || 'Email address is required'
          ],
          phonenumber: [
            (v) => !!v || 'Phone number is required'
          ],
          dob: [
            (v) => !!v || 'Date of birth is required'
          ],
          gender: [
            (v) => !!v || 'Gender is required'
          ],
          course: [
            (v) => !!v || 'Course is required'
          ],
          level: [
            (v) => !!v || 'Level is required'
          ]
        },
        isUpdated: false
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
          this.parseDate()
        })
        .catch(err => {
          if (err) {
            this.student = null
          }
        })
    },
    methods: {
      clear () {
        this.$refs.form.reset()
      },
      submit () {
        if (this.$refs.form.validate()) {
          this.api.patch(`/${this.id}`, this.student)
            .then(response => {
              this.isUpdated = response.data.ok
            })
        }
      },
      parseDate () {
        let d = new Date(this.student.dob)
        this.student.dob = d.toISOString().substring(0, 10)
      }
    }
  }
</script>

<style scoped>

</style>
