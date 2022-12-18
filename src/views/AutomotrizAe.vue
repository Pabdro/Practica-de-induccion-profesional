<template>
    <div class="automotriz">
    <div className="container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ-hUCWSis1hy0rquW_q2skukWeyMM_bAlpA&usqp=CAU"/>
                    <h3 className="pab">Chapista<p class="info">
                        Eliminacion de abolladuras, pulidora de pintura, colocacion de puertas, otros
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn">Solicitar servicio</button>
                    </RouterLink>
                </div>
                <div className="container1">
                    <img src="https://noticias.coches.com/wp-content/uploads/2015/02/taller-mecanico.jpg"/>
                    <h3 className="pab1">Mantenimiento<p class="info1">
                        Flujo de aceite, revision de motor, liquidos del auto, otros
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn1">Solicitar servicio</button>
                    </RouterLink>
                </div>
                <div className="container2">
                    <img src="https://www.campustraining.es/wp-content/uploads/2021/09/electromecanica-vehiculos-requisitos-715x495.jpg.webp"/>
                    <h3 className="pab2">Electromecanico<p class="info2">
                        Revision de bateria, revision de luces y radio, recarga de bateria, otros
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn2">Solicitar servicio</button>
                    </RouterLink>
                </div>
                <div className="container3">
                    <img src="https://www.debate.com.mx/__export/1627865564206/sites/debate/img/2021/08/01/para_gamadiel_de_guamxchil_ser_llantero_es_un_trabajo_digno_crop1627865467313.jpeg_172596871.jpeg
                    "/>
                    <h3 className="pab3">Llantero<p class="info3">
                        Se infla llantas, parcheria de llanta ponchada, cambio de llantas, otros
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
.automotriz {
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
    top: 55%;
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
    top: 55%;
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