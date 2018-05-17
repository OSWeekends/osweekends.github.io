
const agendaBtn = document.querySelector(".agendaBtn") ;
const showDate  = new Date("Fri May 18 2018 00:00:00 GMT+0200 (CEST)") ;
const hideDate  = new Date("Sat May 18 2018 23:59:59 GMT+0200 (CEST)") ;

window.setInterval( function()  {

    let current = new Date();

    if( current.getTime() > showDate.getTime() && current.getTime() < hideDate.getTime() )    {
        agendaBtn.style.display="block" ;
    }
    else    {
        agendaBtn.style.display="none" ;
    }
  
}, 1000) ;
