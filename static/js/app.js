/*------------------------------------------------------*\

     _ _ _ _____ _____ _____ _____ _____ _____ __      _____ _____ _____ 
    | | | |   __|   __|     |  |  |     |     |  |    |     | __  |   __|
    | | | |__   |__   |   --|     |  |  |  |  |  |__ _|  |  |    -|  |  |
    |_____|_____|_____|_____|__|__|_____|_____|_____|_|_____|__|__|_____|

    (C) 2014 - Sallar Kaboli <sallar.kaboli@gmail.com>
    Web Standards School <wsschool.org>.

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

\*------------------------------------------------------*/

var ie = (function(){

    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');

    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );

    return v > 4 ? v : false;

}());

var touch = (function(){
  return 'ontouchstart' in window // works on most browsers 
      || 'onmsgesturechange' in window; // works on ie10
}());

/**
 * Add Helper Classes
 */
if( ie && ie < 9 ) {
    $('body').addClass('ie');
}

if( touch ) {
    $('body').addClass('touch');
}


/**
 * Add Map
 */
if( $('.map-container').length > 0 )
{   
    var $map = $('.map-container'),

    mapOptions = {
        zoom               : 8,
        center             : new google.maps.LatLng(35.732766,51.389306),
        mapTypeId          : google.maps.MapTypeId.ROADMAP,
        zoom               : 16,
        disableDefaultUI   : true,
        scrollwheel        : false,
        zoomControl        : true,
        zoomControlOptions : {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.LEFT_TOP
        }
    },

    map = new google.maps.Map($map[0], mapOptions),

    marker = new google.maps.Marker({
        position : new google.maps.LatLng(35.732766,51.389306),
        map      : map,
        title    : 'RWD Conference'
    });
}