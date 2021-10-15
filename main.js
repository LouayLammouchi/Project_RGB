
//this is our function who generate the rgb randomly the output will be in this for (11,11,11)
function generate_rgb(){
    return '('+ Math.floor(Math.random()*266)+
     "," + Math.floor(Math.random()*266)+" ," +
      Math.floor(Math.random()*266) + " )"

} 
 
// here we created the array who will contain the different rgb for the 6 numbers
  var arrRGB = [] ;
  //the resetbutton will empty the array 
$("#reset").click(function(){
     arrRGB = [] 
    
  })
// after the reset every color will be regenerated automatically and his value will be added in the array
$("#reset").click(function(){
    var guess1 = generate_rgb() ;
    arrRGB.push(guess1)
     ;
    $("#color1").css("color","rgb"+guess1);
  })

  $("#reset").click(function(){
    var guess2 = generate_rgb() ;
    arrRGB.push(guess2)
    $("#color2").css("color","rgb"+guess2) ;
  })

  $("#reset").click(function(){
    var guess3 = generate_rgb() ; 
    arrRGB.push(guess3) ;
    $("#color3").css("color","rgb"+guess3)
  })
  $("#reset").click(function(){
    var guess4 = generate_rgb() ;
    arrRGB.push(guess4) ;
    $("#color4").css("color","rgb"+guess4)
  })
  $("#reset").click(function(){
    var guess5 = generate_rgb() ;
    arrRGB.push(guess5)
    $("#color5").css("color","rgb"+guess5)
  })
  $("#reset").click(function(){
    var guess6 = generate_rgb() ;
    arrRGB.push(guess6)
    $("#color6").css("color","rgb"+guess6)
  })
  var score = 0 ;
  var s7i7; //
 var reb7 = false ;// if you win or no
 var dgueza ; // the choice of the player
 // the submitt will take the value
 $("#submitt").click(function(){
  dgueza = document.getElementById("dagueza").value
})
//just to see the array
 $("#reset").click(function(){
  console.log(arrRGB)
  })
//here we will take a rgb value randomly from the array , it will be the correct answer ;
  $("#reset").click(function(){
    s7i7= Math.floor(Math.random()*6) ;
    console.log(s7i7+1) // because we wanna see the correct answer we added 1 th choices start from 1 and the index of the array from 0
     

   
  
      $("#RGBCode").text(arrRGB[s7i7]);
  
    }) 
    
/// now we campare the choice and the correct answer and see if he won or not
    $("#submitt").click(function(){
      if (dgueza==s7i7+1) {
        reb7 = true
        score ++
        $("#RGBCode").text("YOU WIN !!!")
        document.getElementById("WIN").play()
        $("#score"). text( "SCORE : " + score)
      }
      else {
        $("#RGBCode").text("YOU LOSE !!! the right number was " + (s7i7 +1) )
        document.getElementById("LOSE").play()
      }
      
    })
  

   




