import React, { Component } from 'react'
import items from './data'
// import withRoomConsumer from './components/RoomsContainer';

const RoomContext = React.createContext();

class RoomProvider extends Component {
    // THE STATE OF THE CONTEXT
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    };

    // THE COMPONENT DID MOUNE
    componentDidMount(){
        let rooms = this.formatData(items);  //   <----PASSING THE ARRAY FROM THE LOCAL DATA
        let featuredRooms = rooms.filter(room=> room.featured === true);

        //  THE FILTER COMPONENT
            let maxPrice = Math.max(...rooms.map(item=>item.price));
            let maxSize = Math.max(...rooms.map(item=>item.size));
        
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false,
            price:maxPrice,
            maxPrice,
            maxSize
        })
    }


    // GETTING DATA FROM THE API



    // THE FORMATDATA FUNCTION -- THE (ITEMS) IS JUST A PARAMETER
    formatData(items){
        let tempItems = items.map(item=>{
            // SETTING AND DESTRUCTURING THE DATA
            let id = item.sys.id
            let images = item.fields.images.map(image=>{
                return(
                    image.fields.file.url
                );
            })

            let room = {...item.fields, images, id};
            return room;
            })
            return tempItems;
        }

        getRoom = (slug)=>{
            let tempRooms = [...this.state.rooms];
            const room = tempRooms.find(room=>room.slug === slug)
            return room;
        }

        handleChange=(event)=>{
            const target = event.target
            const value = event.type === "checkbox" ? target.checked : target.value
            const name = event.target.name
            // console.log(type,name,value)
            this.setState({
                [name]:value
            }, this.filterRooms)
        }

        filterRooms = ()=>{
            let{rooms, type, capacity, price, minSize, maxSize, breakfast, pets} = this.state

            // ALL THE ROOMS
            let tempRooms = [...rooms];

            // TRANSFORM VALUE
            capacity = parseInt(capacity)

            // TRANSFORM VALUE
            price = parseInt(price)

            // FILTER BY TYPE
            if(type!== 'all'){
                tempRooms = tempRooms.filter(room=>room.type === type)
            }

            // FILTER BY CAPACITY
            if(capacity !==1){
                tempRooms = tempRooms.filter(room=>room.capacity >= capacity)
            }

            // FILTER BY PRICE
            tempRooms = tempRooms.filter(room=>room.price <= price);


            // CHANGING THE STATE
            this.setState({
                sortedRooms: tempRooms
            })
        };

    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom:this.getRoom, handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}


const RoomConsumer = RoomContext.Consumer;


// HIGHER ORDER COMPONENT -- RETURN ANOTHER FUNCTION
export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return (
            <RoomConsumer>
                {value => <Component {...props} context={value}/>}
            </RoomConsumer>
        )
    }
}


export {RoomProvider, RoomConsumer, RoomContext}
