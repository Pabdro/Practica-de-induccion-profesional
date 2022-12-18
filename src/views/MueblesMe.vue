<template>
  <div class="tecnologia">
  <div className="container">
      <img src="https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/m/0/m01148_1.jpg"/>
                  <h3 className="pab">Escritorio<p class="info">
                      Escritorio util a 172$ con espacio de almacenamiento
                  </p></h3>
                  <RouterLink to="/comprado">
                      <button className="btn">COMPRAR</button>
                  </RouterLink>
              </div>
              <div className="container1">
                  <img src="https://tuacasa.com.bo/40132-large_default/mesa-comedor-orlo.jpg"/>
                  <h3 className="pab1">Mesa Comedor Orlo<p class="info1">
                      Mesa de comedor a solo 300$
                  </p></h3>
                  <RouterLink to="/comprado">
                      <button className="btn1">COMPRAR</button>
                  </RouterLink>
              </div>
              <div className="container2">
                  <img src="https://falabella.scene7.com/is/image/Falabella/10617196_1?wid=1500&hei=1500&qlt=70"/>
                  <h3 className="pab2">Sillon Roma 3C<p class="info2">
                      Sillon super comodo para tres personas a 450$
                  </p></h3>
                  <RouterLink to="/comprado">
                      <button className="btn2">COMPRAR</button>
                  </RouterLink>
              </div>
              <div className="container3">
                  <img src="https://scontent.flpb3-1.fna.fbcdn.net/v/t45.5328-4/313021146_5679138475474134_651049011462755998_n.jpg?stp=c0.0.225.225a_dst-jpg_p75x225&_nc_cat=101&ccb=1-7&_nc_sid=c48759&_nc_ohc=XZ8wNqgeqhgAX-5oI0V&_nc_ht=scontent.flpb3-1.fna&oh=00_AfDvs4Y2Eh_hkmpPFxjKkacjDtN2X4sBS8vNNMwIpAmojg&oe=63A2B9BE"/>
                  <h3 className="pab3">Juego de espejos<p class="info3">
                      Juego de tres espejos a 57$
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