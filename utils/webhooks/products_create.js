/**
* Replace TOPIC_NAME with a Webhook Topic to enable autocomplete
* @typedef { import("@/_developer/types/2023-10/webhooks.js").PRODUCTS_CREATE } webhookTopic
*/

const productsCreateHandler = async (topic, shop, webhookRequestBody, webhookId, apiVersion) => {
  try {
    /** @type {webhookTopic} */
    const webhookBody = JSON.parse(webhookRequestBody);
    
  } catch (e) {
    console.error(e);
  }
};

export default productsCreateHandler;