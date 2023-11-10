import {GifItem} from "./GifItem.jsx";
import {useFetchGifs} from "../hooks/useFetchGifs.js";

export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs(category);
    return(
        <div>
            <h3>{category}</h3>
            {isLoading && (<p>CARGANDO...</p>)}
            <div className={'card-grid'}>
                {
                    images.map(({id, title, url}) => (
                        <GifItem key={id} title={title} url={url} />
                    ))
                }
            </div>
        </div>
    );
}