import {useState} from "react";

export const AddCategory = ({onNewCategory}) => {
    const [input, setInput] = useState('');

    const handleInputChange = ({target}) => {
        const valor = target.value;
        setInput(valor);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(input.length <= 1) return;
        onNewCategory(input);
        setInput('');
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Buscar Gifs..."
                    value={input}
                    onChange={handleInputChange}
                />
            </form>
        </>
    );
}