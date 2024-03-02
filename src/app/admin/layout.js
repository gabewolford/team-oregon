export default function Layout({ children }) {
  return (
    <div className="absolute top-0 left-0 min-h-svh max-h-svh w-full z-50">
      {children}
    </div>
  );
}
