//Customize title
var myDate = new Date();
var titleName;
//During the time I'm studying german, I found the greetings are strictly according to the time. So let's customize the title!!

/* 7-9 */
if ( myDate.getHours() > 6 && myDate.getHours() <= 8)  
{ 
    titleName="Guten Morgen!"; 
} 
else  /* 9-11 */
if ( myDate.getHours() > 8 && myDate.getHours() <= 10 ) 
{ 
    titleName="Guten Vormittag!"; 
} 
else  /* 11-13 */
if ( myDate.getHours() > 10 && myDate.getHours() <= 12 ) 
{ 
    titleName="Guten Mittag!"; 
} 
else  /* 13-17 */
if ( myDate.getHours() > 12 && myDate.getHours() <= 16 ) 
{ 
    titleName="Guten Nachmittag!"; 
}
else  /* 17-21 */
if ( myDate.getHours() > 16 && myDate.getHours() <= 20 ) 
{ 
    titleName="Guten Abend!"; 
}
else  /* 21-23 */
if ( myDate.getHours() > 20 && myDate.getHours() <= 22 ){ 
    titleName="Gute Nacht!"; 
}  
else  /* 23-1 */
if ( myDate.getHours() > 22 && myDate.getHours() <= 0 ){ 
    titleName="Die Mitternacht"; 
} 
else  /* 1-7 */
if ( myDate.getHours() > 0 && myDate.getHours() <= 6 ){ 
    titleName="You should be in bed not here!"; 
}
else  /* the hour is not between 0 and 24, so do the default welcome */
{ 
    titleName="Welcome!"; 
} 
document.title=titleName;



//get back to top when refresh
$(window).on('unload', function() {
   $(window).scrollTop(0);
});



//canvas