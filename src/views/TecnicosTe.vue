<template>
    <div class="tecnicos">
    <div className="container">
        <img src="https://www.tecsaqro.com.mx/wp-content/uploads/2019/04/diferencia-electricista-tecnico-electricista-1080x610.jpg"/>
                    <h3 className="pab">Electricista<p class="info">
                        Revision y cambio de termicos, limpieza de aislantes e intalaciones
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn">Solicitar Servicio</button>
                    </RouterLink>
                </div>
                <div className="container1">
                    <img src="https://www.executesystems.com/images/soporte-tecnico-empresas-grande.jpg"/>
                    <h3 className="pab1">Tecnico de dispositivos<p class="info1">
                        Arreglo de computadoras, impresoras, celulares y consolas
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn1">Solicitar Servicio</button>
                    </RouterLink>
                </div>
                <div className="container2">
                    <img src="https://cdn.euroinnova.edu.es/img/subidasEditor/qu%C3%A9%20son%20las%20telecomunicaciones-1603274304.webp"/>
                    <h3 className="pab2">Tecnico en telecomunicaciones<p class="info2">
                        Cambio de router, instalacion de antena para cable, otros
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn2">Solicitar Servicio</button>
                    </RouterLink>
                </div>
                <div className="container3">
                    <img src="https://img.freepik.com/fotos-premium/proceso-reparacion-telefonos-moviles-laboratorio-tecnico-reparando-telefono-inteligente-escritorio_106035-1399.jpg?w=740"/>
                    <h3 className="pab3">Tecnico de telefonia<p class="info3">
                        Instalacion y revision de telefono fijo y reparacion de dispositivos moviles
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn3">Solicitar Servicio</button>
                    </RouterLink>
                </div>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br><br><br><br>
            </div>
</template>
<style scoped>
.tecnicos {
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
    top: 57%;
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
    top: 57%;
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
    width: 70%;
    border-radius:0.8em;
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
    width: 70%;
    border-radius:0.8em;
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