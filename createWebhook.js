// Run this second to create a webhook for the site you want to work with. Note: must have the site ID from fetchSiteId.js and the destination url for the webhook.

require("dotenv").config();

// Async Formula to Create Webhook
const createWebhook = async (siteId, payload) => {
  const accessToken = process.env.WEBFLOW_ACCESS_TOKEN;
  const createWebhookUrl = `https://api.webflow.com/v2/sites/${siteId}/webhooks`;
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(payload),
  };
  const newWebhook = await fetch(createWebhookUrl, options);
  return newWebhook.json();
};

// Calling our Formula in an Async
(async () => {
  const destinationURL = process.env.DESTINATION_URL;
  const siteId = process.env.WEBFLOW_SITE_ID;

  // API request payload
  const payload = {
    triggerType: "form_submission",
    url: destinationURL,
  };
  const newWebhook = await createWebhook(siteId, payload);
  console.log(newWebhook);
})();
