$(document).ready(function() {

  var thermoMonkey = new Thermostat


  $bgcolour = function() {
      if(thermoMonkey.energyUsage() === "high-usage"){
        var colour = '#B0171F'
        $("body").css('background-color', '#B0171F');
    } else if(thermoMonkey.energyUsage() === "medium-usage"){
        $("body").css('background-color', '#FFF68F');
      else if(thermoMonkey.energyUsage() === "low-usage"){
        $("body").css('background-color', '#79CDCD');
      else
        "whatever";
    };
  };

  $bgcolour();

  $("#temperature").text(thermoMonkey.temperature)

  $("#up").click(function() {
    thermoMonkey.up()
    $("#temperature").text(thermoMonkey.temperature)
    $bgcolour();
  });

  $("#down").click(function() {
    thermoMonkey.down()
    $("#temperature").text(thermoMonkey.temperature)
    $bgcolour();
  });

  $("#reset").click(function() {
    thermoMonkey.reset()
    $("#temperature").text(thermoMonkey.temperature)
    $bgcolour();
  });

  $("#pson").click(function() {
    thermoMonkey.powerSaveOn()
    $("#ps-status").text(thermoMonkey.powerSavingMode)
    $("#temperature").text(thermoMonkey.temperature)
  });

  $("#psoff").click(function() {
    thermoMonkey.powerSaveOff()
    $("#ps-status").text(thermoMonkey.powerSavingMode)
  });

});
