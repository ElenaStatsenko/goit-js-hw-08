
import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);
const onPlay = function(data) {
    
};

player.on('play', onPlay);