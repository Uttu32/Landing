import React from 'react'
import "./Card.css";

const Card = ({ data }) => {

    return (
        <>
        <h1 className=" mx-4 px-4 text-center text-3xl text-bold text-green-300">Items</h1>
            <div className=" mx-4 px-4 my-2 flex gap-16 flex-wrap pb-8">
                {
                    data.map((ele, i) => {
                        return (
                            <div className="Card" key={i}>
                                <img className="h-full w-full" src={ele.image} alt={ele.food} />

                                <div className="Content">
                                    <h4 className="">{ele.food}</h4>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Card
