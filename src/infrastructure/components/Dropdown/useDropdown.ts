import axios from "axios";
import { useState } from "react";

interface Option {
    id: number;
    name: string;
}

export const useDropdown = (api: string="") => {
    const [options, setOptions] = useState<Option[]>([]);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const handleClick = async () => {
        try {
            const { data } = await axios.get(api, {
                params: {},
            });
            const result = data.results?data.results:data;
            if(result.length>0) setOptions(result);
        } catch (error) {
            console.error('Failed to fetch options', error);
        }
    };
    return { handleClick, options, selectedOption, setSelectedOption }

};
