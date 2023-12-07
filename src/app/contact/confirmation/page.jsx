import Image from "next/image";
import submissionSuccess from "../../../../public/images/submission-successful.png";

export default function ContactConfirmation() {
  return (
    <>
      <main className="flex flex-col gap-10 md:gap-20 pt-[55px] md:pt-[68px]">
        <div className="mx-6 lg:mx-20 mt-4 mb-16 md:m-10">
          <h2 className="text-center text-xl md:text-3xl text-blue-500 font-semibold uppercase mb-2">
            Submission Successful
          </h2>
          <p className="mb-6 text-center w-full lg:w-1/2 mx-auto">
            Your inquiry has been recieved.
          </p>
          <Image
            src={submissionSuccess}
            alt="thumbs up"
            className="mx-auto"
            placeholder="blur"
          ></Image>
        </div>
      </main>
    </>
  );
}
