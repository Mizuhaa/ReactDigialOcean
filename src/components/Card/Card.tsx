export default function Card({
  children,
  details = null,
  title,
}: {
  children: React.ReactElement[] | React.ReactElement;
  details?: React.ReactElement | null;
  title: string;
}) {
  return (
    <div className="flex flex-wrap Card">
      <div className="grid grid-rows-3 grid-cols-3 divide-y-2 divide-slate-900 hover:divide-emerald-500">
        <div className="text-3xl col-start-2 underline">{title}</div>
        <div className="text-2xl col-start-2">Details:</div>
        <div className="col-start-1 col-span-3 grid grid-cols-3">
          {details}
          {children}
        </div>
      </div>
    </div>
  );
}
