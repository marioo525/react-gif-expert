import { useState } from "react";
import {AddCategory,GifGrid} from './components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Formula 1"]);

  const onAddCategory = (newCategory) => {
    //console.log(newCategory);
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    // setCategories(cat => [...cat, 'FC Barcelona']); Es otra forma
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
        // <div key={category}>
        //   <h2>{category}</h2>
        //   <li>{category}</li>
        // </div>
      ))}
    </>
  );
};
