<template>
    <div class="tecnologia">
    <div className="container">
        <img src="https://m.media-amazon.com/images/I/415TLA0m5wL._SL500_.jpg"/>
                    <h3 className="pab">Xiaomi 11 Lite 5G NE<p class="info">
                        Se vende xiaomi a solo 370$ no negociable
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn">COMPRAR</button>
                    </RouterLink>
                </div>
                <div className="container1">
                    <img src="https://www.pcfactory.cl/public/foto/44998/2_1000.jpg?t=1650296485000"/>
                    <h3 className="pab1">Laptop Asus<p class="info1">
                        Laptop X415 14" FHD Intel i3-1005G1 8GB 256GB SSD Windows 11 Slate Grey X415JA-EB1756W a 341$
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn1">COMPRAR</button>
                    </RouterLink>
                </div>
                <div className="container2">
                    <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/21qY5cjvL9L._AC_.jpg"/>
                    <h3 className="pab2">Lenovo Mouse<p class="info2">
                        Mouse compacto con cable 400 USB-C a tan solo 10$
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn2">COMPRAR</button>
                    </RouterLink>
                </div>
                <div className="container3">
                    <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71NaMlQ3WpL._SX522_.jpg"/>
                    <h3 className="pab3">PlayStation 4<p class="info3">
                        PlayStation 4 Slim 1TB a 280$
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
.tecnologia {
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
    top: 10%;
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