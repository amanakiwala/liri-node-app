function music(){
var song = process.argv[2];	
//var query2 = require('./random.txt');
var spotify = require('spotify');
 spotify.search({ type: 'track', query: song  }, function(err, data) {
    
    if ( err ) {
       console.log('Error occurred: ' + err);
        return;
 }
 //var musicData =JSON.parse(data.tracks.album);
    
    console.log(data);
   

});
}
music();