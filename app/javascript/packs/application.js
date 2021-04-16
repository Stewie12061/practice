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
import NavBarEvent from './navbar'
import InsertMoreContent from './more'

const images = require.context('../images', true)
const imagePath = (name) => { images(name, true) }

////////////////////

function hello(){
  console.log('Hello')
}

console.log('A')
hello()


document.addEventListener("DOMContentLoaded", function () {
  NavBarEvent()
  InsertMoreContent()
});





