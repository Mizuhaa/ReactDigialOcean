import { useState } from "react";
import { useZooContext } from "../../Context/ZooContext";

export default function ZooNamePicker() {
  const { name, setName } = useZooContext();
  const [alert, setAlert] = useState(false);
  const validate = (event: { preventDefault: () => void }) => {
    if (/\*/.test(name)) {
      event.preventDefault();
      setAlert(true);
      return;
    }
    setAlert(false);
  };

  return (
    <div className="wrapper">
      <h1 className="text-5xl p-5">Choisissez le nom du Zoo</h1>
      <div className="border-2 p-5 border-emerald-300 border-solid">
        <h2>Preview: {name}</h2>
      </div>
      <form className="p-3 space-y-3">
        <label>
          <p>Name:</p>
          <input
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-emerald-800 dark:border-emerald-600 dark:placeholder-emerald-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            autoComplete="off"
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        {alert && <div>Forbidden character: *</div>}
        <div>
          <button
            type="button"
            className="bg-emerald-300 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
            onClick={validate}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
