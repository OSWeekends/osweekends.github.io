
const agendaBtn = document.querySelector(".agendaBtn") ;
const showDate  = new Date("Thu Feb 10 2018 08:00:00 GMT+0100 (CET)")
const hideDate  = new Date("Thu Feb 10 2018 18:00:00 GMT+0100 (CET)")

window.setInterval( function()  {

    let current = new Date();

    if( current.getTime() > showDate.getTime() && current.getTime() < hideDate.getTime() )    {
        agendaBtn.style.display="block" ;
    }
    else    {
        agendaBtn.style.display="none" ;
    }
  
}, 1000);