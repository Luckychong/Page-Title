$("button").click(function(){
    var name = $("#name").val();
    var times = $("#times").val();
    var cost = $("#cost").val();
    var amount = cost*times*52;
    var numberofboxes = times*52;
    console.log (times);
    $("h2").text("hi" + "!" +  name + " " + "By the year 2050," + " " + "you will have eaten" + " " + numberofboxes + " " + "and it will cost" + " " + amount + " " + "dollars" + "." );
});
 