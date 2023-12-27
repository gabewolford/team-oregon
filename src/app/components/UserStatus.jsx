export default function UserStatus({ activeMember, currentSelected }) {
    return (
      activeMember ? (
        <span className={`bg-green-600 text-white-500 px-3 py-1 rounded-full ${currentSelected ? 'border-2 border-blue-500' : ''}`}>
          Current
        </span>
      ) : (
        <span className={`bg-red-500 text-white-500 px-3 py-1 rounded-full ${currentSelected ? 'border-2 border-blue-500' : ''}`}>
          Expired
        </span>
      )
    )
  }
  