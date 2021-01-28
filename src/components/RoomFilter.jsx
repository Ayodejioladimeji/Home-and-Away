import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from '../components/Title'

// get all unique values
const getUnique = (items, value)=>{
    return [...new Set(items.map(item=>item[value]))]
}

const RoomFilter = ({rooms}) => {
    const context = useContext(RoomContext);
    const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = context;

    // GET UNIQUE TYPES 
    let types = getUnique(rooms, "type");

    // ADD ALL
    types = ['all',...types];

    // MAP TO JSX
    types = types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms, 'capacity');
    people = people.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                {/* SELECT TYPE */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* END OF SELECT TYPE */}

                
                {/* SELECT GUEST */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* END OF SELECT TYPE */}


                {/* ROOM PRICE */}
                    <div className="form-group">
                        <label htmlFor="price">room price ₦{price}</label>
                        <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
                    </div>
                {/* END OF ROOM PRICE */}


                {/* SIZE */}
                    <div className="form-group">
                        <label htmlFor="size">room size</label>
                        <div className="size-inputs">
                            <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
                            <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
                        </div>
                    </div>
                {/* END OF SIZE */}


                {/* EXTRAS */}
                    <div className="form-group">
                        <div className="single-extra">
                            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                            <label htmlFor="breakfast">breakfast</label>
                        </div>

                        <div className="single-extra">
                            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                            <label htmlFor="pets">Pets</label>
                        </div>
                    </div>
                {/* END OF EXTRAS */}

            </form>
        </section>
    )
}

export default RoomFilter
