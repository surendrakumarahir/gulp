if(!window.appinfo) {
  (function () {
    // Setup handlers
    var result;
    var done = false;
    var thens = [];
    window.onAppInfoLoaded = {
      then: function(callback) {
        done ? callback(result) : thens.push(callback)
        return this
      }
    };

    function resolve() {
      thens.forEach(function(callback) { callback(result) });
    }

    // Scrips callback, appinfo calls it internally
    window.onAppinfoLoad = function() {
      window.appinfo.grab('https://appinfo.toptal.com', {
        data: gon['application_info_data'] || {},
        withCredentials: false,
        callback: function(response, error) {
          done = true;
          if (!error) {
            result = {applicationInfo: response.data};
          }
          resolve();
        }
      })
    };
   console.log('working1');
    // Load script
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.onerror = function() {
      done = true;
      resolve();
    }
    script.src = 'https://appinfo.toptal.com/script.js';
    document.getElementsByTagName('head')[0].appendChild(script);
  })();
}
