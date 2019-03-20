function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.left);
  profiler(data.carrer);
  education(data.education);
  skills(data.skills);
})

var p=document.querySelector(".p");
var l=document.querySelector(".l");
var r=document.querySelector(".r");
function profile(pro)
{
  var image=document.createElement('img');
  image.src=pro.img;
  l.appendChild(image);
  p.appendChild(l);
  var n=document.createElement('h2');
  n.textContent=pro.name;
  l.appendChild(n);
  p.appendChild(l);
  var hr=document.createElement('hr');
  l.appendChild(hr)
  var d=document.createElement('h3');
  d.textContent=pro.designation;
  l.appendChild(d);
  p.appendChild(l);
  var r=document.createElement('h3');
  r.textContent=pro.rollno;
  l.appendChild(r);
  p.appendChild(l);
  var e=document.createElement('h3');
  e.textContent=pro.email;
  l.appendChild(e);
  p.appendChild(l);
}
function profiler(pror)
{
  var i=document.createElement('h2');
  i.textContent="Carrer Objectives";
  r.appendChild(i);
  var hr=document.createElement('hr');
  r.appendChild(hr)
  var i1=document.createElement('h3');
  i1.textContent=pror.info;
  r.appendChild(i1);
  p.appendChild(r);

}
function education(pr)
{
  var i2=document.createElement('h2');
  i2.textContent="Education Details";
  r.appendChild(i2);
  var hr=document.createElement('hr');
  r.appendChild(hr);
  var table=document.createElement("table");
  table.border="1";
  let row='';
  row += "<th>"+"sno"+"</th>"+"<th>"+"Institute"+"</th>"+"<th>"+"Board"+"</th>"+
  "<th>"+"per"+"</th>"+"<th>"+"yop"+"</th>";
  for (i in pr){
  row += "<tr>"+"<td>"+pr[i].sno +"</td>"+
  "<td>"+pr[i].institute +"</td>"+
  "<td>"+pr[i].board +"</td>"+
  "<td>"+pr[i].per +"</td>"+
  "<td>"+pr[i].yop +"</td>"+"</tr>";
}
table.innerHTML=row;
r.appendChild(table);
p.appendChild(r);
}
function skills(ski)
{
  var i3=document.createElement('h2');
  i3.textContent="Technical skills";
  r.appendChild(i3);
  var hr=document.createElement('hr');
  r.appendChild(hr);
  var skills=document.createElement('h3');
  let row='';
  for (i in ski)
  {
    row += "<ul>"+"<li>"+ski[i].program +"</li>"+"</ul>";
  }
  skills.innerHTML=row;
  r.appendChild(skills);
  p.appendChild(r);
}
