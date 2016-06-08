<?php 
	function valid_email($email){
		return filter_var($email, FILTER_VALIDATE_EMAIL);
	}
//Déclaration des variables 
	$email = trim(strip_tags($_POST['email']));
    //Validation des données
    if (valid_email($email) == false){ 
    	echo'1';
    };
    if (valid_email($email) == true){ 
			require 'PHPMailer-master/PHPMailerAutoload.php';
			
			$mail = new PHPMailer;
			$mail->isSMTP();
			$mail->Host = 'smtp.gmail.com';
			$mail->SMTPAuth = true;
			$mail->Username = 'tom.hello.app@gmail.com';
			$mail->Password = 'olaolaola25';

			$mail->From = "tom.hello.app@gmail.com";
			$mail->FromName = "Tom";
                 
			$mail->Port = 587;                                   

			$mail->addAddress($email);

			
			$mail->isHTML(true);
			$mail->Body = file_get_contents('mail.html');
			$mail->Subject = 'Bonjour !';
			$mail->AltBody = "Hey, ravi de vous accueillir nous utilisateur Beta. Nous allons pouvoir discuter et visiter ! Vous êtes prêt ? Rendez vous sur l'application mobile. A tout de suite! Tom";

			if(!$mail->send()) {
				echo'2';
			} else {
				echo'2';
			}

    };
      
?>
