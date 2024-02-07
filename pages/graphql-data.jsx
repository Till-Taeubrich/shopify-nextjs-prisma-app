import { useEffect } from "react";

const GraphqlData = () => {

  useEffect(() => {
    fetchGraphQLData() ;
  }, 0)
  
  async function fetchGraphQLData() {
    const response = await fetch("/api/apps");
    const res = await response.json();
    console.log(res);
  }
  return <>Graphql Data Page</>;
  };

 
export default GraphqlData;