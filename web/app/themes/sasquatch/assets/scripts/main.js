import $ from 'jquery';
import 'what-input';
import './lib/foundation-explicit-pieces.js';
import Router from './lib/router';

// Routes
import common from './routes/common';
import home from './routes/home';


window.$ = $;

/**
 * Populate Router instance with DOM routes
 * @type {Router} routes - An instance of our router
 */
const routes = new Router({
  common,
  home
});

/** Load Events */
$(document).ready(() => routes.loadEvents());
