
import React, { useState, useReducer, ChangeEvent, FormEvent } from 'react';

interface FormData {
  [key: string]: string;
}

const formReducer = (state: FormData, event: { name: string; value: string }) => {
  if (event.reset) {
    return {
      Avis: '',
      count: 10,
      paysSelector: '',
      'checkBoxLike': false,
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
}

export function ZooVisitorForm() {
  const [formData, setFormData] = useReducer(formReducer, {count: 10});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 3000)
  };


  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: isCheckbox ? (event.target as HTMLInputElement).checked.toString() : event.target.value,
    });
  }

  return (
    <div className="p-5">
      <h1>Qu'avez vous pensé du zoo?</h1>
      {submitting &&
        <div>Submtting Form...
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>:{value.toString()}</li>
            ))}
          </ul>
        </div>

      }
      <form onSubmit={handleSubmit}>
        <fieldset className="my-5">
          <label>
            <p>Avis</p>
            <input name="Avis"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-emerald-800 dark:border-emerald-600 dark:placeholder-emerald-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              value={formData.Avis || ''} />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>De quel pays venez-vous ?</p>
            <select name="paysSelector" onChange={handleChange} value={formData.paysSelector || ''} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500'>
              <option value="">--Choisissez une option--</option>
              <option value="france">France</option>
              <option value="spain">Espagne</option>
              <option value="italy">Italie</option>
            </select>
          </label>
          <label>
            <p>Combien étiez-vous?</p>
            <input type="number" name="count" onChange={handleChange} value={formData.count || ''} step="1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-emerald-800 dark:border-emerald-600 dark:placeholder-emerald-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </label>
          <label className="flex flex-row py-3 space-x-3">
            <p>Envoyez un like</p>
            <input type="checkbox" name="checkBoxLike" onChange={handleChange} checked={formData.checkBoxLike || false} />
          </label>
        </fieldset>
        <button type="submit" className="text-2xl text-emerald-800 dark:text-emerald-50 cursor-pointer border border-emerald-300 hover:border-red-800">Valider</button>
      </form>
    </div>
  )
}

export default ZooVisitorForm;