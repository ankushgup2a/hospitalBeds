(function rideScopeWrapper($) {
   
    function requestUnicorn() {
        $.ajax({
            method: 'GET',
            url: _config.api.invokeUrl + '/gethospitalstats',            
            contentType: 'application/json',
            success: completeRequest,
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error requesting ride: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
                alert('An error occured when requesting your unicorn:\n' + jqXHR.responseText);
            }
        });
    }

    function completeRequest(result) {
       
        console.log('Response received from API: ', result);
        
    }

    // Register click handler for #request button
    $(function onDocReady() {
        
        

        if (!_config.api.invokeUrl) {
            $('#noApiMessage').show();
        }
        requestUnicorn();
    });

    function displayUpdate(text) {
        $('#updates').append($('<li>' + text + '</li>'));
    }
}(jQuery));