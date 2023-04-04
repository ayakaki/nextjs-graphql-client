import client from "@/utils/apollo-client";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";

const TrialPage = () => {

  type cat = {
    id: number,
    name: string,
    age: number,
    breed: string
  }

  const [cats, setCats] = useState<cat[]>([])

  useEffect(()=>{
    (async()=>{
      const { data } = await client.query({
        query: gql`
          query {
            cats {
              id
              name
              age
              breed
            }
          }
          `,
      });
      console.log(data.cats)
      setCats(data.cats)
    })()
  },[])

  return (
    <div>
      <h1>GraphQL Client Trial</h1>
      {cats.length>=1&&
        <ul>
          <li>ID: {cats[0].id}</li>
          <li>名前: {cats[0].name}</li>
          <li>年齢: {cats[0].age}</li>
          <li>ブリーダー: {cats[0].breed}</li>
        </ul>
      }
      
    </div>
  )
}

export default TrialPage