<html lang="en">
<head>
    <meta charset="utf-8"/>
    <title>Forms </title>
    <script type="text/javascript">

            function write_name() {
                var welcome_tori = document.getElementById('welcome');
                var name =document.getElementById('name');

                welcome_tori.innerHTML = "Hello " + name.value + "!";
            }
    
    </script>
</head>  
<body>
    <p id = "welcome"> </p> 

    <form>
        what is your name: <input type="text" id="name" /><br/>
        <input type="button" value="Done" onclick="write_name();" />
    </form>
</body>	

</html>