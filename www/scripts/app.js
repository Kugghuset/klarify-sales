'use strict'

// import styles
import './../style/main.scss';
import Vue from 'vue';
import moment from 'moment';
import routes from './routes';
import $ from "jquery";

global.jQuery = require('jquery');
var bootstrap = require('bootstrap');

/**
 * Date filer, similar to that of Angular's
 */
Vue.filter('date', (value, format) => {
  return moment(new Date(value)).isValid()
    ? moment(value).format(!!format ? format
    : 'YYYY-MM-DD HH:mm') : value;
});

