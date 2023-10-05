import { useState } from "react";
import { useZooContext } from "../../Context/ZooContext";

export default function ZooNamePicker() {
  const { setName } = useZooContext();
  const [alert, setAlert] = useState(false);

  return (
    <div className="wrapper">
      <h1 className="text-3xl p-5 text-gray-600 dark:text-white">Choisissez le nom du Zoo</h1>
      <form>
        <label>
          Name:
          <input
            name="name"
            className="p-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block 
            dark:bg-emerald-800 dark:border-emerald-600 dark:placeholder-emerald-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            autoComplete="off"
            onChange={(event) => setName(event.target.value)}
            onFocus={() => setAlert(true)}
            onBlur={() => setAlert(false)}
          />
        </label>
        <div className="p-2">
          <button
            className="text-2xl text-emerald-800 dark:text-emerald-50 cursor-pointer border border-emerald-300 hover:border-red-800"
            onClick={() => setAlert(true)}
            type="button"
          >
            More information
          </button>
          {alert &&
            <div className="flex flex-row">
              <span role="img" aria-label="allowed">✅Alphanumeric Characters</span> 
              <span role="img" aria-label="not allowed">⛔️</span> *
            </div>
          }
        </div>
      </form>
    </div>
  );
}
