let data=[];

Papa.parse("data.csv",{

download:true,

header:true,

skipEmptyLines:true,

complete:function(results){

data=results.data;

let sub=[...new Set(data.map(x=>x.SubDivision))];

let subSelect=document.getElementById("subDivision");

sub.forEach(s=>{

let op=document.createElement("option");

op.value=s;

op.text=s;

subSelect.appendChild(op);

});

}

});

document.getElementById("subDivision").onchange=function(){

let sub=this.value;

let soSelect=document.getElementById("so");

soSelect.innerHTML="<option>Select SO</option>";

document.getElementById("bo").innerHTML="<option>Select BO</option>";

let sos=[...new Set(data.filter(x=>x.SubDivision==sub).map(x=>x.SO))];

sos.forEach(s=>{

let op=document.createElement("option");

op.value=s;

op.text=s;

soSelect.appendChild(op);

});

}

document.getElementById("so").onchange=function(){

let so=this.value;

let boSelect=document.getElementById("bo");

boSelect.innerHTML="<option>Select BO</option>";

let bos=data.filter(x=>x.SO==so);

bos.forEach(b=>{

let op=document.createElement("option");

op.value=b.BO;

op.text=b.BO;

boSelect.appendChild(op);

});

}

document.getElementById("bo").onchange=function(){

let bo=this.value;

let row=data.find(x=>x.BO==bo);

if(row){

document.getElementById("office").innerHTML=row.BO;

document.getElementById("opened").innerHTML=row.Opened;

document.getElementById("closed").innerHTML=row.Closed;

document.getElementById("net").innerHTML=row.NetAddition;

}

}