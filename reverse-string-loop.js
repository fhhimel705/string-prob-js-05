const lyrics = "boshonto kaLe Tomay bolte parini";

function reverseString(lyrics){
    for (i = lyrics.length - 1; i >= 0; i--) {
      console.log(lyrics[i]);
    }
}

reverseString(lyrics);