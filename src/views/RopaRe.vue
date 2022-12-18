<template>
    <div class="ropa">
    <div className="container">
        <img src="https://purecotton.com.bo/163-product_zoom/polera-tipica-jd-bolivia.jpg"/>
                    <h3 className="pab">Polera Jersey Típica<p class="info">
                        Polera con escrito boliviano a 19$
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn">COMPRAR</button>
                    </RouterLink>
                </div>
                <div className="container1">
                    <img src="https://static.pullandbear.net/2/photos//2023/V/0/1/p/8674/466/800/03/8674466800_2_11_8.jpg?t=1671112515013&imwidth=375"/>
                    <h3 className="pab1">Pantalon Piel<p class="info1">
                        Pantalon de calidad a solo 40 $
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn1">COMPRAR</button>
                    </RouterLink>
                </div>
                <div className="container2">
                    <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81QOv0KVJYL._AC_UX679_.jpg"/>
                    <h3 className="pab2">Guantes impermeable<p class="info2">
                        Guantes impermeables con aislamiento a 30$
                    </p></h3>
                    <RouterLink to="/comprado">
                        <button className="btn2">COMPRAR</button>
                    </RouterLink>
                </div>
                <div className="container3">
                    <img src="https://img01.ztat.net/article/spp-media-p1/971d8b5d88e54ed685b7f7621683e23b/b15ab0fbaa1a49eaa75634cd4ccf6874.jpg?imwidth=762&filter=packshot"/>
                    <h3 className="pab3">Sudadera<p class="info3">
                        Sudadera de negro a solo 40$
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
.ropa {
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
    width: 70%;
    opacity: 0.8;
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