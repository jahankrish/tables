$(document).ready(function() {
    $("#submit").click(function() {
            $.getJSON("tableDetails.json", function (data) {
                tabledata(data);
                 console.log(data);
            });
    });
});

function tabledata(data){

    let tableDetails = "<tr><th>Name</th><th>Age</th><th>IsMarried</th></tr>";
    tableDetails += "</tbody>";

    for (let i = 0; i < data.details.length; i++) {
        let tableDet = data.details[i];

        // if (tableDet.isMarried) {

        //     tableDet.isMarried = "yes"

        // } else {
        //     tableDet.isMarried = "No"
        // }

       //ternarry operation used in true or false is good paratics
    //    tableDet.isMarried ?  tableDet.isMarried = "yes" : tableDet.isMarried = "No"
    //    tableDet.isMarried = tableDet.isMarried ? "Yes" : "No";

       tableDetails += "<tr>" +
                    "<td>"+tableDet.name+"</td>" +
                    "<td>"+tableDet.age+"</td>" +
                    "<td>"+(tableDet.isMarried ? "Yes" : "No")+"</td>" +   
                    "</tr>"
    }
    tableDetails += "</tbody>";
       document.getElementById("table").innerHTML = tableDetails;
}