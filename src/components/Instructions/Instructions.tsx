import emoji from "./emoji.svg";

const Instructions=()=> (
    <div className="bg-sky-900 max-w-md max-h-fit">
      <img alt="laughing crying emoji" src={emoji} />
      <p className="capitalize underline ">Click on an emoji to view the emoji name</p>
    </div>
  );

export default Instructions;