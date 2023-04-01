import React, {useState} from "react";

export function SearchBar({placeholder, products}) {
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = products.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(searchWord === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter);
        }
    }

    return (
        <div>
            <div>
                <input type="text" placeholder={placeholder} onChange={handleFilter} />
            </div>
            {filteredData.length != 0 && (
                <div>
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <a href={value.link}>
                                <p>{value.title}</p>
                            </a>
                        )
                    })}
                </div>
            )}
        </div>
    )
}