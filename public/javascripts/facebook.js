window.fbAsyncInit = function() {
    FB.init({
        appId      : '1847990132173464',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.12'
    });
    
    FB.AppEvents.logPageView();

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

    function statusChangeCallback(response) {
        console.log(response)
        // console.log(response)
        // if (response.status === 'connected') {
        //     window.location.replace("/home");
        // } else {
        //     FB.login()
        // }
    }
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);   
}(document, 'script', 'facebook-jssdk'));




