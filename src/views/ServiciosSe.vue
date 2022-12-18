<!-- <template>
    <div>
        <h1>Pagina de servicios</h1>
        <nav>
        <RouterLink to="/automotriz"><button>Automotriz</button></RouterLink> O 
        <RouterLink to="/domesticos"><button>Domesticos</button></RouterLink> O 
        <RouterLink to="/tecnicos"><button>Tecnicos</button></RouterLink> O 
        <RouterLink to="/externos"><button>Externos</button></RouterLink>
        </nav>
    </div>
</template> -->
<template>
    <div class="servicios">
        <h1>Pagina de servicios</h1>
        <div class="button-container">
        <img alt="hola" src="../assets/automotriz.png">
        <RouterLink to="/automotriz">Automotriz</RouterLink>
        </div>
        <div class="button1-container">
        <img alt="hola" src="../assets/domesticos.png">
        <RouterLink to="/domesticos">Domesticos</RouterLink>
        </div>
        <div class="button2-container">
        <img alt="hola" src="../assets/tecnicos.png">
        <RouterLink to="/tecnicos">Tecnicos</RouterLink>
        </div>
        <div class="button3-container">
        <img alt="hola" src="../assets/externos.png">
        <RouterLink to="/externos">Externos</RouterLink>
        </div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br>
    </div>
</template>
<style scoped>
.servicios {
    background-color: springgreen;
}
.button-container{
    position: absolute;
    width: 300px;
    height: 450px;
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