var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>HTML is great </h1>", function(error){
    if (error) {
        return console.log(error);
    } else{
        return console.log("Congrats");
    }
});

var myPhotoLocation = 'https://fit4ever.org.uk/wp-content/uploads/2019/01/me1-770x1024.png'
https.get(myPhotoLocation, function(response){
response.pipe(fs.createWriteStream(__dirname + "/me.jpg"));    
});