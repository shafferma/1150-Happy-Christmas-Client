import { useState } from "react"

export const useEventHook = () => {
    const [fns, setFns] = useState([])

    function on(fn) {
        setFns([...fns, fn])

        return {
            off: () => off(fn)
        }
    }

    function off(fn) {
        const index = fns.indexOf(fn)

        if (index !== -1) {
            setFns(fns.filter((fn, i) => i !== index))
        }
    }

    function trigger(context) {
        for (const fn of fns) {
            fn(context)
        }
    }

    return {
        on,
        off,
        trigger,
    }
}