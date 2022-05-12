$(document).ready(function() {
    getFHIR();
});


function getFHIR() {
    $.ajax({
        type: "GET",
        url: "http://140.135.100.188:8501/fhir/Patient",
        dataType:"json",

        success:function(res) {
            // console.log(res)
            setPatient(res.entry);
        },
        error:function(err) {
            console.log(err);
        },
      });
}

function setPatient(list) {
    console.log(list);
    $.each(list, function(index, patient) {
        let id = patient.resource.id;

        let listItem = document.createElement("li");
        listItem.className = "list-group-item list-group-item-action";

        let patientItem = document.createElement("div");
        patientItem.className = "patient";
        patientItem.innerHTML = "Patient " + id;
        
        listItem.append(patientItem);
        $("#patientContainer").append(listItem);
    })
}