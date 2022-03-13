
$(window).scroll(function () {
    let personsOffset = $(".persons").offset().top;
    let windowOffset =  $(window).scrollTop();
  if(windowOffset > personsOffset -100 ){
    $(".navbar").css("backgroundColor","rgba(0,0,0,0.7)");
    $(".navbar").css("padding-left","50px");
    $(".navbar").css("padding-right","50px");
    

    

  }
  else{
    $(".navbar").css("backgroundColor","transparent");
    $(".navbar").css("padding-left","0px");
    $(".navbar").css("padding-right","0px");
  

  }
});

 

 
