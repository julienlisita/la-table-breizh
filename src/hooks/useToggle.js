// src/hooks/useToogle.jsx

"use client"

import { useState } from "react";

export default function useToggle(initial=false)
{
    const [state, setState] = useState(initial)

    const toggleState = () => {
        setState(prev => !prev)
    }

    return {state, toggleState}
}