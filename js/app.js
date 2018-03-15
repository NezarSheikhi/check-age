

var form = document.getElementById('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get the year number from your browser
    var d = new Date();
    var n = d.getFullYear();

    // If you remove this function, the empty input will give you resault
    var x = document.getElementById("myInput").value;
        if (x =='') {
        alert("Number must be filled out");
        return false;
    };

    // The main control of input year number - 18 
    if (document.getElementById("myInput").value>=n-18) {
    alert ("Sorry! you are under 18 ");
    } else {
        
    alert("Great!! you are over 18");
    window.location =  "https://nezarsheikhi.github.io/Web-Design/"
    }
});
