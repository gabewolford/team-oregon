'use client'

import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion, useCdn } from "../../../../sanity/env";
import { useState, useEffect } from "react";
import SponsorCard from "../../components/SponsorCard";
import Spinner from "../../components/Spinner";

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: useCdn,
});

async function fetchSponsors() {
  try {
    const sponsorsQuery = `*[_type == "sponsor"]{name, "imageUrl": image.asset->url, website, facebook, instagram, description} | order(name asc)`;
    const data = await client.fetch(sponsorsQuery);
    return data;
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return [];
  }
}

export default function GetSponsors() {
  const [sponsors, setSponsors] = useState([]); 

  useEffect(() => {
    async function fetchData() {
      const sponsorData = await fetchSponsors();
      setSponsors(sponsorData); 
    }
    fetchData();
  }, []);

  return (
    <>
      {sponsors.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mx-10">
          {sponsors.map((sponsor, i) => (
            <div key={i}>
              <SponsorCard key={i} sponsorData={sponsor} />
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
