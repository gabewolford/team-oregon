import Image from "next/image";

export default function BoardmemberCard({ boardmemberData }) {
  let boardmemberName, boardmemberImage, position, bio;

  if (boardmemberData) {
    boardmemberName = (
      <h1 className="text-[20px] font-semibold">
        {boardmemberData.firstname + " " + boardmemberData.lastname}
      </h1>
    );
    boardmemberImage = (
      <Image
        src={boardmemberData.imageUrl}
        height={250}
        width={250}
        alt={boardmemberData.firstname + " " + boardmemberData.lastname}
        className="w-full md:w-fit md:h-fit"
        placeholder="blur"
        blurDataURL={boardmemberData.placeholder}
      />
    );

    position = (
      <p className="text-xs font-medium text-darkbrown-500 bg-yellow-500 px-2 py-1 rounded-md">
        {boardmemberData.position}
      </p>
    );

    bio = <p className="text-sm">{boardmemberData.bio}</p>;
  }

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
      className="flex flex-col md:flex-row gap-4 md:min-w-500 max-w-[650px] items-center"
    >
      {boardmemberImage}
      <div className="flex flex-col gap-2">
        {boardmemberName}
        <div className="flex flex-row mb-1">{position}</div>
        <div>{bio}</div>
      </div>
    </div>
  );
}
