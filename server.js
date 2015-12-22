(function () {
	'use strinct';
	var http = require('http');
	var httpProxy = require('http-proxy');
	var proxy = httpProxy.createProxyServer({});
	http.createServer(function (req, res) {
		proxy.web(req, res, {target: req.url});
	}).listen(3128);
})();