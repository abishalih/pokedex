import _debounce from 'lodash/debounce';
import React from 'react';
import { SetFilterProps } from '../../../presentation/containers/ListPokedex/useFilterPokedex';

type Props = {
    placeholder?: string;
    setFilter: SetFilterProps;
}

export const useSearchBar = ({ placeholder="", setFilter }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = event.currentTarget.value;
        const debouncedSave = _debounce((nextValue) =>  setFilter("name", nextValue), 1000);
        debouncedSave(value);
       
    };
    return { 
        onChange: handleChange, 
        placeholder 
    }
}