'use client'

import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion, useCdn } from "../../../../sanity/env";
import { useState, useEffect } from "react";
import BoardmemberCard from "@/app/components/BoardmemberCard";
import Spinner from "../../components/Spinner";
import boardmember from "../../../../schemas/boardmember";

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: useCdn,
});

async function fetchBoardmembers() {
  try {
    const boardmembersQuery = `*[_type == "boardmember"]{firstname, lastname, "imageUrl": image.asset->url, position, bio} | order(lastname asc)`;
    const data = await client.fetch(boardmembersQuery);
    return data;
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return [];
  }
}

export default function GetBoardmembers() {
  const [boardmembers, setBoardmembers] = useState([]); 

  useEffect(() => {
    async function fetchData() {
      const boardmemberData = await fetchBoardmembers();
      setBoardmembers(boardmemberData); 
    }
    fetchData();
  }, []);

  return (
    <>
      {boardmembers.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mx-10">
          {boardmembers.map((boardmember, i) => (
            <div key={i}>
              <BoardmemberCard key={i} boardmemberData={boardmember} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-row justify-around">
          <Spinner />
        </div>
      )}
    </>
  )
}
