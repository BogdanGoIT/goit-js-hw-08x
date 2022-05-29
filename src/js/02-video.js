import Player from '@vimeo/player';
const player = new Player('vimeo-player');
import { throttle } from 'lodash';



const onPlay = function (data) {
    
    console.log(data);
    const dataJSON = JSON.stringify(data);
    localStorage.setItem("videoplayer-current-time", dataJSON);
    
};

const json = localStorage.getItem('videoplayer-current-time');
const dataParse = JSON.parse(json);

if (dataParse) {
    
    player.setCurrentTime(dataParse.seconds).then(function (seconds) {

    // seconds = the actual time that the player seeked to
    }).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
    });
} else {
    console.log(dataParse);
}






player.on('play', throttle(onPlay, 1000));

    
// player.on('eventName', function(data) {
//     console.log();
// });



