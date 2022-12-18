<template>
    <div class="externos">
    <div className="container">
        <img src="https://i0.wp.com/jardineropaisajista.com/wp-content/uploads/2012/08/jardineropaisajista-com__que-significa-ser-un-jardinero-scaled.jpg?resize=848%2C480&ssl=1"/>
                    <h3 className="pab">Jardineria<p class="info">
                        Corte y arreglo de cesped, 1 vez por semana 21$ y por mes 45$
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn">Solicitar servicio</button>
                    </RouterLink>
                </div>
                <div className="container1">
                    <img src="https://www.diariodequeretaro.com.mx/incoming/vtqzpf-1a-albanil-hcr-3my19.jpg/alternates/LANDSCAPE_768/1A%20ALBANIL%20HCR%203MY19.JPG"/>
                    <h3 className="pab1">Albañil<p class="info1">
                        Trabajo de albañil, arreglo de techos, creacion de muros, otros
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn1">Solicitar servicio</button>
                    </RouterLink>
                </div>
                <div className="container2">
                    <img src="https://www.arqhys.com/articulos/fotos/articulos/Plomero-Fontanero-300x229.jpg"/>
                    <h3 className="pab2">Plomero<p class="info2">
                        Arreglo de tuberias, destapa caños, otros
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn2">Solicitar servicio</button>
                    </RouterLink>
                </div>
                <div className="container3">
                    <img src="https://www.elsoldecordoba.com.mx/incoming/avkelc-carpintero-misantla/alternates/LANDSCAPE_768/Carpintero%20Misantla"/>
                    <h3 className="pab3">Carpintero<p class="info3">
                        Creacion de puertas, muebles, sillas, otros
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn3">Solicitar servicio</button>
                    </RouterLink>
                </div>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br><br><br><br>
            </div>
</template>
<style scoped>
.externos {
    background-color: aqua;
}
.info{
    font-size: large;
}
.info1{
    font-size: large;
}
.info2{
    font-size: large;
}
.info3{
    font-size: large;
}
.container {
    position: absolute;
    width: 500px;
    height: 400px;
    padding: 53px;
    display: inline-block;
    margin: 1px;
    left: 160px;
    top: 15%;
    background-color: aquamarine;
}
.container img {
    width: 500px;
    height: 320px;
}
.container .pab {
    position: absolute;
    border: none;
    background: none;
    cursor: text;
    top: 10%;
    left: 15%;
    font-size: xx-large;
    color: white;
    background-color: black;
    opacity: 0.8;
    width: 70%;
    border-radius:0.8em;
}
.container .btn {
    position: absolute;
    top: 59%;
    left: 25%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: rgb(28, 58, 136);
    color: white;
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}
.container .btn:hover {
    background-color: rgb(77, 121, 231);
}
.container1 {
    position: absolute;
    width: 500px;
    height: 400px;
    padding: 53px;
    display: inline-block;
    margin: 1px;
    left: 700px;
    top: 15%;
    background-color: aquamarine;
}
.container1 img {
    width: 500px;
    height: 320px;
}
.container1 .pab1 {
    position: absolute;
    border: none;
    background: none;
    cursor: text;
    top: 10%;
    left: 15%;
    font-size: xx-large;
    color: white;
    background-color: black;
    opacity: 0.8;
    width: 70%;
    border-radius:0.8em;
}
.container1 .btn1 {
    position: absolute;
    top: 59%;
    left: 25%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: rgb(28, 58, 136);
    color: white;
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}
.container1 .btn1:hover {
    background-color: rgb(77, 121, 231);
}
.container2 {
    position: absolute;
    width: 500px;
    height: 300px;
    padding: 53px;
    display: inline-block;
    margin: 1px;
    left: 160px;
    top: 65%;
    background-color: aquamarine;
}
.container2 img {
    width: 500px;
    height: 320px;
}
.container2 .pab2 {
    position: absolute;
    border: none;
    background: none;
    cursor: text;
    top: 15%;
    left: 15%;
    font-size: xx-large;
    color: white;
    background-color: black;
    opacity: 0.8;
    border-radius:0.8em;
    width: 70%;
}
.container2 .btn2 {
    position: absolute;
    top: 85%;
    left: 25%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: rgb(28, 58, 136);
    color: white;
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}
.container2 .btn2:hover {
    background-color: rgb(77, 121, 231);
}
.container3 {
    position: absolute;
    width: 500px;
    height: 300px;
    padding: 53px;
    display: inline-block;
    margin: 1px;
    left: 700px;
    top: 65%;
    background-color: aquamarine;
}
.container3 img {
    width: 500px;
    height: 320px;
}
.container3 .pab3 {
    position: absolute;
    border: none;
    background: none;
    cursor: text;
    top: 15%;
    left: 15%;
    font-size: xx-large;
    color: white;
    background-color: black;
    opacity: 0.8;
    border-radius:0.8em;
    width: 70%;
}
.container3 .btn3 {
    position: absolute;
    top: 85%;
    left: 25%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: rgb(28, 58, 136);
    color: white;
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}
.container3 .btn3:hover {
    background-color: rgb(77, 121, 231);
}
</style>