import { useState } from "react";
import { useZooContext } from "../../Context/ZooContext";

export default function ZooNamePicker() {
  const { setName } = useZooContext();
  const [alert, setAlert] = useState(false);

  return (
    <div className="wrapper">
      <h1 className="text-5xl p-5">Choisissez le nom du Zoo</h1>
      <form className="p-3 space-y-3">
        <label>
          <p>Name:</p>
          <input
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-emerald-800 dark:border-emerald-600 dark:placeholder-emerald-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            <div>
              <span role="img" aria-label="allowed">✅</span> Alphanumeric Characters
              <br />
              <span role="img" aria-label="not allowed">⛔️</span> *
            </div>
          }
        </div>
      </form>
    </div>
  );
}
