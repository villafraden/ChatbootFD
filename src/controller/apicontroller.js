const enviarmensaje = require("../service/apiservice");


const verificar=(req, res)=>{

try {

    var tokenserviclientefdses = "EAAIBtRaQvw4BO7bEuQMCe8zGVw9ZAmcGwTRKZAbIwxksmZCqMp1F613acNC0LShV5Bc5tXjcsboR6nhwC6n3NAcBvoDDnQYKONxTPeSnblQkiZCx0PAjTx6enAW1nygN7RfM2ZAom03NJGSuhFJ56R0RYoHIhZB5h4jmPrle09tKdnDAMR5h4Upa4LZCeb8NQSuesW9pcCgngXbwLQhvaUJHOgZAdCEZD"
    var token = req.query["hub.verify_token"];
    var challenge = req.query["hub.challenge"];

    if(challenge != null && token != null && token == tokenserviclientefdses ){
      res.send(challenge);
    }else{
      res.status(400).send();
    }

     res.send(challenge);
     console.log(req);

    }catch(e){
      res.status(400).send();

    }

 res.send("Verificado");
 console.log("Verificado Consola");

}

const recibir=(req, res)=>{
  try {
    var entry = (req.body["entry"])[0];
    var changes = (entry["changes"])[0];
    var value = changes["value"];
    var objetoMensaje = value["messages"];


  if(typeof objetoMensaje != undefined)
  {
   
    
    var messages = objetoMensaje[0];
    var  texto = messages["text"]["body"];
    var number = messages["from"];

    console.log(entry);
    console.log(changes);
    console.log(objetoMensaje);

    /*console.log("Enviado desde: "+ number + "El texto es el siguiente: "+ texto);*/
    enviarmensaje.EnviarMensajeWhastapp(texto, number);

  }
   
    res.send("EVENT_RECEIVED");

    }catch(e){
      console.log(e);
     res.send("EVENT_RECEIVED");


    }
  
  console.log("Recibido Consola");
}

module.exports = {
  verificar, 
  recibir
}