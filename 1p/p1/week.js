print("Escribe un numero:");
var dia=readline();
dia=parseInt(dia);
switch(dia){
case 1:print('lunes'); break;
case 2:print('martes'); break;
case 3:print('miercoles');break;
case 4:print('jueves');break;
case 5:print('viernes');break;
case 6:print('sabado');break;
case 7:print('domingo');break;
default: print('error'+dia);
}
