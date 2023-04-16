import axios from "axios";
import React, { useState } from "react";
import { SetFilterProps } from "../../../presentation/containers/ListPokedex/useFilterPokedex";

interface Option {
    id: number;
    name: string;
}

export const useDropdown = (api: string="", label: string="", setFilter: SetFilterProps) => {
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
    const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
        const value: string = event.currentTarget.value;
        setFilter(label, value);
        
    };
    return { handleChange, handleClick, options, selectedOption, setSelectedOption }

};
