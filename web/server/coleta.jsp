<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <%
        out.print( "<legend>") ; 
        out.print("<Cadastro Concluido>") ;
        out.print("</legend>")

        String nome = request.getParameter("nome") ;
        out.print ( nome ) ;

        out.print("<button style="width: 200px; height: 200px;"><a href="/web/index.html"> voltar</a></button>") ; 

    %>
    
</body>
</html>

