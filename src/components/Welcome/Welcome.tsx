import Sauron from "./sauron.png";
import "./Welcome.css";

export default function Welcome() {
  const greeting = "greeting";
  return (
    <>
      <div className="wrapper">
        <h1 id={greeting}>Welcome to my app</h1>
        <p>This is my app</p>
        <img src={Sauron} alt="Sauron image" width={200} height={200} />
      </div>
    </>
  );
}
