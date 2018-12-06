var trainName = "";
var trainDestination= "";
var firstTrainTime= "";
var frequency= 0;
var nextArrival="";


$("#submit").on("click", function(event) {
    event.preventDefault();

    var trainName = $("#Train-Name").val().trim();
    var trainDestination=$("#Destination").val().trim();
    var firstTrainTime=$("#First-Train-Time").val().trim();
    var frequency=$("#Frequency").val().trim();





    function resetFields() {
        $("#Train-Name").val("");
        $("#Destination").val("");
        $("#First-Train-Time").val("");
        $("#Frequency").val("");


        function populate(){
            var nm = $("<td>").text(trainName);
            var de = $("<td>").text(trainDestination);
            var ft = $("<td>").text(frequency);
            var na = $("<td>").text(nextArrival);
            var ftt= $("<td>").text(firstTrainTime);
        }


        trainInfo.push({
        name: trainName,
        location: trainDestination,
        trainTime: firstTrainTime,
        time: frequency
    });
    localStorage.setItem("trainSchedule", JSON.stringify(trainInfo));
    resetFields();}
})