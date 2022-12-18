<template>
    <div class="productos">
        <h1>Pagina de productos</h1>
        <div class="button-container">
        <img alt="hola" src="../assets/vehiculosV.png">
        <RouterLink to="/vehiculos">Vehiculos</RouterLink>
        </div>
        <div class="button1-container">
        <img alt="hola" src="../assets/muebles.png">
        <RouterLink to="/muebles">Muebles</RouterLink>
        </div>
        <div class="button2-container">
        <img alt="hola" src="../assets/ropa.png">
        <RouterLink to="/ropa">Ropa</RouterLink>
        </div>
        <div class="button3-container">
        <img alt="hola" src="../assets/tecnologia.png">
        <RouterLink to="/tecnologia">Tecnologia</RouterLink>
        </div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br>
        <!-- <nav>
        <RouterLink to="/vehiculos"><button>Vehiculos</button></RouterLink> O 
        <RouterLink to="/muebles"><button>Muebles</button></RouterLink> O 
        <RouterLink to="/ropa"><button>Ropa</button></RouterLink> O 
        <RouterLink to="/tecnologia"><button>Tecnologia</button></RouterLink>
    </nav> -->
    </div>
</template>
<style scoped>
.productos {
    background-color: chocolate;
}
.button-container{
    position: absolute;
    width: 300px;
    height: 600px;
    padding: 53px;
    display: inline-block;
    margin: 1px;
    left: 80px;
    top: 20%;
}
.button-container a{
position: absolute;
top: 80px;
left: 100px;
height: 10px;
width: 150px;
bottom:4em;
right:4em;
background-color:rgb(4, 79, 4);
border-radius:1.5em;
color:white;
text-transform:uppercase;
padding:1em 1.5em;
text-decoration: none;
}
.button-container a:hover{
background-color:green;
cursor:pointer;
color:white;
}
.button-container img {
    width: 300px;
    height: 550px;
}
.button1-container{
    position: absolute;
    width: 300px;
    height: 600px;
    padding: 53px;
    display: inline-block;
    margin: 1px;
    left: 400px;
    top: 20%;
}
.button1-container a{
position: absolute;
top: 80px;
left: 100px;
height: 10px;
width: 150px;
bottom:4em;
right:4em;
background-color:rgb(4, 79, 4);
border-radius:1.5em;
color:white;
text-transform:uppercase;
padding:1em 1.5em;
text-decoration: none;
}
.button1-container a:hover{
background-color:green;
cursor:pointer;
color:white;
}
.button1-container img {
    width: 300px;
    height: 550px;
}
.button2-container{
    position: absolute;
    width: 300px;
    height: 600px;
    padding: 53px;
    display: inline-block;
    margin: 1px;
    left: 730px;
    top: 20%;
}
.button2-container a{
position: absolute;
top: 80px;
left: 100px;
height: 10px;
width: 150px;
bottom:4em;
right:4em;
background-color:rgb(4, 79, 4);
border-radius:1.5em;
color:white;
text-transform:uppercase;
padding:1em 1.5em;
text-decoration: none;
}
.button2-container a:hover{
background-color:green;
cursor:pointer;
color:white;
}
.button2-container img {
    width: 300px;
    height: 550px;
}
.button3-container{
    position: absolute;
    width: 300px;
    height: 600px;
    padding: 53px;
    display: inline-block;
    margin: 1px;
    left: 1050px;
    top: 20%;
}
.button3-container a{
position: absolute;
top: 80px;
left: 100px;
height: 10px;
width: 150px;
bottom:4em;
right:4em;
background-color:rgb(4, 79, 4);
border-radius:1.5em;
color:white;
text-transform:uppercase;
padding:1em 1.5em;
text-decoration: none;
}
.button3-container a:hover{
background-color:green;
cursor:pointer;
color:white;
}
.button3-container img {
    width: 300px;
    height: 550px;
}
</style>