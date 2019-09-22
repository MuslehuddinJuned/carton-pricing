

function UnitChange(){
	var P_2=0;
	var P_5=0;
	var P_12=0;
	var P_18=0;
  var Unit = document.getElementById("Unit").value;
if(Unit=="1000000"){
	document.getElementById("Wastage_W").value=40;
	document.getElementById("Wastage_L").value=60;
	P_2=20;
	P_5=50;
	P_12=120;
	P_18=180;
}
else if(Unit=="1550.0031"){
	document.getElementById("Wastage_W").value=1.57;
	document.getElementById("Wastage_L").value=2.36;
	P_2=0.79;
	P_5=1.97;
	P_12=4.72;
	P_18=7.09;

} else{
	document.getElementById("Wastage_W").value=4;
	document.getElementById("Wastage_L").value=6;
	P_2=2;
	P_5=5;
	P_12=12;
	P_18=18;

}
	
}
function CartonCalculate() {
  var CartonType = document.getElementById("CartonType").value;
  var Length = document.getElementById("Length").value;
  var Length = parseFloat(Length);
  var Width = document.getElementById("Width").value;
  var Width = parseFloat(Width);
  var Height = document.getElementById("Height").value;
  var Height = parseFloat(Height);
  var Price = document.getElementById("Price").value;
  var Price = parseFloat(Price);
  var Unit = document.getElementById("Unit").value;
  var L1 = document.getElementById("L1").value;
  var L1 = parseFloat(L1);
  var BM = document.getElementById("BM").value;
  var BM = parseFloat(BM);
  var BL = document.getElementById("BL").value;
  var BL = parseFloat(BL);
  var CM = document.getElementById("CM").value;
  var CM = parseFloat(CM);
  var CL = document.getElementById("CL").value;
  var CL = parseFloat(CL);
  var Wastage_W = document.getElementById("Wastage_W").value;
  var Wastage_W = parseFloat(Wastage_W);
  var Wastage_L = document.getElementById("Wastage_L").value;
  var Wastage_L = parseFloat(Wastage_L);
  var Unit = document.getElementById("Unit").value;
  var Unit = parseFloat(Unit);
  var SqureMeter=0;


  	var P_2=0;
	var P_5=0;
	var P_12=0;
	var P_18=0;
if(Unit==1000000){
	P_2=20;
	P_5=50;
	P_12=120;
	P_18=180;
}
else if(Unit==1550.0031){
	P_2=0.79;
	P_5=1.97;
	P_12=4.72;
	P_18=7.09;

} else{
	P_2=2;
	P_5=5;
	P_12=12;
	P_18=18;

}


  	   if(CartonType=="MC"){SqureMeter = parseFloat(((Width+Height+Wastage_W)*(Length+Width+Wastage_L)*2)/Unit,2);}
  else if(CartonType=="MCL"){SqureMeter = parseFloat(((Length+Height+Wastage_W)*(Length+Width+Wastage_L)*2)/Unit,2);}
  else if(CartonType=="MCD"){SqureMeter = parseFloat((((Width+Length+Wastage_L)*2+Wastage_W)*(Height+(Length/2)+(Width/2)+Wastage_W+P_2))/Unit,2);}
  else if(CartonType=="MCC"){SqureMeter = parseFloat((((Width/2)+Height+Wastage_W)*(Length+Width+Wastage_L)*2)/Unit,2);} 
  else if(CartonType=="BCH"){SqureMeter = parseFloat((Width+Length+Wastage_L)*2*(Height+Width+P_5+Wastage_W)/Unit,2);}
  else if(CartonType=="HC"){SqureMeter = parseFloat((Length*(Width+Height+Wastage_W)+((Width+P_12)*(2*Height+P_18+Wastage_W)))*2/Unit,2);}
  else if(CartonType=="CC"){SqureMeter = parseFloat((Length+4*Height+Wastage_W+Wastage_W)*(Width+2*Height+Wastage_W)/Unit,2);}
  else if(CartonType=="TB"){SqureMeter = parseFloat(Length*Width/Unit,2);}
  else if(CartonType=="DV"){SqureMeter = parseFloat(Length*Width/Unit,2);}


  document.getElementById("SQM").value = SqureMeter;
  document.getElementById("PriceCal").value = parseFloat(SqureMeter*Price,2);
  document.getElementById("L1Cal").value = parseFloat((SqureMeter*L1/1000),2);
  document.getElementById("BMCal").value = parseFloat((SqureMeter*BM*1.35)/1000,2);
  document.getElementById("BLCal").value = parseFloat((SqureMeter*BL)/1000,2);
  document.getElementById("CMCal").value = parseFloat((SqureMeter*CM*1.45)/1000,2);
  document.getElementById("CLCal").value = parseFloat((SqureMeter*CL)/1000,2);
  document.getElementById("L_Sum").value = parseFloat(SqureMeter*(L1+CL)/1000,2);
  document.getElementById("M_Sum").value = parseFloat(SqureMeter*(BM*1.35+BL+CM*1.45)/1000,2);
}
