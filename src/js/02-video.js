
import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const iframe = document.querySelector("iframe");
const player = new Player(iframe);
player.on('timeupdate', throttle (function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000)
);
const currentTime = localStorage.getItem("videoplayer-current-time");
if (currentTime) {player.setCurrentTime(currentTime);
}


// нашла в документации pre-exist
// import Player from '@vimeo/player';

// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });

// player.on('play', function() {
//     console.log('played the video!');
// });
// плеер он const onPlay = function(data) {
//     // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);
// добавление события
// player.on('timeupdate', trottle (function (data) {
    // function(data) {
//     // data is an object containing properties specific to that event
// });