import React, {useState, useEffect} from 'react';
import { usePhaserGame } from '../hooks/usePhaserGame';
import TestScene from './scenes/TestScene';
import { GridEngine } from "grid-engine";

export const Game = () => {

    const gameConfig = {
        type: Phaser.AUTO,
        parent: "gamediv",
        backgroundColor: '0xffa500', 
        render: {
            antialias: false,
        },
        scale:{
            // width: 700,
            // height: 528,
            mode:  Phaser.Scale.FIT,
            //mode:  Phaser.Scale.RESIZE,
            autoCenter: Phaser.Scale.Center.CENTER_BOTH,
            // width: '100%',
            // height: '100%'
        },
        physics:{
            default: 'arcade',
            arcade:{ gravity: { y: 0 } }
        },
        plugins: {
            scene: [
                {
                    key: "gridEngine",
                    plugin: GridEngine,
                    mapping: "gridEngine",
                },
            ],
        },
        scene: [TestScene]
    }
    const game = usePhaserGame(gameConfig);

    return (
        <div className="flex flex-row justify-start mt-8 ">
            {/* THE GAME */}
            <div className="
            border-2 border-orange-600 rounded-lg
            overflow-hidden
            w-[700px] h-[528px]" id="gamediv">

            </div>

        </div>
    )

}
