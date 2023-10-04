import React, { useState, useReducer, ChangeEvent, FormEvent } from "react";

interface FormData {
  avis: string;
  count: number;
  paysSelector: string;
  checkBoxLike: boolean;
}

const initialFormData: FormData = {
  avis: "",
  count: 10,
  paysSelector: "",
  checkBoxLike: false,
};

type FormAction = { name: string; value: string | number } | { reset: true };

const formReducer = (state: FormData, action: FormAction) => {
  if ("reset" in action && action.reset) {
    return initialFormData;
  }
  if ("name" in action) {
    return {
      ...state,
      [action.name]: action.value,
    };
  }
  return state;
};

export default function ZooVisitorForm() {
  const [formData, setFormData] = useReducer(formReducer, initialFormData);
  const [submitting, setSubmitting] = useState(false);

  console.log(submitting || !formData.avis || !formData.paysSelector || !formData.count)

  const handleSubmit = (event: FormEvent) => {
    console.log("Handling submit")
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true,
      });
    }, 3000);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    console.log("Handling change...")
    const { name, value, type } = event.target;
    const isCheckbox = type === "checkbox";
    setFormData({
        name,
        value: isCheckbox ? (event.target as HTMLInputElement).checked.toString() : value,
    });
};
  return (
    <div className="w-full h-full">
      <h1>Qu'avez vous pensé du zoo?</h1>
      {submitting && (
        <div>
          Submtting Form...
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>:{value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <fieldset className="my-5" disabled={submitting}>
          <label>
            Avis
            <input
              name="avis"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block p-2.5 
              dark:bg-emerald-800 dark:border-emerald-600 dark:placeholder-emerald-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
              disabled:bg-gray-500 disabled:border-emerald-50"
              onChange={handleChange}
              value={formData.avis}
            />
          </label>
        </fieldset>
        <fieldset disabled={submitting}>
          <label>
            De quel pays venez-vous ?
            <select
              name="paysSelector"
              onChange={handleChange}
              value={formData.paysSelector}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-emerald-500 focus:border-emerald-500 block 
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
            >
              <option value="">--Choisissez une option--</option>
              <option value="france">France</option>
              <option value="spain">Espagne</option>
              <option value="italy">Italie</option>
            </select>
          </label>
          <label>
            Combien étiez-vous?
            <input
              type="number"
              name="count"
              onChange={handleChange}
              value={formData.count}
              step="1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 
              dark:bg-emerald-800 dark:border-emerald-600 dark:placeholder-emerald-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
              disabled:bg-gray-500 disabled:border-emerald-50"
            />
          </label>
          <label className="flex flex-row py-3 space-x-3">
            Envoyez un like
            <input
              type="checkbox"
              name="checkBoxLike"
              onChange={handleChange}
              checked={formData.checkBoxLike}
            />
          </label>
        </fieldset>
        <button
          type="submit"
          className="text-2xl text-emerald-800 dark:text-emerald-50 cursor-pointer border border-emerald-300 hover:border-red-800"
          disabled={submitting || !formData.avis || !formData.paysSelector || !formData.count }
        >
          Valider
        </button>
      </form>
    </div>
  );
}