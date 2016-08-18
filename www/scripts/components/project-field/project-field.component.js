'use strict'

import Vue from 'vue';
import template from './project-field.template.html';
import factProject from '../../services/projects.service.js';
import config from '../../config';
import utils from '../../services/utils.js';
import VueResource from 'vue-resource';
import moment from 'moment';
import _ from 'lodash';


Vue.use(VueResource);

// Get shorthands to utils.storage and utils.http
const {storage, http} = utils;

import auth from './../../services/auth';

const ProjectField = Vue.extend({
  template,
  props: {
    content: {
      type: null,
    },
    item: {
      type: Object,
    },
    fieldtype: {
      type: String,
    },
    dateTo: {
      type: null,
    },
    dateFrom: {
      type: null,
    },
  },
  methods: {
    update: function (event) {
      console.log(this.item);
      let url = config.baseUrl + '/api/projects/update/' + this.item.ProjectId;
      Vue.http.put(url, this.item).then((response) => {
        this.connectionOk = true;
      }, (response) => {
        this.connectionOk = false;
      });
    },
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

Vue.component('project-field', ProjectField)

export default ProjectField;