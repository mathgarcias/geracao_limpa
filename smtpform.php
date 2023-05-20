<link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="css/style.css"/>
 <link rel="stylesheet" type="text/css" href="css/responsive.css"/>
 <style>
 		FORM input {
 			    width: 99%;
    				padding: 10px;
    				margin: 7px;
    				color: #666;
 		}
 		FORM textarea {
 			width: 99%;
    		margin: 7px;
    		padding: 14px;
 		}
 </style>
<?php
# Verifica o método pelo qual a página foi chamada
if(strtolower($_SERVER['REQUEST_METHOD']) == "post"){

  ##---------------------------------------------------
  ##  Envio de Emails pelo SMTP Autênticado usando PEAR
  ##---------------------------------------------------
  # Mais detalhes sobre o PEAR: 
  #   http://pear.php.net/
  #
  # Mais detalhes sobre o PEAR Mail:
  #   http://pear.php.net/manual/en/package.mail.mail-mime.php
  ##---------------------------------------------------
  
  	# Faz o include do PEAR Mail e do Mime.
	include ("Mail.php");
	include ("Mail/mime.php");

	#E-mail de destino. Caso seja mais de um destino, crie um array de e-mails.
	$recipients = 'contato@geracaolimpa.com.br';

	# Cabeçalho do e-mail.
	$headers = array
	(
      'From'    => "contato@geracaolimpa.com.br", # O 'From' é *OBRIGATÓRIO*.
	  'Reply-To' => $_POST['email'], # Responder e-mail para um determinado destinatário
	  'To'      => $recipients,
      'Subject' => 'Contato através do site' # Título do e-mail
	);

	# Define o tipo de final de linha.
	$crlf = "\r\n";

	# Inicio do corpo da Mensagem e texto e em HTML.
	$html = "<HTML><BODY><font color=blue>";
  
	# Loop para enviar os campos por e-mail.
	foreach($_POST as $campo => $valor)
	{	
		if (stristr($valor,"Content-Type")) {
		header("HTTP/1.0 403 Forbidden");
		exit;
		}
		
		if($campo != 'redirect')
		{
		$html .= "<br>---------------------------<br>";
		$html .= ucfirst($campo) . " = $valor";
		}
		
	}
	
	# Fim do corpo da Mensagem e do texto em HTML.
	$html .= "<br>---------------------------";
	$html .= "</font></BODY></HTML>";
    
	# Instancia a classe Mail_mime.
	$mime = new Mail_mime($crlf);

	# Coloca o HTML no email
	$mime->setHTMLBody($html);

	# Procesa todas as informações.
	$body = $mime->get();
	$headers = $mime->headers($headers);

	# Parâmetros para o SMTP. *OBRIGATÓRIO*
	$params = array
	(
      'auth' => true, # Define que o SMTP requer autenticação.
      'host' => 'smtp.geracaolimpa.com.br', # Servidor SMTP
      'username' => 'contato=geracaolimpa.com.br', # Usuário do SMTP
      'password' => 'geracaolimpa1234' # Senha do seu MailBox.
    );
    
	# Define o método de envio
	$mail_object =& Mail::factory('smtp', $params);

	# Envia o email. Se não ocorrer erro, retorna TRUE caso contrário, retorna um
	# objeto PEAR_Error. Para ler a mensagem de erro, use o método 'getMessage()'.
	$result = $mail_object->send($recipients, $headers, $body);
	if (PEAR::IsError($result))
	{
	# Caso apresente erro no envio do e-mail exibe a mensagem abaixo
	echo "ERRO ao tentar enviar o email. (" . $result->getMessage(). ")";
	}
	else
	{
	# Caso o envio seja realizado com sucesso, o usuário será redirecionado para o valor da variável $redirect
  	$redirect = $_POST['redirect'];
    header("Location: $redirect");
	exit;
	}

}
else
{
#Caso a página seja chamada por outro método
?>
<div class="container">
				<FORM ACTION="" METHOD="POST">
					<div class="row">
                                    <div class="col-12">
                                        <INPUT TYPE="text" NAME="nome" placeholder="Nome">
                                    </div>
                                    <div class="col-12">
                                        <INPUT TYPE="text" placeholder="Email" NAME="email">
                                    </div>
                                    <div class="col-12">
                                        <INPUT TYPE="text" NAME="telefone" placeholder="Telefone" >
                                    </div>
                                   
                                    <div class="col-12">
                                       
                                        <TEXTAREA NAME="mensagem" placeholder="Digite aqui sua mensagem" ROWS="8" COLS="20"></TEXTAREA>
                                    </div>
                                    <div class="col-lg-12" style="padding: 0px;">
	    								<INPUT TYPE="hidden" NAME="redirect" VALUE="https://www.geracaolimpa.com.br/sucesso.php">
	    								<INPUT TYPE="submit" VALUE="Enviar">
	    								
                                      
                                    </div>
                    </div>  
				</FORM>
</div>
<?php } ?>
 <script type="text/javascript" src="js/bootstrap.min.js"></script>