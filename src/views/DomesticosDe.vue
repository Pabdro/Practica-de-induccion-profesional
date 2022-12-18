<template>
    <div class="domesticos">
    <div className="container">
        <img src="https://www.conmishijos.com/uploads/bebes/salud/bebe-enfermo-470.jpg"/>
                    <h3 className="pab">Niñera<p class="info">
                        Servicio de niñera 287$ por mes, 15$ por dia y 2$ por hora
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn">Solicitar servicio</button>
                    </RouterLink>
                </div>
                <div className="container1">
                    <img src="https://www.sophiaonline.com.ar/wp-content/uploads/2015/06/81_3_1.jpg"/>
                    <h3 className="pab1">Cocinera<p class="info1">
                        Servicio de cocinera 287$ por mes y 15$ por dia
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn1">Solicitar servicio</button>
                    </RouterLink>
                </div>
                <div className="container2">
                    <img src="https://integralservicesltda.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-04-at-11.02.01-AM-3.jpeg"/>
                    <h3 className="pab2">Limpieza<p class="info2">
                        Servicio de limpieza 287$ por mes y 71$ por semana
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn2">Solicitar servicio</button>
                    </RouterLink>
                </div>
                <div className="container3">
                    <img src="https://misanimales.com/wp-content/uploads/2018/11/cuidador-perro.jpg?auto=webp&quality=45&width=1920&crop=16:9,smart,safe"/>
                    <h3 className="pab3">Cuidador de mascotas<p class="info3">
                        Servicio de cuidado de mascotas 2$ la hora
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
.domesticos {
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