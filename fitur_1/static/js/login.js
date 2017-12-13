// function onLinkedInLoad() {
//         IN.Event.on(IN, "auth", getProfileData);
// }
// // Use the API call wrapper to request the member's profile data
// function getProfileData() {
//     // IN.API.Profile("me").fields("id", "first-name", "last-name", "headline", "location", "picture-url", "public-profile-url", "email-address").result(displayProfileData).error(onError);
//     IN.API.Raw("/companies?format=json&is-company-admin=true").result(getFirstCompanyDetail).error(onError);
// }


// function getFirstCompanyDetail(data) {
//     console.log(data)
//     IN.API.Raw("/companies/" + data.values[0].id + ":(id,name,company-type,specialties,website-url,square-logo-url)?format=json").result(companyLogin).error(onError); 
// }

// function onSuccess(data) {
//     console.log(data);
// }

// function onError(error) {
//     console.log(error);
// }

// // Handle the successful return from the API call
// function displayProfileData(data){
//     var user = data.values[0];
//     var id = user.id;
//     console.log(id);
//     IN.API.Raw("/companies?format=json&is-company-admin=true").method("GET").result(
//         function(response){
//             console.log(response.values[0].id)
//             $.ajax({
//                 method :"POST",
//                 url: 'fitur-1/add-session',
//                 data: {
//                     name: user.firstName + " " + user.lastName,
//                     id : id,
//                     companyID : response.values[0].id,
//                     csrfmiddlewaretoken : '{{csrf_token}}'
//                 },
//                 success : function(){},
//                 error : function(error){}
//             });
//         });
//     document.getElementById("picture").innerHTML = '<img src="'+user.pictureUrl+'" />';
//     document.getElementById("name").innerHTML = user.firstName+' '+user.lastName;
//     document.getElementById("intro").innerHTML = user.headline;
//     document.getElementById("email").innerHTML = user.emailAddress;
//     document.getElementById("location").innerHTML = user.location.name;
//     document.getElementById("link").innerHTML = '<a href="'+user.publicProfileUrl+'" target="_blank">Visit profile</a>';
//     document.getElementById('profileData').style.display = 'block';
//     document.getElementById('loginPage').style.display='none';
//     document.body.style.backgroundColor='#fafafa';
//     document.body.style.marginTop="70px";

//     window.location.assign("/fitur-2")
//     $('.navigation-list').append('<li id="#logoutBt"><a onclick="logout()">Log out</a></li>')

// }

// // Handle an error response from the API call
// function onError(error) {
//     console.log(error);
// }

// // Destroy the session of linkedin

function onLinkedInLoad() {
    IN.Event.on(IN, "auth", getUserCompanies);
}

function getUserCompanies() {
    IN.API.Raw("/companies?format=json&is-company-admin=true").result(getFirstCompanyDetail).error(onError); 
}

function getFirstCompanyDetail(data) {
    console.log(data)
    IN.API.Raw("/companies/" + data.values[0].id + ":(id,name,company-type,specialties,website-url,square-logo-url)?format=json").result(companyLogin).error(onError); 
}

function onSuccess(data) {
    console.log(data);
}

function onError(error) {
    console.log(error);
}
