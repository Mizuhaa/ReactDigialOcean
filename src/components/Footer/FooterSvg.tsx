import FooterBushSvg from "./FooterBushSvg";

export default function FooterSvg() {
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            // width="3000.000000pt" height="3000.000000pt" viewBox="0 0 3000.000000 3000.000000"
            preserveAspectRatio="xMidYMid meet"
            className="absolute w-full h-full"
        >
            <g transform="translate(-600 753) scale(.1 -.1)" className="fill-emerald-500/90">
                <FooterBushSvg />
            </g>
            <g transform="translate(200 760) scale(.1 -.1)" className="fill-emerald-700/20">
                <FooterBushSvg />
            </g>
            <g transform="translate(600 769) scale(.1 -.1)" className="fill-emerald-400/90">
                <FooterBushSvg />
            </g>
            <g transform="translate(-200 761) scale(.1 -.1)" className="fill-emerald-200/75">
                <FooterBushSvg />
            </g>
            <g transform="translate(-600 766) scale(.3 -.1)" className="fill-emerald-900">
                <FooterBushSvg />
            </g>
        </svg>
    )
}