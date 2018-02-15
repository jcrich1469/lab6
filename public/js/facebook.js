function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
	
	/*callback*/
	
  }
}

//1
function changeUser(response){
		
	//assuming response is a string in js.
	console.log(response);
	//2
	$(".facebookLogin p").hide();
	//3:
	$(#name).text(response.name);
	//4:changing the src attribute of img #photo to the response url
	$(img #photo).attr("src","response.picture.data.url");
	
}

