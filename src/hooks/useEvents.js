import { useEffect, useState } from "react";

const useEvents = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://hidden-hollows-07367.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);
    
    return [events]
};

export default useEvents;