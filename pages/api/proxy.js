// Whole file exists only because CORS

import https from "https";

export default function handler(req, res) {
  const { apiTarget } = req.query;
  const apiConfigs = {
    github: { hostname: "api.github.com", path: "/users/th0be/repos" },
    piwigo: {
      hostname: "piwigo.navrattobias.cz",
      path: "/ws.php?format=json&method=pwg.categories.getImages",
    },
  };
  const options = apiConfigs[apiTarget] || {};
  options.method = req.method;

  if (!options.hostname) {
    res.statusCode = 404;
    return res.end("API target not found");
  }

  // Create a request to the external API
  const proxy = https.request(options, function (proxyRes) {
    // Pipe the response from the external API back to the original requester
    proxyRes.pipe(res, { end: true });
  });

  // Pipe the original request body to the external API request
  req.pipe(proxy, { end: true });
}
