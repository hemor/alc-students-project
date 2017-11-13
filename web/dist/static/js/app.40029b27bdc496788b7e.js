webpackJsonp([1],{"/KOY":function(e,t){},"2LFg":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[e.loading?a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"","text-xs-center":""}},[a("v-progress-circular",{attrs:{indeterminate:"",size:70,width:7,color:"primary"}})],1)],1):a("div",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-alert",{attrs:{color:"primary",icon:"info",dismissible:""},model:{value:e.isCreated,callback:function(t){e.isCreated=t},expression:"isCreated"}},[e._v("\n          The student has been created successfully.\n        ")])],1)],1),e._v(" "),e.isCreated?e._e():a("div",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm10:"",md6:"","offset-sm1":"","offset-md3":""}},[a("h4",{staticClass:"text-xs-center primary--text"},[e._v("Add a Student")])])],1),e._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-layout",[a("v-flex",{attrs:{xs12:"",sm10:"",md6:"","offset-sm1":"","offset-md3":""}},[a("v-text-field",{attrs:{label:"Firstname",rules:e.rules.firstname,required:""},model:{value:e.data.firstname,callback:function(t){e.$set(e.data,"firstname",t)},expression:"data.firstname"}}),e._v(" "),a("v-text-field",{attrs:{label:"Lastname",rules:e.rules.lastname,required:""},model:{value:e.data.lastname,callback:function(t){e.$set(e.data,"lastname",t)},expression:"data.lastname"}}),e._v(" "),a("v-text-field",{attrs:{label:"Address",rules:e.rules.address,required:""},model:{value:e.data.address,callback:function(t){e.$set(e.data,"address",t)},expression:"data.address"}}),e._v(" "),a("v-text-field",{attrs:{label:"Email Address",rules:e.rules.email,type:"email",required:""},model:{value:e.data.email,callback:function(t){e.$set(e.data,"email",t)},expression:"data.email"}}),e._v(" "),a("v-text-field",{attrs:{label:"Phone Number",rules:e.rules.phonenumber,type:"tel",required:""},model:{value:e.data.phonenumber,callback:function(t){e.$set(e.data,"phonenumber",t)},expression:"data.phonenumber"}}),e._v(" "),a("v-text-field",{attrs:{label:"Date of Birth",rules:e.rules.dob,type:"date",required:""},model:{value:e.data.dob,callback:function(t){e.$set(e.data,"dob",t)},expression:"data.dob"}}),e._v(" "),a("v-select",{attrs:{items:e.selectItems.gender,rules:e.rules.gender,label:"Gender",required:""},model:{value:e.data.gender,callback:function(t){e.$set(e.data,"gender",t)},expression:"data.gender"}}),e._v(" "),a("v-text-field",{attrs:{label:"Course",rules:e.rules.course,required:""},model:{value:e.data.course,callback:function(t){e.$set(e.data,"course",t)},expression:"data.course"}}),e._v(" "),a("v-select",{attrs:{items:e.selectItems.level,rules:e.rules.level,label:"Level",required:""},model:{value:e.data.level,callback:function(t){e.$set(e.data,"level",t)},expression:"data.level"}}),e._v(" "),a("v-btn",{on:{click:e.clear}},[e._v("Clear")]),e._v(" "),a("v-btn",{attrs:{color:"primary",disabled:!e.valid},on:{click:e.submit}},[e._v("\n                  Submit\n                ")])],1)],1)],1)],1)],1)],1)],1)],1)},n=[],r={render:s,staticRenderFns:n};t.a=r},"768y":function(e,t,a){"use strict";var s=a("mtWM"),n=a.n(s);t.a={data:function(){return{api:null,image:{f:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Blank_woman_placeholder.svg/1024px-Blank_woman_placeholder.svg.png",m:"https://homewardboundaz.org/wp-content/uploads/2016/09/person-placeholder.jpg"},students:[],selectedStudent:{},deleteModal:!1,snackbar:!1,loading:!0}},created:function(){this.api=n.a.create({baseURL:"/api/students",timeout:2e3})},mounted:function(){var e=this;this.api.get("/").then(function(t){e.students=t.data.data,e.loading=!1})},methods:{selectStudent:function(e){this.selectedStudent=this.students.find(function(t){return t._id===e})},showDeleteModal:function(e){this.selectStudent(e),this.deleteModal=!0},hideDeleteModal:function(){this.deleteModal=!1,this.selectedStudent={}},deleteStudent:function(){var e=this,t=this.selectedStudent._id;this.loading=!0,this.api.delete("/"+t).then(function(a){a.data.ok&&e.students.find(function(a,s){a._id===t&&(e.snackbar=!0,e.hideDeleteModal(),e.students.splice(s,1),e.loading=!1)})})}}}},"8Ab0":function(e,t,a){"use strict";function s(e){a("sZW0")}var n=a("MJog"),r=a("2LFg"),i=a("VU/8"),l=s,d=i(n.a,r.a,!1,l,"data-v-7e9aae48",null);t.a=d.exports},Fs8J:function(e,t,a){"use strict";t.a={data:function(){return{carouselImages:[{src:"https://s-i.huffpost.com/gen/1956165/images/o-SMILING-STUDENTS-facebook.jpg"},{src:"http://thecampussocialite.com/wp-content/uploads/college-hobby-1.jpg"},{src:"https://steinhardt.nyu.edu/site/ataglance/files/2016/03/Collegestudents.jpg"},{src:"http://media.beam.usnews.com/69/42/5e01ed8c40a9a2f4c56e312bc5e0/150814-pfccollegestudents-stock.jpg"},{src:"http://www.youthconnect.in/wp-content/uploads/2014/07/college-students-awesome.jpg"},{src:"https://assets.entrepreneur.com/content/3x2/1300/20150714194833-students-college-school-campus.jpeg"},{src:"http://www.trbimg.com/img-5862f2de/turbine/sc-strip-college-grads-gain-10-pounds-health-0104-20161227"},{src:"http://www.autismsocietyofindiana.org/wp-content/uploads/Resources-for-Students-1.png"},{src:"http://static3.businessinsider.com/image/56e06137dd0895d77e8b485d/we-talked-to-a-bunch-of-college-students-and-its-official--theyre-totally-over-yik-yak.jpg"},{src:"https://www.skylinecollege.edu/international/images/internationalForWeb.jpg"}]}}}},IDBn:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:"","grid-list-lg":"","text-xs-center":""}},[e.loading?a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"","text-xs-center":""}},[a("v-progress-circular",{attrs:{indeterminate:"",size:70,width:7,color:"primary"}})],1)],1):a("div",[e.students.length?a("div",[a("v-snackbar",{attrs:{top:"",right:"",color:"info","multi-line":""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n        The student has been successfully deleted.\n        "),a("v-btn",{attrs:{flat:""},on:{click:function(t){e.snackbar=!1}}},[a("v-icon",[e._v("close")])],1)],1),e._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},e._l(e.students,function(t){return a("v-flex",{key:t._id,attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[a("v-card",[a("v-card-media",{attrs:{src:e.image[t.gender],height:"250px"}}),e._v(" "),a("v-card-title",[a("div",[a("h3",{staticClass:"headline mb-0"},[e._v(e._s(t.firstname)+" "+e._s(t.lastname))]),e._v(" "),a("div",[e._v(e._s(t.course)+" | "+e._s(t.level)+" Level")])])]),e._v(" "),a("v-card-actions",[a("v-btn",{staticClass:"ml-0",attrs:{color:"info",flat:"",to:{name:"ViewStudent",params:{id:t._id}}}},[a("v-icon",[e._v("visibility")]),e._v(" "),a("div",[e._v("\n                   \n                  View\n                ")])],1),e._v(" "),a("v-btn",{staticClass:"ml-0",attrs:{color:"info",flat:"",to:{name:"EditStudent",params:{id:t._id}}}},[a("v-icon",[e._v("edit")]),e._v(" "),a("div",[e._v("\n                   \n                  Edit\n                ")])],1),e._v(" "),a("v-btn",{staticClass:"ml-0",attrs:{color:"error",flat:""},on:{click:function(a){e.showDeleteModal(t._id)}}},[a("v-icon",[e._v("delete")]),e._v(" "),a("div",[e._v("\n                   \n                  Delete\n                ")])],1)],1)],1)],1)})),e._v(" "),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:""},model:{value:e.deleteModal,callback:function(t){e.deleteModal=t},expression:"deleteModal"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Delete Student")]),e._v(" "),a("v-card-text",[e._v("Are you sure you want to delete "+e._s(e.selectedStudent.firstname)+" "+e._s(e.selectedStudent.lastname)+"?")]),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"info",flat:""},on:{click:e.hideDeleteModal}},[e._v("Cancel")]),e._v(" "),a("v-btn",{attrs:{color:"error",flat:""},on:{click:e.deleteStudent}},[e._v("Delete")])],1)],1)],1)],1)],1):a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-alert",{attrs:{color:"primary",icon:"info",value:"true"}},[e._v("\n          There are no students\n        ")])],1)],1)],1)],1)},n=[],r={render:s,staticRenderFns:n};t.a=r},LYI0:function(e,t,a){"use strict";function s(e){a("/KOY")}var n=a("PJeJ"),r=a("WeA8"),i=a("VU/8"),l=s,d=i(n.a,r.a,!1,l,"data-v-1d64fae3",null);t.a=d.exports},M93x:function(e,t,a){"use strict";function s(e){a("Yu6i")}var n=a("xJD8"),r=a("tEfx"),i=a("VU/8"),l=s,d=i(n.a,r.a,!1,l,"data-v-5914b53a",null);t.a=d.exports},MJog:function(e,t,a){"use strict";var s=a("mtWM"),n=a.n(s);t.a={data:function(){return{api:null,valid:!1,selectItems:{gender:[{text:"Male",value:"m"},{text:"Female",value:"f"}],level:[{text:"100 Level",value:100},{text:"200 Level",value:200},{text:"300 Level",value:300},{text:"400 Level",value:400},{text:"500 Level",value:500},{text:"600 Level",value:600}]},data:{firstname:"",lastname:"",address:"",email:"",phonenumber:"",dob:"",gender:null,course:"",level:null},rules:{firstname:[function(e){return!!e||"Firstname is required"}],lastname:[function(e){return!!e||"Lastname is required"}],address:[function(e){return!!e||"Address is required"}],email:[function(e){return!!e||"Email address is required"}],phonenumber:[function(e){return!!e||"Phone number is required"}],dob:[function(e){return!!e||"Date of birth is required"}],gender:[function(e){return!!e||"Gender is required"}],course:[function(e){return!!e||"Course is required"}],level:[function(e){return!!e||"Level is required"}]},isCreated:!1,loading:!1}},created:function(){this.api=n.a.create({baseURL:"/api/students",timeout:2e3})},methods:{clear:function(){this.$refs.form.reset()},submit:function(){var e=this;this.$refs.form.validate()&&(this.loading=!0,this.api.post("/",this.data).then(function(t){e.isCreated=t.data.ok,e.loading=!1}))}}}},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("/5sW"),n=a("3EgV"),r=a.n(n),i=a("tLfa"),l=(a.n(i),a("M93x")),d=a("YaEn");s.a.use(r.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:d.a,render:function(e){return e(l.a)}})},PJeJ:function(e,t,a){"use strict";var s=a("mtWM"),n=a.n(s);t.a={props:["id"],data:function(){return{api:null,image:{f:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Blank_woman_placeholder.svg/1024px-Blank_woman_placeholder.svg.png",m:"https://homewardboundaz.org/wp-content/uploads/2016/09/person-placeholder.jpg"},student:null,gender:{m:"Male",f:"Female"},deleteModal:!1,loading:!0}},created:function(){this.api=n.a.create({baseURL:"/api/students",timeout:2e3})},mounted:function(){var e=this;this.api.get("/"+this.id).then(function(t){e.student=t.data.data,e.loading=!1}).catch(function(t){t&&(e.student=null,e.loading=!1)})},methods:{parseDate:function(e){return new Date(e).toDateString()},deleteStudent:function(){var e=this;this.loading=!0,this.api.delete("/"+this.student._id).then(function(t){t.data.ok&&e.$router.push({name:"ViewStudents"})})}}}},So2q:function(e,t){},Szdj:function(e,t){},WSvU:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[e.loading?a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"","text-xs-center":""}},[a("v-progress-circular",{attrs:{indeterminate:"",size:70,width:7,color:"primary"}})],1)],1):a("div",[e.student?a("div",[e.isUpdated?a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-alert",{attrs:{color:"primary",icon:"info",dismissible:""},model:{value:e.isUpdated,callback:function(t){e.isUpdated=t},expression:"isUpdated"}},[e._v("\n            The student has been updated successfully.\n          ")])],1)],1):a("div",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm10:"",md6:"","offset-sm1":"","offset-md3":""}},[a("h4",{staticClass:"text-xs-center primary--text"},[e._v("Update Student")])])],1),e._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-layout",[a("v-flex",{attrs:{xs12:"",sm10:"",md6:"","offset-sm1":"","offset-md3":""}},[a("v-text-field",{attrs:{label:"Firstname",rules:e.rules.firstname,required:""},model:{value:e.student.firstname,callback:function(t){e.$set(e.student,"firstname",t)},expression:"student.firstname"}}),e._v(" "),a("v-text-field",{attrs:{label:"Lastname",rules:e.rules.lastname,required:""},model:{value:e.student.lastname,callback:function(t){e.$set(e.student,"lastname",t)},expression:"student.lastname"}}),e._v(" "),a("v-text-field",{attrs:{label:"Address",rules:e.rules.address,required:""},model:{value:e.student.address,callback:function(t){e.$set(e.student,"address",t)},expression:"student.address"}}),e._v(" "),a("v-text-field",{attrs:{label:"Email Address",rules:e.rules.email,type:"email",required:""},model:{value:e.student.email,callback:function(t){e.$set(e.student,"email",t)},expression:"student.email"}}),e._v(" "),a("v-text-field",{attrs:{label:"Phone Number",rules:e.rules.phonenumber,type:"tel",required:""},model:{value:e.student.phonenumber,callback:function(t){e.$set(e.student,"phonenumber",t)},expression:"student.phonenumber"}}),e._v(" "),a("v-text-field",{attrs:{label:"Date of Birth",rules:e.rules.dob,type:"date",required:""},model:{value:e.student.dob,callback:function(t){e.$set(e.student,"dob",t)},expression:"student.dob"}}),e._v(" "),a("v-select",{attrs:{items:e.selectItems.gender,rules:e.rules.gender,label:"Gender",required:""},model:{value:e.student.gender,callback:function(t){e.$set(e.student,"gender",t)},expression:"student.gender"}}),e._v(" "),a("v-text-field",{attrs:{label:"Course",rules:e.rules.course,required:""},model:{value:e.student.course,callback:function(t){e.$set(e.student,"course",t)},expression:"student.course"}}),e._v(" "),a("v-select",{attrs:{items:e.selectItems.level,rules:e.rules.level,label:"Level",required:""},model:{value:e.student.level,callback:function(t){e.$set(e.student,"level",t)},expression:"student.level"}}),e._v(" "),a("v-btn",{on:{click:e.clear}},[e._v("Clear")]),e._v(" "),a("v-btn",{attrs:{color:"primary",disabled:!e.valid},on:{click:e.submit}},[e._v("\n                    Update\n                  ")])],1)],1)],1)],1)],1)],1)],1):a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-alert",{attrs:{color:"error",icon:"info",value:"true"}},[e._v("\n          Invalid student id\n        ")])],1)],1)],1)],1)},n=[],r={render:s,staticRenderFns:n};t.a=r},WeA8:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[e.loading?a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"","text-xs-center":""}},[a("v-progress-circular",{attrs:{indeterminate:"",size:70,width:7,color:"primary"}})],1)],1):a("div",[e.student?a("div",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm10:"",md8:"","offset-sm1":"","offset-md2":""}},[a("v-card",[a("v-card-media",{attrs:{src:e.image[e.student.gender],height:"350px"}}),e._v(" "),a("v-card-title",[a("div",[a("h3",{staticClass:"headline mb-0"},[e._v(e._s(e.student.firstname)+" "+e._s(e.student.lastname))]),e._v(" "),a("div",[e._v(e._s(e.student.course)+" | "+e._s(e.student.level)+" Level")])])]),e._v(" "),a("v-card-actions",[a("v-btn",{staticClass:"ml-0",attrs:{color:"info",flat:"",to:{name:"EditStudent",params:{id:e.student._id}}}},[a("v-icon",[e._v("edit")]),e._v(" "),a("div",[e._v("\n                   \n                  Edit\n                ")])],1),e._v(" "),a("v-btn",{staticClass:"ml-0",attrs:{color:"error",flat:""},on:{click:function(t){e.deleteModal=!0}}},[a("v-icon",[e._v("delete")]),e._v(" "),a("div",[e._v("\n                   \n                  Delete\n                ")])],1)],1)],1),e._v(" "),a("table",{staticClass:"ui celled table"},[a("tr",[a("td",[e._v("Firstname")]),e._v(" "),a("td",[e._v(e._s(e.student.firstname))])]),e._v(" "),a("tr",[a("td",[e._v("Lastname")]),e._v(" "),a("td",[e._v(e._s(e.student.lastname))])]),e._v(" "),a("tr",[a("td",[e._v("Address")]),e._v(" "),a("td",[e._v(e._s(e.student.address))])]),e._v(" "),a("tr",[a("td",[e._v("Email Address")]),e._v(" "),a("td",[e._v(e._s(e.student.email))])]),e._v(" "),a("tr",[a("td",[e._v("Phone Number")]),e._v(" "),a("td",[e._v(e._s(e.student.phonenumber))])]),e._v(" "),a("tr",[a("td",[e._v("Date of Birth")]),e._v(" "),a("td",[e._v(e._s(e.parseDate(e.student.dob)))])]),e._v(" "),a("tr",[a("td",[e._v("Gender")]),e._v(" "),a("td",[e._v(e._s(e.gender[e.student.gender]))])]),e._v(" "),a("tr",[a("td",[e._v("Course of Study")]),e._v(" "),a("td",[e._v(e._s(e.student.course))])]),e._v(" "),a("tr",[a("td",[e._v("Level")]),e._v(" "),a("td",[e._v(e._s(e.student.level)+" Level")])])])],1)],1),e._v(" "),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:""},model:{value:e.deleteModal,callback:function(t){e.deleteModal=t},expression:"deleteModal"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Delete Student")]),e._v(" "),a("v-card-text",[e._v("Are you sure you want to delete "+e._s(e.student.firstname)+" "+e._s(e.student.lastname)+"?")]),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"info",flat:""},on:{click:function(t){e.deleteModal=!1}}},[e._v("Cancel")]),e._v(" "),a("v-btn",{attrs:{color:"error",flat:""},on:{click:e.deleteStudent}},[e._v("Delete")])],1)],1)],1)],1)],1):a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[a("v-alert",{attrs:{color:"error",icon:"info",value:"true"}},[e._v("\n          Invalid student id\n        ")])],1)],1)],1)],1)},n=[],r={render:s,staticRenderFns:n};t.a=r},YaEn:function(e,t,a){"use strict";var s=a("/5sW"),n=a("/ocq"),r=a("lO7g"),i=a("hyI7"),l=a("8Ab0"),d=a("LYI0"),o=a("ntjD");s.a.use(n.a),t.a=new n.a({routes:[{path:"/",name:"Home",component:r.a},{path:"/students",name:"ViewStudents",component:i.a},{path:"/students/add",name:"CreateStudent",component:l.a},{path:"/students/:id",name:"ViewStudent",component:d.a,props:!0},{path:"/students/:id/edit",name:"EditStudent",component:o.a,props:!0}],mode:"history"})},Yu6i:function(e,t){},hyI7:function(e,t,a){"use strict";function s(e){a("Szdj")}var n=a("768y"),r=a("IDBn"),i=a("VU/8"),l=s,d=i(n.a,r.a,!1,l,"data-v-7c532fea",null);t.a=d.exports},iOCV:function(e,t){},lO7g:function(e,t,a){"use strict";function s(e){a("iOCV")}var n=a("Fs8J"),r=a("nZVa"),i=a("VU/8"),l=s,d=i(n.a,r.a,!1,l,"data-v-f1a76b36",null);t.a=d.exports},mFYn:function(e,t,a){"use strict";var s=a("mtWM"),n=a.n(s);t.a={props:["id"],data:function(){return{api:null,valid:!1,selectItems:{gender:[{text:"Male",value:"m"},{text:"Female",value:"f"}],level:[{text:"100 Level",value:100},{text:"200 Level",value:200},{text:"300 Level",value:300},{text:"400 Level",value:400},{text:"500 Level",value:500},{text:"600 Level",value:600}]},student:null,rules:{firstname:[function(e){return!!e||"Firstname is required"}],lastname:[function(e){return!!e||"Lastname is required"}],address:[function(e){return!!e||"Address is required"}],email:[function(e){return!!e||"Email address is required"}],phonenumber:[function(e){return!!e||"Phone number is required"}],dob:[function(e){return!!e||"Date of birth is required"}],gender:[function(e){return!!e||"Gender is required"}],course:[function(e){return!!e||"Course is required"}],level:[function(e){return!!e||"Level is required"}]},isUpdated:!1,loading:!1}},created:function(){this.api=n.a.create({baseURL:"/api/students",timeout:2e3})},mounted:function(){var e=this;this.api.get("/"+this.id).then(function(t){e.student=t.data.data,e.parseDate()}).catch(function(t){t&&(e.student=null)})},methods:{clear:function(){this.$refs.form.reset()},submit:function(){var e=this;this.$refs.form.validate()&&(this.loading=!0,this.api.patch("/"+this.id,this.student).then(function(t){e.isUpdated=t.data.ok,e.loading=!1}))},parseDate:function(){var e=new Date(this.student.dob);this.student.dob=e.toISOString().substring(0,10)}}}},nZVa:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"pa-0 ma-0",attrs:{fluid:""}},[a("v-layout",{attrs:{row:""}},[a("v-carousel",e._l(e.carouselImages,function(e,t){return a("v-carousel-item",{key:t,attrs:{src:e.src}})}))],1),e._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("h4",{staticClass:"text-xs-center"},[e._v("Welcome To ALC Student Project")])])],1)],1)},n=[],r={render:s,staticRenderFns:n};t.a=r},ntjD:function(e,t,a){"use strict";function s(e){a("So2q")}var n=a("mFYn"),r=a("WSvU"),i=a("VU/8"),l=s,d=i(n.a,r.a,!1,l,"data-v-ca20d49c",null);t.a=d.exports},sZW0:function(e,t){},tEfx:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-navigation-drawer",{attrs:{temporary:""},model:{value:e.mobileNav,callback:function(t){e.mobileNav=t},expression:"mobileNav"}},[a("v-list",e._l(e.menuItems,function(t,s){return a("v-list-tile",{key:s,attrs:{to:{name:t.route},exact:""}},[a("v-list-tile-action",[a("v-icon",[e._v(e._s(t.icon))])],1),e._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[e._v(e._s(t.title))])],1)],1)}))],1),e._v(" "),a("v-toolbar",{attrs:{dense:"",dark:"",fixed:"",color:"primary"}},[a("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(t){t.stopPropagation(),e.mobileNav=!e.mobileNav}}}),e._v(" "),a("v-toolbar-title",[a("router-link",{attrs:{to:{name:"Home"},tag:"span"}},[e._v("ALC Students Project")])],1),e._v(" "),a("v-spacer"),e._v(" "),a("v-toolbar-items",{staticClass:"hidden-xs-only"},e._l(e.menuItems,function(t,s){return a("v-btn",{key:s,attrs:{flat:"",to:{name:t.route},exact:""}},[a("v-icon",[e._v(e._s(t.icon))]),e._v("\n         \n        "+e._s(t.title)+"\n      ")],1)}))],1),e._v(" "),a("main",{staticClass:"mt-5"},[a("router-view")],1),e._v(" "),a("v-footer",{staticClass:"pa-3",attrs:{color:"primary",dark:""}},[a("v-spacer"),e._v(" "),a("div",[e._v("\n      Designed & Developed by "),a("a",{attrs:{href:"http://www.twitter.com/emmy_rald",target:"_blank"}},[e._v("Emmanuel Akinpelu")])]),e._v(" "),a("v-spacer")],1)],1)},n=[],r={render:s,staticRenderFns:n};t.a=r},tLfa:function(e,t){},xJD8:function(e,t,a){"use strict";t.a={data:function(){return{mobileNav:!1,menuItems:[{icon:"home",title:"Home",route:"Home"},{icon:"people",title:"View Students",route:"ViewStudents"},{icon:"person_add",title:"Create Student",route:"CreateStudent"}]}}}}},["NHnr"]);
//# sourceMappingURL=app.40029b27bdc496788b7e.js.map