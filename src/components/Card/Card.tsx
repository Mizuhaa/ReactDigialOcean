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
    <div className="dark:text-white text-black">
      <div className="text-4xl font-montserrat font-extrabold pb-5">{title}</div>
      <div className="grid grid-cols-3">
        {details}
        {children}
      </div>
    </div>
  );
}
