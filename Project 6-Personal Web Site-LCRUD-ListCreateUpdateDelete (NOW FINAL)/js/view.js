function renderTable(containerId, visitors) {//renders table from global 'visitors' object array}
}
    function showVisitors()  {//shows visitor container and hides all other site content containers }
    }

    function showList() {//shows visitor list and hides form }
    }
    function showForm() {//shows visitor form and hides list }
    }
    
    function clearForm() {//clears values on inputs so next time form is loaded they don't have old contents

    }

        
    function GetHeaders(_container = null, data = null) {
        try {
            let values = data ?? this.visitors.headers;
            let container = _container ?? this.container;
            let headers = "";
            values.forEach(e => { headers += `<th id="${e}-header">${e}</th>`; });
            $('#' + container).append(`<tr>${headers}</tr>`);
            $('#ID-header').addClass('noshow');
            $('#Name-header').addClass('top-left-radius table-cell');
            $('#Actions-header').addClass('top-right-radius table-cell');
    
            let adders = "";
            for (let i = 2; i < values.length; i++) { adders += `<td></td>`; }
            let addbutton = `
            <td>
                <button id="addVisitorBtn" name="addVisitorBtn" class="btn-primary">
                    Add Visitor
                </button>
            </td>`;
    
            $('#' + container).after(`<tbody id="addVisitorBody"><tr id="addVisitor">${adders}${addbutton}</tr></tbody>`);
            LinkButtons($('#addVisitorBtn'), $('#visitor'), true, 'flex');
    
            $('#' + container).parent().after(`
                <div id="clear-all" class="clear-all">
                    <span id="x-symbol" class="x-symbol">
                        X
                    </span>
                    <span id="popup-msg-clear-all" class="popup-text">
                        <h3>WARNING!</h3>This will clear <b><u>ALL</u></b> visitor entries.
                    </span>
                </div>
            `);
            $('#clear-all').textfill({ maxFontPixels: 60 });
            $('#clear-all').on({
                mouseenter: function() {
                    $(this).find('span').addClass('show');
                    $('#x-symbol').addClass('dimmer');
                },
                mouseleave: function() {
                    $(this).find('span').removeClass('show');
                    $('#x-symbol').removeClass('dimmer');
                },
                resize: function() {
                    $('#clear-all').textfill({ maxFontPixels: 60 });
                },
                click: function() {
                    $('#delete-all').show();
                    $('#delete-all-message').show();
                    $('#delete-all-buttons').show();
                    $('#delete-all-message').textfill({ maxFontPixels: 60 });
                },
                mousedown: function() {
                    $(this).css('cursor', 'not-allowed');
                },
                mouseup: function() {
                    $(this).css('cursor', 'pointer');
                }
            });

        } catch (err) {
            console.log(err);
        }
    }


    function RenderTable(container = "visitorsPage", data = Object.values(visitor_dic)) {
        
        console.log("DATA:",data)
        let vistiorsTable = "visitorsTable";
        $('#' + container).empty();

        $('#' + container).append(`
            <table id="${vistiorsTable}"></table>
        `);

        let table = $("#" + vistiorsTable);
        let table_headers = "";
        headers.forEach(e => { table_headers += `<th id="${e}-header">${e}</th>`; });

        table.append(`<tr>${table_headers}</tr>`);
        $('#ID-header').hide(); 
        // let adders = "";
        // for (let i = 0; i < visitors.length; i++) { adders += `<td></td>`; }

        
        // ADD VISITOR BUTTON ::::::
        // ADD VISITOR BUTTON ::::::
        let addbutton = `
            <td>
                <button id="addVisitorBtn" name="addVisitorBtn" class="btn-primary">
                    Add Visitor
                </button>
            </td>`;
        table.after(`<tbody id="addVisitorBody"><tr id="addVisitor">${addbutton}</tr></tbody>`);
        // ADD VISITOR BUTTON ::::::
        // ADD VISITOR BUTTON ::::::
 

        // GetHeaders(vistiorsTable, headers);

        data.forEach(e => { 
            $('#' + vistiorsTable).append(`
                <tr class="rowHover">
                    <td style="display:none">${ e.id }</td>
                    <td>${ e.fullName }</td>
                    <td>${ e.fullAddress }</td>
                    <td>${ e.phone }</td>
                    <td>${ e.email }</td>
                    <td class="visit-log-actions">
                        <div class="visit-log-action-buttons">
                            <button id="visit-edit-button-${ e.id }" name="visit-edit-button" class="visitButton">Edit</button>
                            <button id="visit-delete-button-${ e.id }" name="visit-delete-button" class="visitButton">Delete</button>
                        </div>
                    </td>
                <tr>
            `);  
            // LinkButtons($(`#visit-edit-button${e['id']}`), $('#visitor'), true, 'flex');
            // this.LinkVisitorButtons();
        });





        if (data.length < 1) {
            $('#' + container).append(`
                <tr class="rowHover">
                    <td colspan="5">
                        No data currently available
                    </td>
                </tr>
            `);
            $('#b6').html('');
            $('#profileImg').attr('src', 'img/profile_unknown_yg.png');
            $('#b4').css({ opacity: 0.4 });
        }  

        data.forEach(e => {
            $(`#visit-edit-button-${e.id}`).click(function() {
                editing = true;
                visitor_edit = e; 
                $("#myform").show();
                $("#thankyou").hide();
                $('#registerFormBtn').click()
                $('#formCancel').show();
                $('#formSubmit').text('Save')
                $('#first-name').val(e.firstName)
                $('#last-name').val(e.lastName)
                $('#address').val(e.address)
                $('#city').val(e.city)
                $('#state').val(e.state)
                $('#zip').val(e.zip)
                $("#phone").val(e.phone)
                $('#email').val(e.email)
                if (e.surveyResponses['google']) {
                    $('#google').prop("checked", true);
                } else {
                    $('#google').prop("checked", false);
                }              
                if (e.surveyResponses['yahoo']) {
                    $('#yahoo').prop("checked", true);
                } else {
                    $('#yahoo').prop("checked", false)
                }             
                if (e.surveyResponses['friend']) {
                    $('#friend').prop("checked", true)
                } else {
                    $('#friend').prop("checked", false)
                }              
                // { google: googleCheckBox.checked, friend: friendCheckBox.checked, newspaper: newsCheckBox.checked },
                $('#comment').val(e.surveyComments)
            });

            $(`#visit-delete-button-${e.id}`).click(function() {
                delete visitor_dic[e.id];
                RenderTable()
            })
            
        })

        $('#addVisitorBtn').click(function() {
        
            $('#registerFormBtn').click()
        })
    }