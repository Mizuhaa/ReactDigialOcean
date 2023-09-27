import { ChangeEvent, FormEvent, useReducer, useState } from "react";

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

export function ZooVisitorForm() {
    const [formData, setFormData] = useReducer(formReducer, initialFormData);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
            setFormData({
                reset: true,
            });
        }, 3000);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value, type } = event.target;
        const isCheckbox = type === "checkbox";

        setFormData({
            name,
            value: isCheckbox ? (event.target as HTMLInputElement).checked.toString() : value,
        });
    };

    return (
        <div className="p-5">
            <h1>Qu'avez vous pensé du zoo?</h1>
            {submitting && (
                <div>
                    Submitting Form...
                    <ul>
                        {Object.entries(formData).map(([name, value]) => (
                            <li key={name}>
                                <strong>{name}</strong>: {value.toString()}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-40">
                <fieldset>
                    <label>
                        <p>Avis</p>
                        <input
                            name="avis"
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-emerald-800 dark:border-emerald-600 dark:placeholder-emerald-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={handleChange}
                            value={formData.avis}
                        />
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        <p>De quel pays venez-vous ?</p>
                        <select
                            name="paysSelector"
                            onChange={handleChange}
                            value={formData.paysSelector}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
                        >
                            <option value="">--Choisissez une option--</option>
                            <option value="france">France</option>
                            <option value="spain">Espagne</option>
                            <option value="italy">Italie</option>
                        </select>
                    </label>
                    <label>
                        <p>Combien étiez-vous?</p>
                        <input
                            type="number"
                            name="count"
                            onChange={handleChange}
                            value={formData.count}
                            step="1"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-emerald-800 dark:border-emerald-600 dark:placeholder-emerald-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </label>
                    <label className="flex flex-row py-3 space-x-3 cursor-pointer">
                        <p>Envoyez un like</p>
                        <input type="checkbox" name="checkBoxLike" onChange={handleChange} checked={formData.checkBoxLike} />
                    </label>
                </fieldset>
                <button
                    type="submit"
                    className="p-2 rounded-md bg-slate-500 text-2xl text-white dark:text-emerald-50 cursor-pointer border-emerald-300"
                    disabled={submitting || !formData.avis || !formData.paysSelector || !formData.count}
                >
                    Valider
                </button>
            </form>
        </div>
    );
}
