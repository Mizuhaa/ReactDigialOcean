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
      <div className="grid grid-cols-3 divide-y-2 divide-emerald-300 hover:divide-emerald-700">
        <div className="text-3xl col-start-2 font-montserrat font-extrabold">{title}</div>
        <div className="col-start-1 col-span-3 grid grid-cols-3 card divide-x-2 divide-emerald-300 hover:divide-emerald-700 ">
          {details}
          {children}
        </div>
      </div>
    </div>
  );
}
