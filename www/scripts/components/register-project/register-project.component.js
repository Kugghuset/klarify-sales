'use strict'

import Vue from 'vue';
import template from './register-project.template.html';
import factProject from '../../services/projects.service.js';
import config from '../../config';
import utils from '../../services/utils.js';
import VueResource from 'vue-resource';
import moment from 'moment';

Vue.use(VueResource);


// Get shorthands to utils.storage and utils.http
const {storage, http} = utils;

const RegisterProject = Vue.extend({
  template,
  props: {
    projects: {
      type: Array,
    },
  },
  data: function() {
    return {
        name: '',
        employee: '',
        customer: '',
        value: '',
        probability: '',
        dateTo: moment().add(1, 'months').toDate(),
        dateFrom: new Date(),
    }
  },
  methods: {
    post: function (event) {
      let item = {
        "Employee": this.employee,
        "Project Name": this.name,
        "Customer": this.customer,
        "Value": this.value,
        "Probability": this.probability,
        "Start Date": this.dateFrom,
        "End Date": this.dateTo
      };
      let url = config.baseUrl + '/api/projects/create/';
      Vue.http.put(url, item).then((response) => {
        this.connectionOk = true;
        this.projects.push(item);
        this.$data = initialState()
      }, (response) => {
        this.connectionOk = false;
      });
    }
  },
  computed: {
    _dateFrom: {
      get: function () {
        return this.dateFrom;
      },
      set: function (dateFrom) {
        if (!moment(dateFrom).isSame(this.dateFrom, 'day')) {
          this.dateFrom = dateFrom;
        }
      },
    },
    _dateTo: {
      get: function () {
        return this.dateTo;
      },
      set: function (dateTo) {
        if (!moment(dateTo).isSame(this.dateTo, 'day')) {
          this.dateTo = dateTo;
        }
      },
    },
  },
});

// outside of the component:
function initialState (){
  return {
    name: '',
    employee: '',
    customer: '',
    value: '',
    probability: '',
    dateTo: moment().add(1, 'months').toDate(),
    dateFrom: new Date(),
  }
}

Vue.component('register-project', RegisterProject)

export default RegisterProject;