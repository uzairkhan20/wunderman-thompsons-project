// Load Styles
import '../scss/main.scss';

// import '../../node_modules/slick-carousel/slick/fonts/slick.ttf';
// import '../../node_modules/slick-carousel/slick/fonts/slick.woff';
// import '../../node_modules/slick-carousel/slick/ajax-loader.gif';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

// Load Bootstrap init

global.$ = require("jquery");
global.jQuery = global.$;
import { initBootstrap } from "./bootstrap";


initBootstrap({
    tooltip: true,
    popover: true,
    toasts: true,
});


require('../../node_modules/slick-carousel/slick/slick.min.js');
require('../../node_modules/slick-carousel/slick/fonts/slick.ttf');
require('../../node_modules/slick-carousel/slick/fonts/slick.woff');
require('../../node_modules/slick-carousel/slick/ajax-loader.gif');

const WOW = require('wowjs');

window.wow = new WOW.WOW({
    live: false
});

require('./custom.js');