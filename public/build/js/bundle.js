window.appinfo||function(){var n,o=!1,t=[];function a(){t.forEach(function(o){o(n)})}window.onAppInfoLoaded={then:function(a){return o?a(n):t.push(a),this}},window.onAppinfoLoad=function(){window.appinfo.grab("https://appinfo.toptal.com",{data:gon.application_info_data||{},withCredentials:!1,callback:function(t,i){o=!0,i||(n={applicationInfo:t.data}),a()}})};var i=document.createElement("script");i.type="text/javascript",i.onerror=function(){o=!0,a()},i.src="https://appinfo.toptal.com/script.js",document.getElementsByTagName("head")[0].appendChild(i)}(),window.appinfo||function(){var n,o=!1,t=[];function a(){t.forEach(function(o){o(n)})}window.onAppInfoLoaded={then:function(a){return o?a(n):t.push(a),this}},window.onAppinfoLoad=function(){window.appinfo.grab("https://appinfo.toptal.com",{data:gon.application_info_data||{},withCredentials:!1,callback:function(t,i){o=!0,i||(n={applicationInfo:t.data}),a()}})},console.log("working1");var i=document.createElement("script");i.type="text/javascript",i.onerror=function(){o=!0,a()},i.src="https://appinfo.toptal.com/script.js",document.getElementsByTagName("head")[0].appendChild(i)}();