import { useState, useEffect } from 'react';
import {getGifs} from "../helpers/getGifs.js";

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    },[]);

    return {
        images,
        isLoading
    };



        // const [state, setstate] = useState({
        //     data: [],
        //     loading: true
        // });
        //
        // useEffect( () => {
        //     getGifs( category )
        //         .then( imgs => {
        //             setstate({
        //                 data: imgs,
        //                 loading: false
        //             });
        //         });
        // }, [category]);
        //
        // return state; // { data: [], loading: true };
}