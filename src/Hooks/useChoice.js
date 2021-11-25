import { useState } from "react";

export function useChoice(defaultChoice){
    const [Value, setValue] = useState(defaultChoice);

    function onChange(e){
        setValue(e.target.Value)
    }

    return{
        Value,
        onChange
    }
}