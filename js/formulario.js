(function(){
  var formulario = document.formulario_registro;
  var elementos = formulario.elements;

  // funciones
  var validarInputs = function(){
    for (var i = 0; i < elementos.length; i++) {
      if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password"){
        if(elementos[i].value == 0) {
          console.log("El campo " +  elementos[i].name +"word"  + " esta incompleto");
          elementos[i].className = elementos[i].className + "error";
          return false;
        }else{
          elementos[i].className = elementos[i].className + "error " + "";
        }
      }
    }
    if(elementos.pass.value !== elementos.pass2.value){
      elementos.pass.value = "";
      elementos.pass2.value = "";
      elementos.pass.className = elementos.pass.className + "error";
      elementos.pass2.className = elementos.pass2.className + "error";
    }else{
      elementos.pass.className = elementos.pass.className.replace(" error", "");
      elementos.pass2.className = elementos.pass.className.replace(" error", ""); 
      return true;
    }
  };
  var validarRadios = function(){
    var opciones = document.getElementsByName("sexo");
    var resultado = false;

      for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].type == "radio" && elementos[i].name == "sexo"){
          for (var o = 0; o < opciones.length; o++){
            if (opciones[o].checked){
              resultado = true;
              break;  
            }
          }
          if (resultado == false) {
              elementos[i].parentNode.className = elementos[i].parentNode.className + " error"
              console.log("El campo sexo esta incompleto")
              return false;
          } else{
            elementos[i].parentNode.className = elementos[i].parentNode.className.replace("error", "")
            return true;
          }
        }  
      } 
  };
  
  var validarCheckbox = function(){
    var opciones = document.getElementsByName("terminos");
    var resultado = false;

      for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].type == "checkbox"){
          for (var o = 0; o < opciones.length; o++){
            if (opciones[o].checked){
              resultado = true;
              break;  
            }
          }
          if (resultado == false) {
              elementos[i].parentNode.className = elementos[i].parentNode.className + " error"
              console.log("Acepta los terminos y condiciones")
              return false;
          } else{
            elementos[i].parentNode.className = elementos[i].parentNode.className.replace("error", "")
            return true;
          }
        }  
      } 
  };

  var enviar = function(e){
    if (!validarInputs()) {
      console.log("Falto validar los input");
      e.preventDefault();
    }else if (!validarRadios()) {
      console.log("Falto validar los Radios");
      e.preventDefault();      
    }else if (!validarCheckbox()) {
      console.log("Falto validar los Checkbox");
      e.preventDefault(); 
    }else{
      console.log("Envia los datos correctamente");
      // comentar de abajo linea cuando este listo el formulario 
      e.preventDefault();
    };
  }

  // funciones blur y focus 

    var focusInput = function(){
      this.parentElement.children[1].className = "label active"
      this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error ", "")

    };

    var blurInput = function(){
      if (this.value <= 0){
        this.parentElement.children[0].className = "label"
        this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
      }
    };

  // eventos 

  formulario = addEventListener("submit", enviar)

  for (var i = 0; i < elementos.length; i++) {
      if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password"){
          elementos[i].addEventListener("focus", focusInput)
          elementos[i].addEventListener("blur", blurInput)
      }
  }

}());