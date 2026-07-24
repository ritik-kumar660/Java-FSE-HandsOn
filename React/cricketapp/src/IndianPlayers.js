import React from "react";

const T20Players = [
    "First Player",
    "Second Player",
    "Third Player"
];

const RanjiTrophyPlayers = [
    "Fourth Player",
    "Fifth Player",
    "Sixth Player"
];

export const IndianPlayers = [
    ...T20Players,
    ...RanjiTrophyPlayers
];


export function OddPlayers({ players }) {

    const [first, , third, , fifth] = players;

    return (
        <div>
            <li>First : {first}</li>
            <li>Third : {third}</li>
            <li>Fifth : {fifth}</li>
        </div>
    );
}

export function EvenPlayers({ players }) {

    const [, second, , fourth, , sixth] = players;

    return (
        <div>
            <li>Second : {second}</li>
            <li>Fourth : {fourth}</li>
            <li>Sixth : {sixth}</li>
        </div>
    );
}

export function ListofIndianPlayers({ IndianPlayers }) {
    return (
        <div>
            {IndianPlayers.map((item, index) => (
                <li key={index}>Mr. {item}</li>
            ))}
        </div>
    );
}