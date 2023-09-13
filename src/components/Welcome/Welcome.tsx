import Sauron from "./sauron.png";

export default function Welcome() {
  const greeting = "greeting";
  return (
    <>
      <div className="text-5xl">
        <h1 id={greeting}>Welcome to my app</h1>
        <p>This is my app</p>
        <img src={Sauron} alt="Sauron image" width={200} height={200} />
      </div>
    </>
  );
}
