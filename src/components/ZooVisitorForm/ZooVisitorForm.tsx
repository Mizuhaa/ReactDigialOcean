import React, { useState, useReducer, ChangeEvent, FormEvent } from "react";

interface FormData {
  avis: string;
  count: number | undefined;
  paysSelector: string;
  checkBoxLike: boolean;
}

const initialFormData: FormData = {
  avis: "",
  count: 1,
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

  const handleSubmit = (event: FormEvent) => {
    console.log("Handling submit");
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
    const { name, value, type } = event.target;

    const isCheckbox = type === "checkbox";
    setFormData({
      name,
      value: isCheckbox
        ? (event.target as HTMLInputElement).checked.toString()
        : value,
    });
  };

  return (
    <div className="w-full h-full text-center">
      <div className="inline-block text-left">
        <h1 className="text-2xl font-montserrat text-white">
          Formulaire post-visite du zoo
        </h1>
        {submitting && (
          <div className="text-2xl font-montserrat text-white">
            Envoi en cours... Merci de votre réponse 😊
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <fieldset className="mt-5" disabled={submitting}>
            <label>
              <input
                name="avis"
                className="bg-transparent text-white px-4 py-2 pr-8 w-full mb-2
              border-b border-white focus:border-emerald-300 focus:outline-none "
                placeholder="Avis"
                onChange={handleChange}
                value={formData.avis}
              />
            </label>
            <label>
              <span className="text-white">De quel pays venez-vous ?</span>
              <select
                name="paysSelector"
                onChange={handleChange}
                value={formData.paysSelector}
                className="block bg-white border w-full border-gray-400 hover:border-gray-500 
                px-4 py-2 pr-8 mb-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">--Choisissez une option--</option>
                <option value="france">France</option>
                <option value="spain">Espagne</option>
                <option value="italy">Italie</option>
              </select>
            </label>
            <label>
              <input
                name="count"
                className="bg-transparent text-white w-full px-4 py-2 pr-8 mb-2 
              border-b border-white focus:border-emerald-300 focus:outline-none "
                placeholder="Combien étiez-vous ?"
                onChange={handleChange}
                value={formData.count}
                type="number"
              />
            </label>
            <label className="w-full py-2 pr-8 mb-2 text-white">
              <a>Envoyez un like</a>
              <input
                type="checkbox"
                name="checkBoxLike"
                onChange={handleChange}
                checked={formData.checkBoxLike}
                className="ml-3"
              />
            </label>
          </fieldset>
          <div className="w-full text-center">
            <button
              type="submit"
              className="rounded shadow cursor-pointer
            border border-whhite hover:border-emerald-300
            text-2xl text-emerald-800 dark:text-emerald-50
            bg-emerald-500 hover:bg-emerald-700 px-1 py-2"
              disabled={
                submitting ||
                !formData.avis ||
                !formData.paysSelector ||
                !formData.count
              }
            >
              Valider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
