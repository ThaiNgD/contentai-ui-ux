import httpProxy from "http-proxy";
import type { NextApiRequest, NextApiResponse } from "next";

// Get the actual API_URL as an environment variable. For real
// applications, you might want to get it from 'next/config' instead.
export const API_URL = process.env.API_URL;

const proxy = httpProxy.createProxyServer();

// You can export a config variable from any API route in Next.js.
// We'll use this to disable the bodyParser, otherwise Next.js
// would read and parse the entire request body before we
// can forward the request to the API. By skipping the bodyParser,
// we can just stream all requests through to the actual API.
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return new Promise((resolve, reject) => {
    // Rewrite URL, strip out leading '/api'
    // '/api/*' becomes '${API_URL}/api/v1/*'
    if (
      req.url &&
      (req.url.startsWith("/api/uploaded-files") ||
        req.url.startsWith("/api/storage"))
    ) {
      req.url = req.url.replace(/\/api\//, "/");
    }
    req.url = req.url && req.url.replace(/^\/api/, "/api/v1");

    // Don't forget to handle errors:
    proxy.once("error", reject);
    // Forward the request to the API
    proxy.web(req, res, {
      target: API_URL,
      // Don't autoRewrite because we manually rewrite
      // the URL in the route handler.
      autoRewrite: false,
      changeOrigin: true,

      // In case we're dealing with a login request,
      // we need to tell http-proxy that we'll handle
      // the client-response ourselves (since we don't
      // want to pass along the auth token).
      selfHandleResponse: false,
    });
  });
}
