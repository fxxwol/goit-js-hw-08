import Player from '@vimeo/player';
let throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000))

function onTimeUpdate(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}

window.onload = player.setCurrentTime(localStorage['videoplayer-current-time']).then(player.play()).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
