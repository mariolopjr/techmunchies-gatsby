import fetch from "node-fetch"

const {
  CLOUDFLARE_ZONE_ID,
  CLOUDFLARE_EMAIL,
  CLOUDFLARE_AUTH_KEY,
} = process.env

exports.handler = async (event, context) => {
  const apiUrl = `https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/purge_cache`

  // Purge Cloudflare
  return fetch(apiUrl, {
    headers: {
      "X-Auth-Email": CLOUDFLARE_EMAIL,
      "X-Auth-Key": CLOUDFLARE_AUTH_KEY,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ purge_everything: true }),
  })
    .then(() => ({
      statusCode: 200,
      body: `Successfully purged Cloudflare cache!`,
    }))
    .catch(error => ({
      statusCode: 422,
      body: `Oops! Something went wrong. ${error}`,
    }))
}
