
import React from 'react';

export function ZooVisitorForm() {
  return (
    <div className="p-5">
      <h1>How About Them Apples</h1>
      <form>
        <fieldset className="my-20">
          <label>
            <p>Name</p>
            <input name="name" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ZooVisitorForm;