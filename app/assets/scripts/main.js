
         $(".main-nav li:first-child").hover(function(e) {
           $('.banner__side-offer').fadeIn(800);
          
         });

         $(".banner__side-offer__close").click(()=>{
              // console.log(e);
              $('.banner__side-offer').css({display: 'none'});

         })
