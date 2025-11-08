# Cassini-Hackathon

HOW TO LAUNCH  
    1. cd ploc
    2. npm run start
    3. i 

ZOOM 
hold option key + mouse 

SEE IF A PICTURE HAS METADATA
 exiftool IMG_0521.jpg| grep GPS

 CINVERTING IMAGE FORMAT
  magick mogrify -format jpg -path becentral-jpeg -define preserve-exif=true becentral/*.HEIC