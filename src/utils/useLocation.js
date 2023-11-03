import { useState} from "react";

const useLocation = () => {
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);

    navigator.geolocation.getCurrentPosition((data) => {
        setLat(data.coords.latitude);
        setLon(data.coords.longitude);
    })

    return [lat, lon];
}


export default useLocation;