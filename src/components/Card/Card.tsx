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
    <div className="">
      <div className="">
        <div className="text-4xl font-montserrat font-extrabold  pb-5 dark:text-white text-black">{title}</div>
        <div className="grid grid-cols-3 dark:text-white text-black  ">
          {details}
          {children}
        </div>
      </div>
    </div>
  );
}
