<?php
        //En el destino colocar el correo alque quieres que lleguen los datos del contacto de tu formulario
 $destino = "nosecreoque@gmail.com
";
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telef = $_POST["telef"];
    $asunto = $_POST["asunto"];
    // $contenido = "Nombre: " . $nombre . "\nApellido: " . $apellido . "\nCorreo: " . $email . "\nNúmero: " . $numero . "\nAsunto: " . $mensaje;
    mail($destino, "Contacto", $contenido);
    header("Location: A_Donde_Lo_Quieras_Redireccionar");
//Esto es opcional, aqui pueden colocar un mensaje de "enviado correctamente" o redireccionarlo a algun lugar
?>

<!-- <!DOCTYPE html>
<html>
<head>
 <title>Mail Form</title>
</head>
<body>
 <form id="contactform" action="correo.php" name="contactform" method="POST">
    <fieldset>
        <div>
            <input type="text" name="nombre" id="first_name" placeholder="Nombre">
        </div>
        <div>
            <input type="text" name="apellido" id="last_name" placeholder="Apellido Paterno">
        </div>
        <div>
            <input type="email" name="email" id="email" placeholder="Email">
        </div>
        <div>
            <input type="text" name="numero" id="phone" placeholder="Teléfono">
        </div>
        <div>
            <textarea class="form-control" name="mensaje" id="comments" rows="6"></textarea>
        </div>
        <input type="submit" name="enviar" value="Enviar">
    </fieldset>
</form>
</body>
</html> -->