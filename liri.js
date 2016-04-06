


function movie(){
  var query = process.argv[3];

  var request = require('request');
  var queryURL = "http://www.omdbapi.com/?t=" + query +"&y=&plot=short&r=json";
   request(queryURL, function (error, response, body) {
     if (!error && response.statusCode == 200) {
  	    var movieData= JSON.parse(response.body)
         console.log("Title: " + movieData.Title)
         console.log("Year: " + movieData.Year)
         console.log("IMDB Rating: " + movieData.imdbRating)
         console.log("Country: " + movieData.Country)
         console.log("Language: " + movieData.Language)
         console.log("Plot: " + movieData.Plot)
         console.log("Actors: " + movieData.Actors)  
          

    }
return query;
});
}
movie();
//------------------------------------------

function twitterDisplay(){

//var query1 = process.argv[2];

var Twitter = require('twitter');
var keys = require('./keys.js');


var client = new Twitter(keys.twitterKeys);


 
var params = {screen_name: 'nodejs'};
client.get('statuses/home_timeline',{screen_name: 'nodejs', count: 20} , function(error, tweets, response){
  if(!error){
    for (var i=0; i<tweets.length; i++){
    console.log(tweets[i].text);
    console.log("------------------")
  }
  }
});

}
twitterDisplay();
//-------------------------------------------------
function music(){
var song = process.argv[2];	
var songURL = 'https://api.spotify.com/v1/search?query=' + song + '&offset=0&limit=1&type=track';

var spotify = require('spotify');
 spotify.search({type: 'track', query: song }, function(err, data, tracks) {
   //if(!err){
   // for (var j=0; j<data.length; j++){
      //console.log(data[j].tracks);
    //}
// }
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
  
      console.log(data.tracks);
    

   // console.log(data.tracks.name);
});
}
music();
//----------------------------------------------------
function doAnything(){
  var textFile = process.argv[2];
var fs = require('fs');

fs.readFile("random.txt","utf8", function(err,data){
  //console.log(data);

 fs.appendFile('random.txt',data,function(err){
   if(err){
    console.log(err);

   }else{
  console.log(textFile);
 }
 })
 });  
 

}
doAnything();
//-----------------------------------------------------
 function display(){


 var commands = process.argv[2];
 var inputs = process.argv[3];

   
      if((commands = 'movie-this')&&(inputs ='<movie name here>')){
          movie();
      }else if(commands ='my-tweets'){
          twitterDisplay();
      }else if((commands ='spotify-this song')&&(inputs='<song name here>')){
          music();
        }  
               

}
display();
