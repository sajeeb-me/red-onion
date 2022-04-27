import { useEffect, useState } from "react";

const useLunch = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://desolate-savannah-70981.herokuapp.com/foods/lunch')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
}

export default useLunch