
const agendaBtn = document.querySelector(".agendaBtn") ;
const showDate  = new Date("Feb 8 2018 21:22:00 GMT+0100 (CET)")
const hideDate  = new Date("Feb 8 2018 21:22:10 GMT+0100 (CET)")

window.setInterval( function()  {

    let current = new Date();

    if( current.getTime() > showDate.getTime() && current.getTime() < hideDate.getTime() )    {
        agendaBtn.style.display="block" ;
    }
    else    {
        agendaBtn.style.display="none" ;
    }
  
}, 1000);