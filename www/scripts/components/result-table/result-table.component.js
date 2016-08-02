'use strict'

import Vue from 'vue';
import template from './result-table.template.html';
import factProject from '../../services/projects.service.js';
import config from '../../config';
import utils from '../../services/utils.js';
import VueResource from 'vue-resource';
import moment from 'moment';


Vue.use(VueResource);

// Get shorthands to utils.storage and utils.http
const {storage, http} = utils;

import auth from './../../services/auth';

const ResultTable = Vue.extend({
  template,
  props: {
    connectionOk: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data: function () {

    factProject.getCurrentProjects().then(function () {
      let projects = storage.get('allProjects');
      this.projects = projects;
      console.log(projects);
    }.bind(this))
    .catch( err => {console.log(err)});

    let projects = storage.get('allProjects') || [];

    return {
      projects: projects
    }
  },
  methods: {
    lost: function (item) {
      return item['Probability'] === 0;
    },
    won: function (item) {
      return item['Probability'] === 1;
    }, 
    pipe: function (item) {
      return item['Probability'] > 0 && item['Probability'] < 1;
    }   
  }
});

Vue.component('result-table', ResultTable)

export default ResultTable;

/**
 * Date filer, similar to that of Angular's
 */
Vue.filter('date', (value, format) => {
  return moment(new Date(value)).isValid()
    ? moment(value).format(!!format ? format
    : 'YYYY-MM-DD HH:mm') : value;
});
