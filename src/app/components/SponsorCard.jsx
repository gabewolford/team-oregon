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
                         className="w-full md:w-fit md:h-fit"
                       >
                       </Image>

        website = <Website color={'#0163AA'} linkTo={sponsorData.website}/>
    

        if (sponsorData.instagram) {
            instagramLink = <Instagram color={'#0163AA'} linkTo={sponsorData.instagram}/>
        }
        
        if(sponsorData.facebook) {
        facebookLink = <Facebook color={'#0163AA'} linkTo={sponsorData.facebook}/>
 
        }

        description = <p className="text-sm">{sponsorData.description}</p>
    }

    return (
        <div className="flex flex-col md:flex-row gap-4 md:min-w-500 max-w-[650px] items-center">
            {sponsorImage}
            <div className="flex flex-col gap-2">
                {sponsorName}
                <div className="flex flex-row space-x-2 mb-1">
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
