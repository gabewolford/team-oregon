import Image from "next/image";
import Website from "./Socials/Website";
import Instagram from "./Socials/Instagram";
import Facebook from "./Socials/Facebook";

export default function SponsorCard({ sponsorData }) {
    let sponsorName, sponsorImage, website, instagramLink, facebookLink, description;

    if (sponsorData) {
        sponsorName = <h1 className="text-[20px] font-semibold">{sponsorData.name}</h1>
        sponsorImage = <Image 
                         src={sponsorData.imageUrl}
                         height={193}
                         width={193}
                         alt={sponsorData.name}
                         className="w-full"
                       >
                       </Image>

        website = <a href={sponsorData.website}>
                       <Website color={'#0163AA'} />
                  </a>
        

        instagramLink = <a href={sponsorData.instagram}>
                            <Instagram color={'#0163AA'} />
                        </a>
        
        facebookLink = <a href={sponsorData.facebook}>
                            <Facebook color={'#0163AA'} />
                        </a>

        description = <p>{sponsorData.description}</p>
    }

    return (
        <div className="flex flex-col md:flex-row gap-4 max-w-[540px]">
            {sponsorImage}

            <div className="flex flex-col gap-2">
                {sponsorName}
                <div className="flex flex-row">
                    {website}
                    {instagramLink}
                    {facebookLink}
                </div>
                <div>
                    {description}
                </div>
            </div>
        </div>
    )
}
