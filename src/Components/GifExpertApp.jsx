import React, {useState} from 'react';
import {AddCategory} from "./AddCategory.jsx";
import {GifGrid} from "./GifGrid.jsx";

const apiKey = 'LHz4L30LvIylyKpruDFgKThDOj5Ku93R'
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

export const GifExpertApp = () => {

    const [categories, setCategory] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategory((prev) => [newCategory, ...prev]);
    }

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory onNewCategory={onAddCategory}/>
            <hr />
            {categories.map((item) => (<GifGrid key={item} category={item}/>))}
            <hr />
        </>
    );
}