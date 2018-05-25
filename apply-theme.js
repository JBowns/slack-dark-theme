const fs = require('fs');

window.document.addEventListener('DOMContentLoaded', function () {

  const css = fs.readFileSync(path.join(__dirname.replace(".asar", ".asar.unpacked"), "css/dark.css")).toString();

  window.document.querySelectorAll(".TeamView webview").forEach(webview => {
    webview.addEventListener('ipc-message', message => {
      if (message.channel == 'didFinishLoading') {
        webview.executeJavaScript(`
              let s = document.createElement('style');
              s.type = 'text/css';
              s.innerHTML = \`${css}\`;
              document.head.appendChild(s);
            `);
      }
    });
  });

  $("<style></style>").appendTo('head').html(css);

});
