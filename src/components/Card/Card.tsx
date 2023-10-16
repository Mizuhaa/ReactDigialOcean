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
    <div className="dark:text-white text-black h-full grid grid-rows-2 text-center">
      <div className="text-4xl font-montserrat font-extrabold pb-5">{title}</div>
      <div className="grid grid-cols-2">
        {details}
        {children}
      </div>
    </div>
  );
}
