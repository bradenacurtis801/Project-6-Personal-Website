
// No css changes from previous project, other than adding 'main.css' for validation page. For the Javascript, I added everything that the project instructions mentioned, including the masking plugin for extra credit. 

const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const addressInput = document.getElementById('address');
const cityInput = document.getElementById('city');
const stateInput = document.getElementById('state');
const zipInput = document.getElementById('zip');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const googleCheckBox = document.getElementById('google');
const friendCheckBox = document.getElementById('friend');
const yahooCheckBox = document.getElementById('yahoo');
const commentBoxInput = document.getElementById('comment');
const formErrors = document.getElementsByClassName('errorMsg');

const stateAbbreviations = [
  'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
  'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
  'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
  'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
  'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
];
const lowercase = /[a-z]+/;
const uppercase = /[A-Z]+/;
const digit = /[0-9]+/;
const email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
const zip = /^[0-9]{5}$/;
const phone = /^[0-9]{3}\-?[0-9]{3}\-?[0-9]{4}$/;

var editing = false;
var visitor_edit = null;

function initValidation(formName) {

  let $form = $(formName);

  $.each($('form :input'), function () {
    addMask(this);
  });

  $('form :input').change(function (ev) {

    validateForm();
    if (!this.checkValidity())
      $(this).addClass("was-validated")

    //NOTE: we use 'was-validated' class so that you show the error indications only for the single field rather
    //than the whole form at once
  });

  // formCancel.addEventListener("click()", clearForm());

  $form.submit(function (event) {
    $form = $(this);
    formEl = $form.get(0);

    event.preventDefault();  //prevent default browser submit
    event.stopPropagation(); //stop event bubbling

    validateForm();

    if (!formEl.checkValidity()) {
      $(":input").addClass("was-validated")
    }
    else {
      //TODO
      if (!editing) {
        new_visitor = new Visitor(visitors[visitors.length - 1].id + 1,
          $('#first-name').val(),
          $('#last-name').val(),
          $('#address').val(),
          $('#city').val(),
          $('#state').val().toUpperCase(),
          $('#zip').val(),
          $("#phone").val(),
          $('#email').val(),
          { google: googleCheckBox.checked, yahoo: yahooCheckBox.checked, friend: friendCheckBox.checked },
          $('#comment').val()
        );
        visitor_dic[new_visitor.id] = new_visitor;
        visitors.push(new_visitor);
      }
      else {
        visitor_dic[visitor_edit.id].firstName = $('#first-name').val()
        visitor_dic[visitor_edit.id].lastName = $('#last-name').val()
        visitor_dic[visitor_edit.id].address = $('#address').val()
        visitor_dic[visitor_edit.id].city = $('#city').val()
        visitor_dic[visitor_edit.id].state = $('#state').val().toUpperCase()
        visitor_dic[visitor_edit.id].zip = $('#zip').val()
        visitor_dic[visitor_edit.id].phone = $("#phone").val()
        visitor_dic[visitor_edit.id].email = $('#email').val()
        visitor_dic[visitor_edit.id].surveyResponses = { google: googleCheckBox.checked, yahoo: yahooCheckBox.checked, friend: friendCheckBox.checked }
        visitor_dic[visitor_edit.id].surveyComments = $('#comment').val()

      }
      RenderTable('visitorsPage')
   
      $form.hide();
      $("#thankyou").show();
      editing = false;
      //show thank you message
    }

  });
}

function validateForm() {

  validateState("#state", "You must enter a valid two character state code, e.g., UT");

  /*note, to validate the group, just passing in id of one of them ("#newspaper"), we will use groupName to check status of group.  Just call setElementValidity on the '#newspaper' element to show the error message*/

  validateCheckboxGroup("#friend", "find-page", "you must select at least one!");

  //   validateZip("#zip", "please enter a 5 digit zipcode")
}

function addMask(field) {
  switch ($(field).attr('type')) {
    case 'phone':
      $(field).mask('(000) 000-0000'); break;

    case 'zip':
      $(field).mask('00000-0000'); break;

  }
}

// function validateZip(id, msg) {
//   setElementValidity(id, zip.test($(id).val()), msg);
// }

function validateState(id, msg) {
  $el = $(id);
  let valid = false;
  //TODO
  //get value from $el, and convert to upper case
  let upper = $el.val().toUpperCase();

  for (state of stateAbbreviations) {
    if (state == upper) {
      valid = true;
      break;
    }
  }

  //check whether the value is in the stateAbbreviations array
  setElementValidity(id, valid, msg);
}

function validateCheckboxGroup(fieldName, groupName, message) {
  let valid = false;

  //TODO
  //Validate whether any of the checkboxes are checked. set 'valid' to true if checked

  if (googleCheckBox.checked || friendCheckBox.checked || yahooCheckBox.checked) {
    valid = true;
  }


  setElementValidity(fieldName, valid, message);

  return valid;
}

function setElementValidity(fieldName, valid, message) {
  let $field = $(fieldName);
  let el = $field.get(0);
  if (valid) {  //it has a value

    el.setCustomValidity('');  //sets to no error message and field is valid
  } else {

    el.setCustomValidity(message);   //sets error message and field gets 'invalid' stat

  }
  //TODO  insert or remove message in error div for element

}
