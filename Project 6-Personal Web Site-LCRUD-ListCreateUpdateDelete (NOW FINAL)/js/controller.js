
const contactPage = $('#contactPage');
const homepage = $('#homepage');
const schedulePage = $('#mySchedulePage');
const videosPage = $('#videosPage');
const registerPage = $('#registerPage');
const visitorsPage = $('#visitorsPage');
const toggle = document.querySelector('.switch input');
const inputs = document.querySelectorAll('#myform input');
const formCancel = document.getElementById('formCancel');


$(document).ready(function() {
 
    $('#contactBtn').click(function() { 
        homepage.hide();
        schedulePage.hide();
        videosPage.hide();
        registerPage.hide();  
        visitorsPage.hide();
        contactPage.show();
    });
    $('#homeBtn').click(function() { 
        contactPage.hide();
        schedulePage.hide();
        videosPage.hide()
        registerPage.hide(); 
        visitorsPage.hide();     
        homepage.show();
    });
    $('#myScheduleBtn').click(function() { 
        contactPage.hide();
        homepage.hide();
        videosPage.hide()
        registerPage.hide(); 
        visitorsPage.hide(); 
        schedulePage.show(); 
    });
    $('#detailsBtn').click(function() { 
        contactPage.hide();
        homepage.hide();
        schedulePage.hide();
        registerPage.hide(); 
        visitorsPage.hide();  
        videosPage.show(); 
    });    
    $('#registerFormBtn').click(function() { 
        contactPage.hide();
        homepage.hide();
        schedulePage.hide();
        videosPage.hide() 
        visitorsPage.hide();
        registerPage.show();  
        clearForm();
    });
    $('#visitorsBtn').click(function() { 
        contactPage.hide();
        homepage.hide();
        schedulePage.hide();
        videosPage.hide() 
        registerPage.hide();  
        visitorsPage.show();  
    });
    $('#formCancel').click(function() {
        let confirmation = confirm("Are you sure you want to clear the form?");
        if (confirmation) {
            clearForm();
            $('#visitorsBtn').click()
        }
    })
    
    toggle.addEventListener('click', function() {
        if (toggle.checked) {
            document.getElementById('themeStyle').removeAttribute('disabled');
        }
        else {
            document.getElementById('themeStyle').setAttribute('disabled', true);
        }
    })
    
    $('#homeBtn').click()

    initValidation("#myform");
    // GetHeaders('visitorsPage', headers)
    RenderTable('visitorsPage', visitors)
    




});

function clearForm() {
    $("#myform").show();
    $('#formCancel').hide();
    $("#thankyou").hide();
    inputs.forEach(input => input.value = '');
    $('#google').prop("checked", false);
    $('#yahoo').prop("checked", false);
    $('#friend').prop("checked", false);
    $('#comment').val('')
    $('#formSubmit').text('Send')
}

function loadVisitors() {
    //called when 'visitors' menu item is clicked 
    //calls view 'showVisitors' 
    //calls view 'renderTable' 
    //calls view 'showTable'
 }
 
 function submitForm() {
     //called on form submit. Gets contents of form, creates visitor object, 
     //calls model 'modelAddVisitor' function
     //calls view 'renderTable' 
     //calls view 'showTable'
 }
 
 function addVisitor(visitor) {
   //called on 'click' of 'New Visitor' button 
   //calls view 'clearForm' to clear form contents
   //calls view 'showForm'
 }
 
 function deleteVisitor(id) {
    //called on 'click' of 'delete' icon in visitor list 
    //calls model.js modelDeleteVisitor
    //calls view 'renderTable' 
    //calls view 'showTable'
 }
