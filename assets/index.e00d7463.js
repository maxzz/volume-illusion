import{u as e,C as t,a as o}from"./vendor.e8ca708d.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const s=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const l=new URL(e,s);if(self[t].moduleMap[l])return o(self[t].moduleMap[l]);const n=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),p=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){a(new Error(`Failed to import: ${e}`)),r(p)},onload(){o(self[t].moduleMap[l]),r(p)}});document.head.appendChild(p)})),self[t].moduleMap={}}}("assets/");function s(){const o=e("Controls",{color:"",tint:"#22aaeeff",posX:{value:20,min:0,max:40},posXOpposite:{value:-20,min:-40,max:40},posY:{value:20,min:0,max:40},posYOpposite:{value:-20,min:-40,max:40}}),s={"--positionX":`${o.posX}px`,"--positionXOpposite":`${o.posXOpposite}px`,"--positionY":`${o.posY}px`,"--positionYOpposite":`${o.posYOpposite}px`};return t.createElement("div",{className:"App bg-green-50 h-screen flex place-items-center justify-center"},t.createElement("div",{className:"relative w-96 h-96",style:s},t.createElement("div",{className:"w-20 h-20 bg-purple-600 threed box1 absolute top-0 left-0",style:{backgroundColor:`${o.tint}`}}),t.createElement("div",{className:"w-20 h-20 bg-purple-400 threed box1 absolute top-0 right-0",style:{}}),t.createElement("div",{className:"w-20 h-20 bg-purple-500 threed box1 absolute bottom-0 right-0 threed",style:s})))}o.render(t.createElement(t.StrictMode,null,t.createElement(s,null)),document.getElementById("root"));
