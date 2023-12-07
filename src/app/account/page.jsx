import AccountInfo from "../components/AccountInfo";

export const metadata = {
  title: "Team Oregon | Account",
  description:
    "Helping our members achieve their cycling goals and developing the sport of competive cycling in the Pacific Northwest for over three decades.",
};

export default function AccountPage() {
  return (
    <main className="flex flex-col pt-[55px] md:pt-[68px]">
      <div className="mx-6 lg:mx-20 my-4 md:my-10">
        <h2 className="text-center text-xl md:text-3xl text-blue-500 font-semibold uppercase">
          Account Information
        </h2>
        <AccountInfo />
      </div>
    </main>
  );
}
