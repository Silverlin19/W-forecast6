const kelvinToFahrenheit = kelvin => ((kelvin - 273.15) * 9) / 5 + 32;

const getCities = () => {
  var citiesStr = localStorage.getItem('cities');
  var cities;
  if (citiesStr) {
    cities = JSON.parse(citiesStr);
  } else {
    cities = [];
  }
  return cities;
};

const toTitleCase = str => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};


const setUVIndexColor = () => {

  $('#uvindex').css('color', 'white');
  
  var color = 'red';

  
  $('#uvindex').css('background-color', color);}


const setSideBarCities = () => {
  $('#recentCities').html('');
  for (var i = 0; i < Math.min(cities.length, 10); i++) {
    var tr = $('<tr>');
    var td = $('<td>').text(toTitleCase(cities[i]));
    tr.append(td);
    $('#recentCities').append(tr);
  }
};

const showFailureMessage = () => {
  $('#alert--failure').fadeIn();
  $('#alert--failure').slideDown(1500);
  setTimeout(() => {
    $('#alert--failure').fadeOut();
    $('#alert--failure').slideUp(1500);
  }, 3000);
};

const showSuccessMessage = () => {
  $('#alert').fadeIn();
  $('#alert').slideDown(700);
  setTimeout(() => {
    $('#alert').fadeOut();
    $('#alert').slideUp(700);
  }, 1500);
};


