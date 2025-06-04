var obj = document.getElementById('drawing'); // Получить объект холста
  if (obj.getContext){ // Проверить поддерживает ли браузер возможность рисования на холсте
    var ctx = obj.getContext('2d');
    // тут рисуем .....
    body1 = [{'x': 210,'y': 240}, {'x': 250, 'y': 290}, {'x': 290,'y': 240}, {'x': 250,'y': 140}, {'x': 210,'y': 240}, ];
    body2 = [{'x': 210,'y': 280},{'x': 250,'y': 200},{'x': 290,'y': 280}, {'x': 250, 'y': 500}, {'x': 210,'y': 280} ];
      head1 = [{'x': 250,'y': 160},{'x': 220,'y': 140},{'x': 210,'y': 180}, {'x': 280, 'y': 140}, {'x': 290,'y': 180}, {'x': 250,'y': 250}];
      wing1 = [{'x': 290,'y': 240},{'x': 380,'y': 450},{'x': 360,'y': 450},{'x': 330,'y': 470},{'x': 260,'y': 380},{'x': 230,'y': 290},{'x': 290,'y': 240},{'x': 210,'y': 240},{'x': 120,'y': 450},{'x': 140,'y': 450},{'x': 170,'y': 470}, {'x': 240, 'y': 380}, {'x': 230,'y': 290}, {'x': 290,'y': 240}];
  leg1 = [{'x': 250,'y': 240},{'x': 330,'y': 250},{'x': 400,'y': 400},{'x': 170,'y': 250},{'x': 100,'y': 400},{'x': 270,'y': 230},{'x': 330,'y': 230},{'x': 430,'y': 250},{'x': 460,'y': 290},{'x': 230,'y': 230},{'x': 170,'y': 230}, {'x': 70, 'y': 250}, {'x': 40,'y': 290}, {'x': 360,'y': 110}, {'x': 400,'y': 100}, {'x': 140,'y': 110}, {'x': 100,'y': 100}];
   eyes1 = [{'x': 230,'y': 180},{'x': 270,'y': 180}];
    
    
       kr = [{'x': 290,'y': 240},{'x': 380,'y': 450},{'x': 360,'y': 450},{'x': 330,'y': 470},{'x': 260,'y': 380},{'x': 230,'y': 290},{'x': 290,'y': 240},{'x': 210,'y': 240},{'x': 120,'y': 450},{'x': 140,'y': 450},{'x': 170,'y': 470}, {'x': 240, 'y': 380}, {'x': 230,'y': 290}, {'x': 290,'y': 240}, {'x': 250,'y': 240},{'x': 330,'y': 250},{'x': 400,'y': 400},{'x': 170,'y': 250},{'x': 100,'y': 400},{'x': 270,'y': 230},{'x': 330,'y': 230},{'x': 430,'y': 250},{'x': 460,'y': 290},{'x': 230,'y': 230},{'x': 170,'y': 230}, {'x': 70, 'y': 250}, {'x': 40,'y': 290}, {'x': 360,'y': 110}, {'x': 400,'y': 100}, {'x': 140,'y': 110}, {'x': 100,'y': 100}];
    
    // координаты точки
    center = {
        'x': 250,
        'y': 230
    }
    
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 10;
  ctx.shadowColor = "#000000"
  g = 20;
  l = 3;
    scale(0.064)
    draw();
    
    function radians(degrees){  
      //Функция перевода из радиан в градусы
      return (Math.PI / 180) * degrees
    }
    
 function draw() {     //Функция построения фигуры
 wing();
 body();
 bodyd();
 head();
 eyes();
 leg();
    }
    function body(){
 ctx.beginPath();//тело
 ctx.fillStyle = "#303030";
 ctx.moveTo(body1[0].x,body1[0].y);
 ctx.quadraticCurveTo(body1[1].x,body1[1].y,body1[2].x,body1[2].y);
 ctx.quadraticCurveTo(body1[3].x,body1[3].y,body1[4].x,body1[4].y);
 ctx.lineWidth = 1;
 ctx.fill();
 ctx.stroke();}

function bodyd(){
ctx.beginPath();//нижнее тело
ctx.lineWidth =1;
ctx.fillStyle = "#272727";
ctx.moveTo(body2[0].x,body2[0].y);
ctx.quadraticCurveTo(body2[1].x,body2[1].y,body2[2].x,body2[2].y);
ctx.quadraticCurveTo(body2[3].x,body2[3].y,body2[4].x,body2[4].y);
ctx.fill();
ctx.stroke();}

function head(){
ctx.beginPath();//голова
ctx.moveTo(head1[0].x,head1[0].y);
ctx.fillStyle = "#272727";
ctx.quadraticCurveTo(head1[1].x,head1[1].y,head1[2].x,head1[2].y);
ctx.moveTo(head1[0].x,head1[0].y);
ctx.quadraticCurveTo(head1[3].x,head1[3].y,head1[4].x,head1[4].y);
ctx.moveTo(head1[2].x,head1[2].y);
ctx.quadraticCurveTo(head1[5].x,head1[5].y,head1[4].x,head1[4].y);
ctx.lineTo(head1[0].x,head1[0].y);
ctx.fill();
}
function eyes(){
ctx.beginPath();//глаза
ctx.fillStyle = "#800000";
ctx.arc(eyes1[0].x,eyes1[0].y,g,0,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.arc(eyes1[1].x,eyes1[1].y,g,0,2*Math.PI);
ctx.fillStyle = "#800000";
ctx.fill();
ctx.stroke();}

function wing(){
ctx.beginPath();//крыло
ctx.moveTo(wing1[0].x,wing1[0].y);
ctx.fillStyle = 'rgba(135, 206, 235,0.7)';
ctx.quadraticCurveTo(wing1[1].x,wing1[1].y,wing1[2].x,wing1[2].y);
ctx.quadraticCurveTo(wing1[3].x,wing1[3].y,wing1[4].x,wing1[4].y);
ctx.quadraticCurveTo(wing1[5].x,wing1[5].y,wing1[6].x,wing1[6].y);
ctx.moveTo(wing1[7].x,wing1[7].y);
ctx.quadraticCurveTo(wing1[8].x,wing1[8].y,wing1[9].x,wing1[9].y);
ctx.quadraticCurveTo(wing1[10].x,wing1[10].y,wing1[11].x,wing1[11].y);
ctx.quadraticCurveTo(wing1[12].x,wing1[12].y,wing1[13].x,wing1[13].y);
ctx.fill();}

function leg(){
 ctx.beginPath();//лапки
 ctx.moveTo(leg1[0].x,leg1[0].y);
 ctx.lineTo(leg1[1].x,leg1[1].y);
 ctx.lineTo(leg1[2].x,leg1[2].y);
  
 ctx.moveTo(leg1[0].x,leg1[0].y);
 ctx.lineTo(leg1[3].x,leg1[3].y);
 ctx.lineTo(leg1[4].x,leg1[4].y);
  
 ctx.moveTo(leg1[5].x,leg1[5].y);
 ctx.lineTo(leg1[6].x,leg1[6].y);
 ctx.lineTo(leg1[7].x,leg1[7].y);
 ctx.lineTo(leg1[8].x,leg1[8].y);
  
 ctx.moveTo(leg1[9].x,leg1[9].y);
 ctx.lineTo(leg1[10].x,leg1[10].y);
 ctx.lineTo(leg1[11].x,leg1[11].y);
 ctx.lineTo(leg1[12].x,leg1[12].y);
  
 ctx.moveTo(leg1[5].x,leg1[5].y);
 ctx.lineTo(leg1[13].x,leg1[13].y);
 ctx.lineTo(leg1[14].x,leg1[14].y);
  
 ctx.moveTo(leg1[9].x,leg1[9].y);
 ctx.lineTo(leg1[15].x,leg1[15].y);
 ctx.lineTo(leg1[16].x,leg1[16].y);
 ctx.lineWidth = l;
 ctx.stroke();}
    
    function move(x, y) {
      //Функция движения фигуры
      ctx.clearRect(0, 0, 800, 600);   
    for(var d = 0; d < body1.length; d++){
        body1[d].x = body1[d].x + x;
        body1[d].y = body1[d].y + y;
    }
      for(var d = 0; d < body2.length; d++){
       body2[d].x = body2[d].x + x
        body2[d].y = body2[d].y + y
    }
        for(var d = 0; d < head1.length; d++){
       head1[d].x = head1[d].x + x;
        head1[d].y = head1[d].y + y
    }
for(var d = 0; d < eyes1.length; d++){
       eyes1[d].x = eyes1[d].x + x;
        eyes1[d].y = eyes1[d].y + y
    }
  
  for(var d = 0; d < wing1.length; d++){
       wing1[d].x =  wing1[d].x + x;
        wing1[d].y = wing1[d].y + y
    }
  
  for(var d = 0; d < leg1.length; d++){
       leg1[d].x =leg1[d].x + x;
       leg1[d].y = leg1[d].y + y
    }
      center.x =   center.x + x
      center.y =  center.y + y
      draw();
    }
  
    function turn(angle){
      //Функция поворота фигуры
      ctx.clearRect(0, 0, 800, 600);
      angle = radians(angle)

    for(var d = 0; d < body1.length; d++){
     var tempx = body1[d].x - center.x;
     var tempy = body1[d].y - center.y;
     body1[d].x = tempx * Math.cos(angle) - tempy * Math.sin(angle) + center.x;
     body1[d].y = tempx * Math.sin(angle) + tempy * Math.cos(angle) + center.y;
      }
       for(var d = 0; d < body2.length; d++){
        tempx = body2[d].x - center.x;
        tempy = body2[d].y - center.y;
    body2[d].x = tempx * Math.cos(angle) - tempy * Math.sin(angle) + center.x;
    body2[d].y = tempx * Math.sin(angle) + tempy * Math.cos(angle) + center.y;
    }
        for(var d = 0; d < head1.length; d++){
         tempx = head1[d].x - center.x;
        tempy = head1[d].y - center.y;
    head1[d].x = tempx * Math.cos(angle) - tempy * Math.sin(angle) + center.x;
    head1[d].y = tempx * Math.sin(angle) + tempy * Math.cos(angle) + center.y;
        }
for(var d = 0; d < eyes1.length; d++){
        tempx = eyes1[d].x - center.x;
        tempy = eyes1[d].y - center.y;
    eyes1[d].x = tempx * Math.cos(angle) - tempy * Math.sin(angle) + center.x;
    eyes1[d].y = tempx * Math.sin(angle) + tempy * Math.cos(angle) + center.y;
    }
  
  for(var d = 0; d < wing1.length; d++){
        tempx = wing1[d].x - center.x;
        tempy = wing1[d].y - center.y;
    wing1[d].x = tempx * Math.cos(angle) - tempy * Math.sin(angle) + center.x;
    wing1[d].y = tempx * Math.sin(angle) + tempy * Math.cos(angle) + center.y;
    }
  
  for(var d = 0; d < leg1.length; d++){
        tempx = leg1[d].x - center.x;
        tempy = leg1[d].y - center.y;
    leg1[d].x = tempx * Math.cos(angle) - tempy * Math.sin(angle) + center.x;
    leg1[d].y = tempx * Math.sin(angle) + tempy * Math.cos(angle) + center.y;
    }
         draw(); 
    }
    
function scale(f){
      ctx.clearRect(0, 0, 800, 600);
  g = g * f
  l = l * f
    for(var d = 0; d < body1.length; d++){
        body1[d].x = (body1[d].x - center.x) * f + center.x;
        body1[d].y = (body1[d].y - center.y) * f + center.y;
    }
      for(var d = 0; d < body2.length; d++){
       body2[d].x = (body2[d].x - center.x) * f + center.x;
        body2[d].y = (body2[d].y - center.y) * f + center.y;
    }
        for(var d = 0; d < head1.length; d++){
       head1[d].x = (head1[d].x - center.x) * f + center.x;
        head1[d].y = (head1[d].y - center.y) * f + center.y;
    }
for(var d = 0; d < eyes1.length; d++){
       eyes1[d].x = (eyes1[d].x - center.x) * f + center.x;
        eyes1[d].y = (eyes1[d].y - center.y) * f + center.y;
    }
  
  for(var d = 0; d < wing1.length; d++){
       wing1[d].x =  (wing1[d].x - center.x) * f + center.x;
        wing1[d].y = (wing1[d].y - center.y) * f + center.y;
    }
  
  for(var d = 0; d < leg1.length; d++){
       leg1[d].x =(leg1[d].x - center.x) * f + center.x;
       leg1[d].y = (leg1[d].y - center.y) * f + center.y;
    }

  draw();
}
 function auto(){
  var MAXX = 0,MAXY = 0,MINX = 800,MINY = 600;
  for(var d = 0; d < wing1.length; d++){
    if(wing1[d].x > MAXX){
      MAXX = wing1[d].x;
    }
    if( wing1[d].y > MAXY){
      MAXY = wing1[d].y;
    }
    if(wing1[d].x < MINX){
      MINX = wing1[d].x;
    }
    if( wing1[d].y < MINY){
      MINY = wing1[d].y;
    }
    }
   for(var d = 0; d < leg1.length; d++){
    if(leg1[d].x > MAXX){
      MAXX = leg1[d].x;
    }
    if( leg1[d].y > MAXY){
      MAXY = leg1[d].y;
    }
    if(leg1[d].x < MINX){
      MINX = leg1[d].x;
    }
    if( leg1[d].y < MINY){
      MINY = leg1[d].y;
    }
    }
  
 // alert(MAXX)
 // alert(MAXY)
 // alert(MINX)
 // alert(MINY)
  var SX,SY,S;
  SX=(800)/(MAXX-MINX)
  SY = (600)/(MAXY-MINY)
  S = SX;
if(SX > SY){S = SY;}
scale(S)
}
    
  }

        function graham() {
            var ch = [];
            for (var i = 0; i < kr.length; i++)
                ch.push(i);

            var minI = 0; //номер нижней левой точки
            var min = kr[0].x;
            // ищем нижнюю левую точку
            for (var i = 1; i < kr.length; i++) {
                if (kr[i].x < min) {
                    min = kr[i].x;
                    minI = i;
                }
            }
            // делаем нижнюю левую точку активной
            ch[0] = minI;
            ch[minI] = 0;

            // сортируем вершины в порядке "левизны"
            for (var i = 1; i < ch.length - 1; i++) {
                for (var j = i + 1; j < ch.length; j++) {
                    var cl = classify({
                        'x1': kr[ch[0]].x,
                        'y1': kr[ch[0]].y,
                        'x2': kr[ch[i]].x,
                        'y2': kr[ch[i]].y
                    }, kr[ch[j]].x, kr[ch[j]].y) // функция classify считает векторное произведение.

                    // если векторное произведение меньше 0, следовательно вершина j левее вершины i.Меняем их местами
                    if (cl < 0) {
                        temp = ch[i];
                        ch[i] = ch[j];
                        ch[j] = temp;
                    }
                }
            }

            //записываем в стек вершины, которые точно входят в оболочку
            var h = [];
            h[0] = ch[0];
            h[1] = ch[1];


            for (var i = 2; i < ch.length; i++) {
                while (classify({
                    'x1': kr[h[h.length - 2]].x,
                    'y1': kr[h[h.length - 2]].y,
                    'x2': kr[h[h.length - 1]].x,
                    'y2': kr[h[h.length - 1]].y
                }, kr[ch[i]].x, kr[ch[i]].y) <= 0) {
                    h.pop(); // пока встречается правый поворот, убираем точку из оболочки
                }
                h.push(ch[i]); // добавляем новую точку в оболочку
            }

            ctx.beginPath();
            ctx.strokeStyle = "#fc03ad";
            ctx.moveTo(kr[h[0]].x, kr[h[0]].y);
            for (var i = 1; i < h.length; i++)
                ctx.lineTo(kr[h[i]].x, kr[h[i]].y);
            ctx.closePath();

            ctx.stroke();
        }
 function classify(obj, x, y) {
            var ax = obj.x2 - obj.x1;
            var ay = obj.y2 - obj.y1;

            var bx = x - obj.x1;
            var by = y - obj.y1;

            return ax * by - ay * bx;
        }