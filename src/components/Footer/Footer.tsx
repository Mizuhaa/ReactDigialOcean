import FooterSvg from "./FooterSvg";

export default function Footer({ children
}: {
    children?: React.ReactElement[] | React.ReactElement;
}) {
    return (
        <div className="overflow-hidden w-full max-h-auto bg-emerald-950 dark:bg-slate-800 grid grid-flow-row relative pt-56">
            <div className="z-50">
                <div className="overflow-hidden w-full max-h-auto grid grid-flow-row relative">
                    <div className="grid grid-flow-col">
                        {children}
                    </div>
                    <div className="text-center">
                        ©Nicolas Derambure et pas mal le R quand même
                    </div>
                </div>
            </div>
            <FooterSvg />
        </div>
    )
}