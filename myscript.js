"use strict"
var sid = setInterval(function () {
    if (window.location.href.match(/https:\/\/www.google.com\/recaptcha\/api\d\/anchor/) && $("#recaptcha-anchor div.recaptcha-checkbox-checkmark").length
            && $("#recaptcha-anchor div.recaptcha-checkbox-checkmark").is(':visible')  && checkCapcha($("#recaptcha-anchor div.recaptcha-checkbox-checkmark").get(0)))
        {
            var execute = true;
            if (sessionStorage.getItem('accesstime'))
                {
                    if (new Date().getTime() - sessionStorage.getItem('accesstime') < 7000)
                        {
                            execute = false;
                        }
                }
            if (execute)
                {
                    $("#recaptcha-anchor div.recaptcha-checkbox-checkmark").click();                    
                    sessionStorage.setItem('accesstime', new Date().getTime());
                }
                clearInterval(sid);
        }   
}, 500);


