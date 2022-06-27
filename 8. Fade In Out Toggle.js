/*
fadeOut/In/Toggle(speed,easing,callback)
    speed: milliseconds | "slow" | "fast" (400ms default)
    easing: swing | linear
    swing: moves slower at the beginning/end, but faster in the middle
    linear: moves in a constant speed
fadeTo(speed,opacity,callback)
method allows fading to a given opacity (value between 0 and 1)

*/

$('img').fadeTo("", 0.5);
$('img').fadeOut();
$('img').fadeIn();
$('img').fadeToggle();