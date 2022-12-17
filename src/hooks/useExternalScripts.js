import { useEffect } from 'react';

export default function useExternalScripts(url) {
    useEffect(() => {
        const script = document.createElement('script');
        document.body.removeChild(script);
        script.src = url;
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, [url]);
};
