import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Sonamoni - Kids Toy Store`
    }, [title])
};

export default useTitle;