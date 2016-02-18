$( document ).ready(function() {

  var thermostat = new Thermostat();


  $('#temperature').text(thermostat.temperature);

  $('#reset').click(function(){
    thermostat.reset();
    $('#temperature').text(thermostat.temperature);
  });

  $('#tempup').click(function(){
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  });

  $('#tempdown').click(function(){
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
  });

  $('#poweron').click(function(){
    thermostat.switchPowerModeOn();
    $('#power-saving-status').text(thermostat.powerMode());

  });

  $('#poweroff').click(function(){
    thermostat.switchPowerModeOff();
    $('#power-saving-status').text(thermostat.powerMode());
  });

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
      $('#current-location').text(data.name);
    });
  });
});
