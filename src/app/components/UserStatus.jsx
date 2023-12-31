export default function UserStatus({ activeMember, currentSelected }) {
  return activeMember ? (
    <div className="flex justify-center">
      <h6
        className={`bg-green-600 text-white-500 px-3 py-1 rounded-full ${
          currentSelected ? "border-2 border-blue-500" : ""
        }`}
      >
        Current
      </h6>
    </div>
  ) : (
    <div className="flex justify-center">
      <h6
        className={`bg-red-500 text-white-500 px-3 py-1 rounded-full ${
          currentSelected ? "border-2 border-blue-500" : ""
        }`}
      >
        Expired
      </h6>
    </div>
  );
}
