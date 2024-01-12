import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

function Search({ onSearchChange }) {

    const [search, setSearch] = useState(null);

    // const loadOptions = (inputValue) => {
    //     return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&nameprefix=${inputValue}`, geoApiOptions)
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log(response)
    //         return{
    //             options: response.data.map((city) =>{
    //                 return{
    //                     value: `${city.latitude} ${city.longitutue}` ,
    //                     label: `${city.name} ${city.countryCode}` ,
    //                 }
    //             })
    //         }
    //     })
    //     .catch(err => console.error(err));
    // }
   
    const loadOptions = async (searchInputValue) => {
        try {
            const response = await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${searchInputValue}`, geoApiOptions);
            const result = await response.json();

            return {
                options: result.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                        Population: `${city.population}`,
                    };
                }),
            };
        } catch (error) {
            console.error(error);
        }
    };

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);

    }

    return (
        <AsyncPaginate
            placeholder="Search for City"
            debounceTimeout={2000}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search;




