var TxtRotate=function(a,b,c){this.toRotate=b,this.el=a,this.loopNum=0,this.period=parseInt(c,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};TxtRotate.prototype.tick=function(){var a=this.loopNum%this.toRotate.length,b=this.toRotate[a];this.txt=this.isDeleting?b.substring(0,this.txt.length-1):b.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var c=this,d=200-100*Math.random();this.isDeleting&&(d/=3),this.isDeleting||this.txt!==b?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,d=500):(d=this.period,this.isDeleting=!0),setTimeout(function(){c.tick()},d)},window.onload=function(){for(var a=document.getElementsByClassName("txt-rotate"),b=0;b<a.length;b++){var c=a[b].getAttribute("data-rotate"),d=a[b].getAttribute("data-period");c&&new TxtRotate(a[b],JSON.parse(c),d)}var e=document.createElement("style");e.type="text/css",e.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid rgba(255, 255, 255, 0.55)}",document.body.appendChild(e)};