import { useEffect } from 'react';

export default function useExternalStyles(url) {
    useEffect(() => {
        const link = document.createElement("link");
        document.head.removeChild(link);
        link.setAttribute("href", url);
        link.setAttribute("rel", "stylesheet");
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        };
    }, [url]);
}
