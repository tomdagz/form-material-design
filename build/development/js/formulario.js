!function(){var e=document.formulario_registro,a=e.elements,s=function(){for(var e=0;e<a.length;e++)if("text"==a[e].type||"email"==a[e].type||"password"==a[e].type){if(0==a[e].value.length)return console.log("El campo "+a[e].name+" esta incompleto"),a[e].className=a[e].className+" error",!1;a[e].className=a[e].className.replace(" error","")}return a.pass.value!==a.pass2.value?(a.pass.value="",a.pass2.value="",a.pass.className=a.pass.className+" error",a.pass2.className=a.pass2.className+" error"):(a.pass.className=a.pass.className.replace(" error",""),a.pass2.className=a.pass2.className.replace(" error","")),!0},r=function(){for(var e=document.getElementsByName("sexo"),s=!1,r=0;r<a.length;r++)if("radio"==a[r].type&&"sexo"==a[r].name){for(var l=0;l<e.length;l++)if(e[l].checked){s=!0;break}return 0==s?(a[r].parentNode.className=a[r].parentNode.className+" error",console.log("El campo sexo esta incompleto"),!1):(a[r].parentNode.className=a[r].parentNode.className.replace(" error",""),!0)}},l=function(){for(var e=document.getElementsByName("terminos"),s=!1,r=0;r<a.length;r++)if("checkbox"==a[r].type){for(var l=0;l<e.length;l++)if(e[l].checked){s=!0;break}return 0==s?(a[r].parentNode.className=a[r].parentNode.className+" error",console.log("El campo checkbox esta incompleto"),!1):(a[r].parentNode.className=a[r].parentNode.className.replace(" error",""),!0)}},t=function(e){s()?r()?l()?(console.log("Envia"),e.preventDefault()):(console.log("Falto validar Checkbox"),e.preventDefault()):(console.log("Falto validar los Radio Button"),e.preventDefault()):(console.log("Falto validar los Input"),e.preventDefault())},n=function(){this.parentElement.children[1].className="label active",this.parentElement.children[0].className=this.parentElement.children[0].className.replace("error","")},o=function(){this.value<=0&&(this.parentElement.children[1].className="label",this.parentElement.children[0].className=this.parentElement.children[0].className+" error")};e.addEventListener("submit",t);for(var c=0;c<a.length;c++)("text"==a[c].type||"email"==a[c].type||"password"==a[c].type)&&(a[c].addEventListener("focus",n),a[c].addEventListener("blur",o))}(),$(document).ready(function(){var e=1,a=function(){$(".menu_bar").click(function(){1==e?($("nav").animate({left:"0"}),e=0):(e=1,$("nav").animate({left:"-100%"}))}),$(".submenu").click(function(){$(this).children(".children").slideToggle()})};a()});