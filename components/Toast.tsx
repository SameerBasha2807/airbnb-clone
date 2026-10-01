export default function Toast({ message }: { message: string }) {
  return (
    <div role="status" className="fixed bottom-8 left-1/2 z-[80] -translate-x-1/2 rounded-lg bg-hof px-6 py-3.5 text-sm font-semibold text-white shadow-xl animate-slide-up">
      {message}
    </div>
  );
}