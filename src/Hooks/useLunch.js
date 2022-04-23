import { useEffect, useState } from "react";

const useLunch = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/foods/lunch')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
}

export default useLunch