import { useEffect } from "react"



const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | HeroicHavens`
    }, [title])
}

export default useTitle