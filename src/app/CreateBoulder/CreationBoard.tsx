"use client";

import React from 'react'
import Board from '../components/Board/Board';
import Button from '../components/Button/Button';
import useNewBoulderStore from './store/NewBoulderStore';
import { HoldId, HoldTypes, TwoHoldIdsList } from '../components/Board/types';


const CreationBoard = () => {
    const { setActiveType, setHold, removeHold, activeType, boulder } = useNewBoulderStore();
    const onBoardClick = (event: React.MouseEvent<SVGElement>) => {
        const hold = event.target as SVGPathElement;
        const holdId = hold?.dataset?.holdId;

        if (!holdId) return;

        const activeHoldType = holdTypeIfActive(holdId);
        if (activeHoldType) return removeHold(holdId, activeHoldType);


        if ([HoldTypes.START, HoldTypes.TOP].includes(activeType)) {
            // TO DO - extract magic number
            const isMaxHolds = boulder[activeType].length >= 2;
            const firstInHold = boulder[activeType][0];

            if (isMaxHolds) removeHold(firstInHold, activeType);
        }

        setHold(holdId, activeType);
    };

    const holdTypeIfActive = (holdId: string) => {
        const boulderEntries = Object.entries<Array<HoldId> | TwoHoldIdsList>(boulder);

        for (const [holdType, holdIds] of boulderEntries) {
            if (holdIds.includes(holdId)) {
                removeHold(holdId, holdType as HoldTypes);
            };
        }

        return null;
    };



    return (
        <>
            <Board onClick={onBoardClick} boulder={boulder} />
            <Button onClick={() => setActiveType(HoldTypes.START)} >Start</Button>
            <Button onClick={() => setActiveType(HoldTypes.HAND)} >Hand</Button>
            <Button onClick={() => setActiveType(HoldTypes.TOP)} >Top</Button>
        </>
    )
}

export default CreationBoard