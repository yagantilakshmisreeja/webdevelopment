// function loadJSON(file) {
//   return new Promise((resolve,reject)=>{
//     return fetch(file).then(response=>{
//       if(respons.ok){
//         resolve(response.json());
//
//       }
//       else{
//         reject(new Error("error"));
//       }
//     })
//   })
// }
// var fetchedData=loadJSON("dynamic.json");
// fetchedData.then(data=>{
//   console.log(data);
//
// })
// var child2=document.queryselector("#child2");
// //career
// function carrer(car){
//   var h2=document.createElement("h1");
//   h2.textContent="Resume";
//   child2.appendChild(h2);
//
//   var heading=doucment.createElement("hr");
//   child2.appendChild(heading);
//
//   var p=document.createElement("p");
//   p.textContent=car.info;
//   child2.appendChild(p);
//
// }
function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  career(data.career);
  education(data.education);
  tech(data.tech);
  skills(data.skills);
  //arrToUl(data.arrToUl);
})
var child2=document.querySelector(".child2");
function career(c){
  var chead=document.createElement("h3");
  chead.textContent="Resume";
  child2.appendChild(chead);
  var chr=document.createElement("hr");
  child2.appendChild(chr);
  var cp=document.createElement("p")
  cp.textContent=c.info;
  child2.appendChild(cp);
}
function education(edu){
  var ehead=document.createElement("h3");
  ehead.textContent="Educational Status";
  child2.appendChild(ehead);
  var ehr=document.createElement("hr");
  child2.appendChild(ehr);
  let etable=document.createElement("table");
  etable.border="1";
  var tr1="<tr><td>Name of the institute</td><td>Yeay of passing</td><td>CGPA</td></tr>";
  var tr2="";
  for(i=0;i<edu.length;i++){
     tr2=tr2+"<tr><td>"+edu[i].Noti+"</td><td>"+edu[i].Yop+"</td><td>"+edu[i].CGPA+"</td></tr>";
  }
  etable.innerHTML=tr1+tr2;
  child2.appendChild(etable);

}
function tech(act){
  var ahead=document.createElement("h3");
  ahead.textContent="Technical Skills";
  child2.appendChild(ahead);
  var ul=document.createElement("ul");
  child2.appendChild(ul);
  for(i=0;i<act.length;i++){
    var li=document.createElement("li");
    li.textContent=act[i].content;
    ul.appendChild(li);
    }
  }
  function skills(skill){
  var arhead=document.createElement("h3");
  arhead.textContent="Co-circular Activities";
  child2.appendChild(arhead);
  var ul=document.createElement("ul");
  child2.appendChild(ul);
  for(i=0;i<skill.length;i++){
    var li=document.createElement("li");
    li.textContent=skill[i].content;
    ul.appendChild(li);
  }


}
