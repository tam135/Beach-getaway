
import React from "react";
import { withRoomConsumer } from "../context";
import Loading from "./Loading.js";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import {RoomConsumer} from '../context'

/* function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(RoomContainer); */

export default function RoomContainer() {
    return (
        <RoomConsumer>
            {value => {
                const { loading, sortedRooms, rooms } = value
                if(loading) {
                    return <Loading/>
                }
                return (
                    <div>
                        Hello from rooms RoomContainer
                        <RoomsFilter rooms={rooms}/>
                        <RoomsList rooms={sortedRooms}/>
                    </div>
                )
            }}
        </RoomConsumer>
    )
}