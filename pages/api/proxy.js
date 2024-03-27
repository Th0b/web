// Whole file exists only because CORS
import Constants from "/constants";
import https from "https";

export default function handler(req, res) {
  const { apiTarget } = req.query;
  const apiConfigs = {
    github: (() => {
      const url = new URL(Constants.GITHUB_API);
      return {
        hostname: url.hostname,
        path: url.pathname + url.search,
        headers: { "User-Agent": "Website" }, // Kvůli proxy a GitHub API (user-agent vybrán náhodně)
      };
    })(),
    piwigo: (() => {
      const url = new URL(Constants.PIWIGO_API);
      return {
        hostname: url.hostname,
        path: url.pathname + url.search,
      };
    })(),
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
