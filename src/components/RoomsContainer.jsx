import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {withRoomConsumer} from '../Context'
import Loading from './Loading'

const RoomsContainer = ({context}) => {
    const {loading, sortedRooms, rooms} = context;
    if(loading){
        return <Loading/>;
    }
    return(
        <>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </>
    )
}

export default withRoomConsumer(RoomsContainer)
