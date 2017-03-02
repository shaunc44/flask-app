$(document).ready(function() {
    $('#btnSignUp').click(function(){
        $.ajax({
            url: '/signUp',
            data: $('form').serialize(),
            type: 'POST',
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});


// $(document).ready(function() {
//     $.ajaxSetup({
//         headers: {'Authorization': "Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=="}
//     })
//     $('#btnSignUp').click(function(){
//         $.ajax({
//             url: '/signUp',
//             prepare: function (query, settings) {
//                 settings.url = settings.url.replace('%QUERY', query);
//                 settings.headers = {
//                     'appid': APP.APP_ID,
//                     'token': localStorageService.get('app-token'),
//                     'scope': 'app',
//                     'lang': 'en'
//                 };
//             },
//             datatype: "application/json; charset=utf-8",
//             contentType: "text/plain",
//             data: $('form').serialize(),
//             type: 'POST',
//             success: function(response) {
//                 console.log(response);
//             },
//             error: function(error) {
//                 console.log(error);
//             }
//         });
//     });
// });