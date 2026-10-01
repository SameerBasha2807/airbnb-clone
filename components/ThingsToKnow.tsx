const cols = [
  { title: "House rules", items: ["Check-in after 2:00 pm", "Checkout before 11:00 am", "7 guests maximum", "No parties or events"] },
  { title: "Safety & property", items: ["Carbon monoxide alarm", "Smoke alarm", "Pool/hot tub without a gate or lock", "Security camera at entrance"] },
  { title: "Cancellation policy", items: ["Free cancellation before 24 hours of check-in", "Review the host's full policy for details"] },
];

export default function ThingsToKnow() {
  return (
    <section className="border-t border-line py-8">
      <h3 className="text-xl font-semibold">Things to know</h3>
      <div className="mt-6 grid grid-cols-3 gap-8">
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-semibold">{c.title}</h4>
            <ul className="mt-3 space-y-2 text-sm text-hof/90">
              {c.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}