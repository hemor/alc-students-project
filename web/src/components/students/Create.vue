<template>
  <v-container>
    <v-layout row v-if="loading">
      <v-flex xs12 text-xs-center>
        <v-progress-circular indeterminate :size="70" :width="7" color="primary"></v-progress-circular>
      </v-flex>
    </v-layout>
    <div v-else>
      <v-layout row>
        <v-flex xs12 sm8 offset-sm2>
          <v-alert color="primary" icon="info" dismissible v-model="isCreated">
            The student has been created successfully.
          </v-alert>
        </v-flex>
      </v-layout>
      <div v-if="!isCreated">
        <v-layout row>
          <v-flex xs12 sm10 md6 offset-sm1 offset-md3>
            <h4 class="text-xs-center primary--text">Add a Student</h4>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-layout>
                <v-flex xs12 sm10 md6 offset-sm1 offset-md3>
                  <v-text-field
                    label="Firstname"
                    v-model="data.firstname"
                    :rules="rules.firstname"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Lastname"
                    v-model="data.lastname"
                    :rules="rules.lastname"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Address"
                    v-model="data.address"
                    :rules="rules.address"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Email Address"
                    v-model="data.email"
                    :rules="rules.email"
                    type="email"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Phone Number"
                    v-model="data.phonenumber"
                    :rules="rules.phonenumber"
                    type="tel"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Date of Birth"
                    v-model="data.dob"
                    :rules="rules.dob"
                    type="date"
                    required
                  ></v-text-field>
                  <v-select
                    :items="selectItems.gender"
                    v-model="data.gender"
                    :rules="rules.gender"
                    label="Gender"
                    required
                  ></v-select>
                  <v-text-field
                    label="Course"
                    v-model="data.course"
                    :rules="rules.course"
                    required
                  ></v-text-field>
                  <v-select
                    :items="selectItems.level"
                    v-model="data.level"
                    :rules="rules.level"
                    label="Level"
                    required
                  ></v-select>
                  <v-btn @click="clear">Clear</v-btn>
                  <v-btn color="primary" :disabled="!valid" @click="submit">
                    Submit
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
        data: {
          firstname: '',
          lastname: '',
          address: '',
          email: '',
          phonenumber: '',
          dob: '',
          gender: null,
          course: '',
          level: null
        },
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
        isCreated: false,
        loading: false
      }
    },
    created () {
      this.api = axios.create({
        baseURL: 'http://localhost:3000/api/students',
        timeout: 2000
      })
    },
    methods: {
      clear () {
        this.$refs.form.reset()
      },
      submit () {
        if (this.$refs.form.validate()) {
          this.loading = true
          this.api.post('/', this.data)
            .then(response => {
              this.isCreated = response.data.ok
              this.loading = false
            })
        }
      }
    }
  }
</script>

<style scoped>

</style>
