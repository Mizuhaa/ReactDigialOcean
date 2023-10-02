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
    <div className="flex flex-wrap Card relative m-0.5 w-full h-full object-contain bg-gradient-to-b from-gray-900/75 to-gray-400/10">
      <div className="">
        <div className="text-4xl font-montserrat font-extrabold text-white pb-5">{title}</div>
        <div className="col-start-1 col-span-3 grid grid-cols-3 text-white ">
          {details}
          {children}
        </div>
      </div>
    </div>
  );
}
