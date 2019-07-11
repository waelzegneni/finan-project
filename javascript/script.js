var firebaseConfig = {
    apiKey: "AIzaSyBI9fpY8G_tsVV_k8l1NloVd95wViAvJJA",
    authDomain: "final-project-168c1.firebaseapp.com",
    databaseURL: "https://final-project-168c1.firebaseio.com",
    projectId: "final-project-168c1",
    storageBucket: "",
    messagingSenderId: "697465735621",
    appId: "1:697465735621:web:de07323f6a1e486b"
};

firebase.initializeApp(firebaseConfig);



var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.addevenrfunction () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}








