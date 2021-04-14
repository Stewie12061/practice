// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


// load css của application
// thêm bởi: Stewie
// lúc: xx:xx
import '../stylesheets/application';
import NavBarEvent from "./navbar";
import insertMoreContent from "./more";

const images = require.context('../images', true)
const imagePath = (name) => { images(name, true) }

////////////////////





document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll('[data-trigger]').forEach(function (everyelement) {
    let offcanvas_id = everyelement.getAttribute('data-trigger');
    everyelement.addEventListener('click', function (e) {
      e.preventDefault();
      show_offcanvas(offcanvas_id);
    });
  });

  document.querySelectorAll('.btn-close').forEach(function (everybutton) {
    everybutton.addEventListener('click', function (e) {
      close_offcanvas();
    });
  });

  document.querySelector('.screen-darken').addEventListener('click', function (event) {
    close_offcanvas();
  });

  document.querySelectorAll('[data-hi-trigger]').forEach(function (element) {
    let jackie = element.getAttribute('data-message');
    element.addEventListener('click', function (tuy_y) {
      tuy_y.preventDefault();
      alert(jackie);
    });
  });


  //for function insertMoreContent
  insertMoreContent();
});
// DOMContentLoaded  end





