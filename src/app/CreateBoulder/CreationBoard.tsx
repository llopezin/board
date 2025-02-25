"use client";

import React from 'react'
import Board from '../components/Board/Board';
import Button from '../components/Button/Button';
import useNewBoulderStore from './store/NewBoulderStore';
import { HoldTypes } from '../components/Board/types';


const CreationBoard = () => {
    const { setActiveType, setHold, boulder } = useNewBoulderStore();
    const onBoardClick = (event: React.MouseEvent<SVGElement>) => {
        const hold = event.target as SVGPathElement;

        if (!hold.dataset.holdId) return;
        setHold(hold.dataset.holdId);
    };

    return (
        <>
            <Board onClick={onBoardClick} boulder={boulder} />
            <Button onClick={() => setActiveType(HoldTypes.START)} >Start</Button>
            <Button onClick={() => setActiveType(HoldTypes.TOP)} >Top</Button>
        </>
    )
}

export default CreationBoard