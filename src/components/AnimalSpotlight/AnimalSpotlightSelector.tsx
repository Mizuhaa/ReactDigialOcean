import { useZooContext } from "../../Context/ZooContext";
import MagnifierSvg from "./MagnifierSvg";

export default function AnimalSpotlightSelector({
  animalName,
}: {
  animalName: string;
}) {
  const { setSpotlightAnimalName } = useZooContext();

  return (
    <div>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1280.000000pt"
        height="1280.000000pt"
        viewBox="0 0 1280.000000 1280.000000"
        preserveAspectRatio="xMidYMid meet"
        className="relative h-1/6 w-1/12 fill-gray-100 dark:fill-gray-50 cursor-pointer"
        onClick={() => setSpotlightAnimalName(animalName)}
      >
        <MagnifierSvg />
      </svg>
    </div>
  );
}
