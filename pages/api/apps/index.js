import clientProvider from "@/utils/clientProvider";
import withMiddleware from "@/utils/middleware/withMiddleware";

const handler = async (req, res) => {
  try {
    const { client } = await clientProvider.graphqlClient({
      req,
      res,
      isOnline: true, //false for offline session, true for online session
    });

    const response = await client.query({
      data: `{
        product(id: "gid://shopify/Product/9132486394015") {
          handle
          title
          description
        }
      }`, //Paste your GraphQL query/mutation here
    });

    console.dir(response, { depth: null });
    return res.status(200).send(response) ;
  } catch (e) {
    console.error(e);
    return res.status(400).send({ error: true });
  }
};

export default withMiddleware("verifyRequest")(handler);