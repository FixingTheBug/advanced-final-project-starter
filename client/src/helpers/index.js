export function findHighestZIndex(elem)
{
  var elems = document.getElementsByClassName("elem");
  var highest = 0;
  for (var i = 0; i < elems.length; i++)
  {
    var zindex=document.defaultView.getComputedStyle(elems[i],null).getPropertyValue("z-index");
    if ((zindex > highest) && (zindex != 'auto'))
    {
      highest = zindex;
    }
  }
  return highest;
}

export function GoogleMapsURLToEmbedURL(GoogleMapsURL)
{
    var coords = /\@([0-9\.\,\-a-zA-Z]*)/.exec(GoogleMapsURL);
    if(coords!=null)
    {
        var coordsArray = coords[1].split(',');
        return "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1000!2d"+coordsArray[1]+"!3d"+coordsArray[0]+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1486486434098";
    }
}

export function getYouTubeID(YouTubeURL) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = YouTubeURL.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}

export function getWindowCenter() {
    return window.innerWidth;
}
