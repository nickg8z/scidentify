# Scidentify Webhook Integration

This project, developed by Poolable, LLC for Scidentify, automates the setup and handling of webhooks for a Webflow site. The project consists of three main JavaScript files that should be run sequentially to properly set up and handle incoming webhooks from a specified Webflow site.

## Project Structure

- `fetchSiteId.js`: Retrieves the site ID from Webflow.
- `createWebhook.js`: Creates a webhook on a specified site.
- `server.js`: Receives and processes webhook data.
- `.env.template`: Template for your environment variables.

## Prerequisites

Before you begin, make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

## Setup

1. **Clone the repository**:

`git clone <repository-url>`

2. **Install dependencies**:

`npm install`

3. **Set up environment variables**:

- Copy the `.env.template` file to a new file named `.env`.
- Obtain your Webflow API token and the name of your Webflow site from the Webflow dashboard.
  -Obtain the destination url you want the webhook to point to on your server
- Add these details to the `.env` file as follows:

  ```
  WEBFLOW_ACCESS_TOKEN=your_webflow_api_token_here
  WEBFLOW_SITE_NAME=your_webflow_site_name_here
  DESTINATION_URL=your_server_public_url
  ```

## Usage

### 1. Fetch Site ID

Run `fetchSiteId.js` to retrieve your site ID from Webflow. This ID is needed to set up the webhook.

`node fetchSiteId.js`

### 3. Add Site ID to `.env`

Like so:

`WEBFLOW_SITE_ID=your_site_id`

### 4. Create Webhook

After obtaining the site ID, run `createWebhook.js` to create a webhook for your site. You will need the destination URL where the webhook data will be sent to be added to your `.env`.

`node createWebhook.js`

### 5. Server Setup

Deploy `server.js` on your server to receive and process the data sent by the webhook. Additional configuration may be required to integrate with the Scidentify backend for data processing and storage.

`node server.js`

## Additional Information

For more information on configuring and deploying Node.js applications, refer to the Node.js [official documentation](https://nodejs.org/en/docs/).

## License

This project is licensed under the MIT License.

## Support

For support, contact [nick@poolable.design](mailto:nick@poolable.design).
