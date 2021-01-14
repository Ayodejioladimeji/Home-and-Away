import React, { Component } from 'react'
import { RoomContext } from '../Context'
import Loading from './Loading';
import Room from './Room';
import StyledTitle from './StyledTitle';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let {loading,featuredRooms: rooms} = this.context;

        rooms = rooms.map(room=>{
            return <Room key={room.id} room={room}/>
        })
        return (
            <section className="featured-rooms">
                <StyledTitle title="Featured"/>

                <div className="featured-rooms-center">
                    {loading? <Loading/> : rooms}
                </div>
            </section>
        )
    }
}
