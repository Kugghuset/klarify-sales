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
  props: {},
  data: function() {
    return {
        name: '',
        employee: '',
        customer: '',
        value: '',
        probability: '',
        start: '',
        end: ''
    }
  },
  methods: {},
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

Vue.component('register-project', RegisterProject)

export default RegisterProject;