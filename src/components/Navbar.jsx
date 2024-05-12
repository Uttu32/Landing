import React, { useEffect, useState } from 'react';
import { allData } from "../assets/data";

function Navbar({ func }) {
    const [input, setInput] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    function handleInput(e) {
        setInput(e.target.value);
    }



    useEffect(() => {
        if (input.trim() === "") {
            func(allData);
        } else {
            const filtered = allData.filter((item) => {
                return item.food.toLowerCase().startsWith(input.toLowerCase());
            });
            setFilteredData(filtered);
            func(filtered); // Call func with the updated filtered data directly
        }
    }, [input]);


    return (
        <div>
            <nav class="bg-gray-800">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="relative  flex h-16 items-center justify-between">
                        <div class="flex flex-1 w-full lg:w-1/3 items-center justify-between lg:justify-center sm:items-stretch sm:justify-start">
                            <div class="flex flex-shrink-0 items-center">
                                <span className="text-2xl text-white font-bold ">FOODMART</span>
                            </div>

                        </div>


                        <div class="absolute w-1/2 lg:w-2/3 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 justify-center gap-2 lg:gap-3">
                            <input
                                value={input}
                                onChange={(e) => handleInput(e)}
                                type="text" placeholder="Search by Food Name" className="bg-gray-1000 w-2/3 lg:w-2/5 rounded-md px-3 py-2 text-sm font-medium text-black" />

                        </div>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
