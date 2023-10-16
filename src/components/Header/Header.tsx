export default function Header({ children
}: {
    children?: React.ReactElement[] | React.ReactElement;
}) {
    return (
        <div className="w-full max-h-[10rem] min-h-[5rem] bg-slate-950 dark:bg-slate-800 sticky flex top-0 z-50">
            Hi!
            <div className="h-full object-cover absolute right-0">
            {children}
            </div>
        </div>
    )
}