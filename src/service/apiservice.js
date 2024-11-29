const { constants } = require("buffer");
const https = require("https");


function EnviarMensajeWhastapp(texto, number){
texto = texto.toLowerCase();
  if(texto.includes("Hola")){

    var data = JSON.stringify({

      "messaging_product": "whatsapp",    
      "recipient_type": "individual",
      "to": number,
      "type": "text",
      "text": {
          "preview_url": false,
          "body": "Hola, Como estas?, Bienvenido."
      }
    
    });
  }else if(texto=="1"){    

    var data = JSON.stringify({

      "messaging_product": "whatsapp",
      "recipient_type": "individual",
      "to": number,
      "type": "location",
      "location": {
          "latitude": "4.697663503883405",
          "longitude": "-74.09163361448572",
          "name": "Oficina Principal",
          "address": "Cra 74A N 80 -57 Minuto de Dios - Bogotá"
      }     
    });   
  
 
}else if(texto=="2"){

  var data = JSON.stringify({

    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": number,
    "type": "location",
    "location": {
        "latitude": "4.711115758952335",
        "longitude": "-74.0966194537505",
        "name": "Laboratorio FisoQuimico y Microbiologico",
        "address": "Calle 89 N 87A -50 Parque de Innovación Social (Piso 2)- Bogotá"
    }   
   
  });

}else if(texto=="3"){

  var data = JSON.stringify({

    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": number,
    "type": "location",
    "location": {
        "latitude": "4.831734920833216",
        "longitude": "-74.21568016196683",
        "name": "Centro de Investigación Coraflor",
        "address": "Km 1.5 Via la Cuesta - Subachoque"
    }
     
  });

   
}else if(texto=="4"){

  var data = JSON.stringify({

    "messaging_product": "whatsapp",    
    "recipient_type": "individual",
    "to": number,
    "type": "text",
    "text": {
        "preview_url": false,
        "body": "Información Biotecnologias"
    }
  });

}else if(texto=="5"){
  var data = JSON.stringify({

    "messaging_product": "whatsapp",    
    "recipient_type": "individual",
    "to": number,
    "type": "text",
    "text": {
        "preview_url": false,
        "body": "Información Laboratorios"        
    }
  });

  
}else if(texto=="6"){

  var data = JSON.stringify({

    "messaging_product": "whatsapp",    
    "recipient_type": "individual",
    "to": number,
    "type": "text",
    "text": {
        "preview_url": false,
        "body": "Información Centro de Investigación"        
    }

  });

}else if(texto=="7"){
   var data = JSON.stringify({

    "messaging_product": "whatsapp",    
    "recipient_type": "individual",
    "to": number,
    "type": "document",
    "document": {
        "link": "https://www.fundases.net/_files/ugd/133dba_49fe638fb87b4df0a1e1b5ef2f0f716c.pdf",
        "caption": "Hoja de Manejo EM"        
    }
  });


}else if(texto=="8"){

  var data = JSON.stringify({

    "messaging_product": "whatsapp",    
    "recipient_type": "individual",
    "to": number,
    "type": "text",
    "text": {
        "preview_url": false,
        "body": "Horario de Atención:\n - Oficina Principal: Lunes a Viernes - 7:00 am a 4 PM \n - Laboratorio FisicoQuimico y Microbiologico: Lunes a Viernes - 7:00 am a 4 PM \n - Centro deInvestigación: Lunes a Viernes - 7:00 am a 4 PM \n Sabado: 7:00 am a 1 PM"
    }
  
  });

}else if(texto=="9"){


}else if(texto.includes("gracias") || texto.includes("Adios")|| texto.includes("hasta luego")|| texto.includes("hasta pronto")|| texto.includes("bye")|| texto.includes("nos vemos")){

  var data = JSON.stringify({

    "messaging_product": "whatsapp",    
    "recipient_type": "individual",
    "to": number,
    "type": "text",
    "text": {
        "preview_url": false,
        "body": "Gracias por contactarnos."
    }
  
  });
   
}else {
  var data = JSON.stringify({

    "messaging_product": "whatsapp",    
    "recipient_type": "individual",
    "to": number,
    "type": "text",
    "text": {
        "preview_url": false,
        "body": "Bienvenido a Fundases \n Gracias por ponerte en contacto con nosotros.\n Por favor escoge el numero de opcion que necesitas: \n  1 Oficina Principal \n 2 Ubicación Laboratorio\n 3 Ubicación Centro Investivación Coraflor. \n 4. Biotecnologias. \n 5.Laboratorio \n 6.Centro Investigación.\n 7.Hoja de Manejo EM \n 8.Horario Atención.\n 9.Hablar con un Humano"
    }
  
  });
}

 

const options = {
  host: "graph.facebook.com",
  path: "/v15.0/1103/messages",
  method:"POST" ,
  body:data,
  headers: {
    "Content-Type" :"application/json",
    Autorization : "Bearer dhgjsdfERFCGFHJHVN461471"//Token

  }
};

const req = https.request(options,res =>{
  res.on("data", d=>{
    process.stdout.write(d)
  });  
});
req.write(data);
  req.end()

}

module.exports = {
  EnviarMensajeWhastapp
}