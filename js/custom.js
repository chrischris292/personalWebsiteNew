    $(window).scroll(function(e) {
        var s = $(window).scrollTop();
            var opacityVal = (s / 400.0);
            $('.img').css('opacity', opacityVal);        
    });


    $(document).ready(function() {
            $(document).ready(function() {
                $('.tooltip').tooltipster();
            });
            $('#globe').tooltipster({
                arrow:true,
                position:"bottom",
                content: $('<div>Welcome Website</div>')
            });
            $('#twitter').tooltipster({
                arrow:true,
                position:"bottom",
                content: $('<div>Twitter</div>')
            });
            $('#github').tooltipster({
                arrow:true,
                position:"bottom",
                content: $('<div>GitHub</div>')
            });
            $('#linkedin').tooltipster({
                arrow:true,
                position:"bottom",
                content: $('<div>LinkedIn</div>')
            });
            $('#mail').tooltipster({
                arrow:true,
                position:"bottom",
                content: $('<div>Mail</div>')
            });
    });

    jQuery(document).ready(function () {
    var map;
    var centerPosition = new google.maps.LatLng(41.850033, -100.6500523);


    var style = [{
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#ffffff"
        }]
    }, {
        "featureType": "road.arterial",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#fee379"
        }]
    }, {
        "featureType": "road.highway",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#fee379"
        }]
    }, {
        "featureType": "landscape",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#f3f4f4"
        }]
    }, {
        "featureType": "water",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#7fc8ed"
        }]
    }, {}, {
        "featureType": "road",
            "elementType": "labels",
            "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#83cead"
        }]
    }, {
        "elementType": "labels",
            "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [{
            "weight": 0.9
        }, {
            "visibility": "off"
        }]
    }]

    var options = {
        zoom: 4,
        center: centerPosition,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false
    };
    map = new google.maps.Map($('#map')[0], options);
    map.setOptions({
        styles: style
    });
    var shadow = {
        url: 'https://dl.dropboxusercontent.com/u/814783/fiddle/shadow.png',
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(-2, 36)
    };
    var seattle = new google.maps.Marker({
        position: new google.maps.LatLng(47.6097, -122.3331),
        map: map,
        shadow: shadow
    });
    var uiuc = new google.maps.Marker({
        position: new google.maps.LatLng(40.1105, -88.2284),
        map: map,
        shadow: shadow
    });
    seattleString = 'Raised a Seattle native. <br/>Currently interning at AT&T.';
    uiucString = 'I go to school at the University of Illinois at Urbana Champaign.<br/> I interned at Dow Chemical here as well.'
  var infowindowSeattle = new google.maps.InfoWindow({
      content: seattleString
  });
  var infowindowUiuc = new google.maps.InfoWindow({
      content: uiucString
  });
  google.maps.event.addListener(seattle, 'click', function() {
    infowindowSeattle.open(map,seattle);
  });
  google.maps.event.addListener(uiuc, 'click', function() {
    infowindowUiuc.open(map,uiuc);
  });



});