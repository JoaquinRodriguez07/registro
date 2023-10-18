// Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos


(function () {
    'use strict'
  
    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    var forms = document.querySelectorAll('.needs-validation')
  
    // Bucle sobre ellos y evitar el envío
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated');
          verificarTerminos()
          passCheck()
        }, false)
      })
  })()

  


  function verificarTerminos(){
    let check = document.getElementById('check');
    let terminos = document.getElementById('terminos')
  if(!terminos.checked){
    alert('Por favor, acepte los cojonudos terminos');
    check.classList.add('alert alert-danger');
    return false;
    
  }
  document.getElementById('btn').submit();
  }


  function passCheck(){

    let pass1 = document.getElementById('password1')
    let pass2 = document.getElementById('password2')
    let 

    if (pass1.value == pass2.value){
        pass1.classList.add('was-validated');
        pass2.classList.add('was-validated');
    }
    
  }