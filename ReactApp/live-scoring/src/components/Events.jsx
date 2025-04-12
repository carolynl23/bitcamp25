import { useState } from 'react'
import EventTable from './EventTable'

const n = 3;

export default function Events(){
    return ([...Array(n)].map((e, i) =>
        <>
            <EventTable></EventTable>
            <br></br>
        </>))
}