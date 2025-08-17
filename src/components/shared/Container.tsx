export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen pt-32 pb-16 max-w-5xl w-full px-6 mx-auto">
      {children}
    </div>
  );
}
