export const strip = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
export const toKey = (d: Date) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
export const sameDay = (a?: Date | null, b?: Date | null) =>
  !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
export const nightsBetween = (a: Date | null, b: Date | null) =>
  a && b ? Math.max(1, Math.round((strip(b).getTime() - strip(a).getTime()) / 86400000)) : 0;
export const fmtUS = (d?: Date | null) => (d ? `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}` : "");
export const fmtShort = (d?: Date | null) =>
  d ? `${d.getDate()} ${d.toLocaleString("en-GB", { month: "short" })} ${d.getFullYear()}` : "";
export const fmtDayMonth = (d?: Date | null) =>
  d ? `${d.getDate()} ${d.toLocaleString("en-GB", { month: "long" })}` : "";