const initialState = {
    selectedCell: [-1,-1],
    surroundingCells: []
}

const setSelectedCell = () => {
    const rand1 = Math.floor(Math.random() * 9) + 1;
    const rand2 = Math.floor(Math.random() * rand1) + 0;
    return {
      selectedCell: [rand1, rand2],
      surroundingCells: [[rand1-1, rand2-1],[rand1-1, rand2],[rand1-1, rand2+1], [rand1, rand2-1], [rand1, rand2+1], [rand1+1, rand2-1],[rand1+1, rand2],[rand1+1, rand2+1]]
    };
}

export function reducers (state=initialState, action) {
    switch(action.type){
        case 'CLICK_ACTION':
            return setSelectedCell();
        default:
            return state;
    }
}