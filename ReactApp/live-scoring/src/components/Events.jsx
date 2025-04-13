import { useState } from 'react'
import EventTable from './EventTable'

function getEventCount(ring){
    return ring;
}

export default function Events({ring}){
    return ([...Array(getEventCount(ring))].map((e, i) =>
        <>
            <EventTable eventid={i + 1}></EventTable>
            <br></br>
        </>))
}