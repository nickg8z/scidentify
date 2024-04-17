//Run this first to get the site ID of the Webflow site you want to work with.

require("dotenv").config();

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const ACCESS_TOKEN = process.env.WEBFLOW_ACCESS_TOKEN;
const siteName = process.env.WEBFLOW_SITE_NAME;

console.log("Access Token:", process.env.WEBFLOW_ACCESS_TOKEN);
console.log("Site Name:", process.env.WEBFLOW_SITE_NAME);

if (!process.env.WEBFLOW_ACCESS_TOKEN || !process.env.WEBFLOW_SITE_NAME) {
  console.error("ERROR: Environment variables not set!");
}

const getSiteByName = async (siteName) => {
  const sitesUrl = "https://api.webflow.com/v2/sites";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await fetch(sitesUrl, options);
    const data = await response.json();
    console.log("API response:", data); // Log the entire response
    if (response.ok && Array.isArray(data)) {
      // Check if the response is an array
      const site = data.find((site) => site.name === siteName);
      return site;
    } else {
      console.error("Unexpected data format or response error:", data);
      return null;
    }
  } catch (err) {
    console.error("Fetching error:", err);
    return null;
  }
};

(async () => {
  const site = await getSiteByName(siteName);
  console.log(
    site ? "Site ID: " + site.id : "No site found with the name: " + siteName
  );
})();
