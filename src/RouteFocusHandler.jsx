import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteFocusHandler() {
const { pathname } = useLocation();

useEffect(() => {
    const main = document.getElementById("main-content");
    if (main) {
    main.focus();
    }
}, [pathname]);

return null;
}
