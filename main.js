function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  //Coloque o link do teachable machine
    classifier = ml5.soundClassifier('???', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    //O código abaixo deixa as cores aleatórias utilizando as cores RBG, porém apenas a leta 'R', está sendo programada. Tente programar a letra 'B' e 'G'
    RGB_color_R = Math.floor(Math.random() * 255) + 1;
    ???
    ???

//Utilize o código que altera o HTML utilizando JavaScrit

    document.getElementById("result_label").??? = 'Posso ouvir - '+ results[0].label;
    document.getElementById("result_confidence").??? = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
    
    //Utilize o código 'style.color' para mostrar as cores que você programou aciima
    
    document.getElementById("result_label").style.color = "rgb("+RGB_color_R+","+???","+???+")";
    document.getElementById("result_confidence").style.color = "rgb(???)";

   
  }
}
