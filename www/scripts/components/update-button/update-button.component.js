'use strict'

import Vue from 'vue';
import template from './update-button.template.html';
import factProject from '../../services/projects.service.js';
import config from '../../config';
import utils from '../../services/utils.js';
import VueResource from 'vue-resource';


Vue.use(VueResource);

// Get shorthands to utils.storage and utils.http
const {storage, http} = utils;

import auth from './../../services/auth';

const UpdateButton = Vue.extend({
  template,
  props: {
    id: {
      type: String,
      default: null
    },
    connectionOk: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "Update"
    },
    probability: {
      type: Number,
      default: 0.5
    },
    item: {
      type: Object,
    }
  },
  methods: {
    post: function (event) {
      let url = config.baseUrl + '/api/projects/update/' + this.id;
      Vue.http.put(url, this._item).then((response) => {
        this.connectionOk = true;
        this.item.Probability = this.probability;
        console.log('OK');
      }, (response) => {
        this.connectionOk = false;
        console.log('FAILED');
      });
    }
  },
  computed: {
    _item: {
      get: function () {
        var temporatyItem = jQuery.extend(true, {}, this.item);
        temporatyItem.Probability = this.probability;
        return temporatyItem;
      },
      },
    },
});

Vue.component('update-button', UpdateButton)

export default UpdateButton;