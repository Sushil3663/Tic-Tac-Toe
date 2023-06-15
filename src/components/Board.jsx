// import React, { useEffect, useState } from 'react'
// import Block from './Block'

// const Board = () => {
//     const [marks, setMarks] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
//     const [player, setPlayer] = useState(1)


//     useEffect(() => {
//         const combinations = [
//           [0, 1, 2],
//           [3, 4, 5],
//           [6, 7, 8],
//           [0, 3, 6],
//           [1, 4, 7],
//           [2, 5, 8],
//           [0, 4, 8],
//           [2, 4, 6],
//         ];

//         for (let c of combinations) {
//           if (marks[c[0]] === 1 && marks[c[1]] === 1 && marks[c[2]] === 1) {
//             alert('player 1 wins');
//           }
//           if (marks[c[0]] === 2 && marks[c[1]] === 2 && marks[c[2]] === 2) {
//             alert('player 2 wins');

//           }
//         }
//       }, [marks]);

//       const markChange = (i) => {

//         const m = [...marks];
//         if (m[i] === 0 ) {
//           m[i] = player;
//           setMarks(m);
//           setPlayer(player === 1 ? 2 : 1);
//         } else {
//           alert('please click on empty blocks');
//         }
//       };

//     return (


//         <div className='borders'>
//             <div>
//                 <Block mark={marks[0]} position={0} markChange={markChange} />
//                 <Block mark={marks[1]} position={1} markChange={markChange} />
//                 <Block mark={marks[2]} position={2} markChange={markChange} />
//             </div>

//             <div>
//                 <Block mark={marks[3]} position={3} markChange={markChange} />
//                 <Block mark={marks[4]} position={4} markChange={markChange} />
//                 <Block mark={marks[5]} position={5} markChange={markChange} />
//             </div>

//             <div>
//                 <Block mark={marks[6]} position={6} markChange={markChange} />
//                 <Block mark={marks[7]} position={7} markChange={markChange} />
//                 <Block mark={marks[8]} position={8} markChange={markChange} />
//             </div>
//         </div>
//     )
// }

// export default Board

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Block from './Block';
import { setPlayer, setMarks, clearMarks } from '../redux/Slice';

const Board = () => {
    const dispatch = useDispatch();
    const { marks, player } = useSelector((state) => state.player);

    useEffect(() => {
        const combinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let c of combinations) {
            if (marks[c[0]] === 1 && marks[c[1]] === 1 && marks[c[2]] === 1) {
                alert('Player 1 wins');
                dispatch(clearMarks())

            }
            if (marks[c[0]] === 2 && marks[c[1]] === 2 && marks[c[2]] === 2) {
                alert('Player 2 wins');
                dispatch(clearMarks())
            }
        }
    }, [marks, dispatch]);

    const markChange = (i) => {
        const m = [...marks];
        if (m[i] === 0) {
            m[i] = player;
            dispatch(setMarks(m));
            dispatch(setPlayer(player === 1 ? 2 : 1));
        } else {
            alert('Please click on empty blocks');
        }
    };

    return (
        <div className="borders">
            <div>
                <Block mark={marks[0]} position={0} markChange={markChange} />
                <Block mark={marks[1]} position={1} markChange={markChange} />
                <Block mark={marks[2]} position={2} markChange={markChange} />
            </div>

            <div>
                <Block mark={marks[3]} position={3} markChange={markChange} />
                <Block mark={marks[4]} position={4} markChange={markChange} />
                <Block mark={marks[5]} position={5} markChange={markChange} />
            </div>

            <div>
                <Block mark={marks[6]} position={6} markChange={markChange} />
                <Block mark={marks[7]} position={7} markChange={markChange} />
                <Block mark={marks[8]} position={8} markChange={markChange} />
            </div>
        </div>
    );
};

export default Board;
