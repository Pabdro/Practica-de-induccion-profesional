<template>
    <div class="vehiculos">
    <div className="container">
        <img src="https://d1eip2zddc2vdv.cloudfront.net/dphotos/750x400/13889-1528194727.jpg"/>
                    <h3 className="pab">Mazda MX-5<p class="info">
                        hermoso auto descapotable a tan solo 27000 $
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn">COMPRAR</button>
                    </RouterLink>
                </div>
                <div className="container1">
                    <img src="https://image.made-in-china.com/43f34j00dfHklLUGsioR/Bafang-MID-Drive-Motor-16ah-Lithium-Battery-Mountain-E-Bike-Electric-Bicycle-Dropship.webp"/>
                    <h3 className="pab1">Bafang MID<p class="info1">
                        Bicicleta electrica a solo 1000 $
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn1">COMPRAR</button>
                    </RouterLink>
                </div>
                <div className="container2">
                    <img src="https://a.mcdn.es/mnet/contents/media/resources/2022/3/1188260.jpg/656x369cut/"/>
                    <h3 className="pab2">Benelli TRK 502<p class="info2">
                        Moto calidad precio a tan solo 6000 $
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn2">COMPRAR</button>
                    </RouterLink>
                </div>
                <div className="container3">
                    <img src="https://compratuskate.online/wp-content/uploads/2022/06/longboard-fish-500-negro.jpg"/>
                    <h3 className="pab3">Longboard Fish 500<p class="info3">
                        Tabla de skate a tan solo 59.99 $
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn3">COMPRAR</button>
                    </RouterLink>
                </div>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br><br><br><br><br><br><br><br>
            </div>
</template>
<style scoped>
.vehiculos {
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
    top: 15%;
    left: 15%;
    font-size: xx-large;
    color: white;
    background-color: black;
    opacity: 0.8;
    border-radius:0.8em;
    width: 70%;
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
    top: 15%;
    left: 15%;
    font-size: xx-large;
    color: white;
    background-color: black;
    opacity: 0.8;
    border-radius:0.8em;
    width: 70%;
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