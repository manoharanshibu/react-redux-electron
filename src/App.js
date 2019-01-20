import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      selectedCell: [-1,-1],
      surroundingCell: []
    }
  }

  onSelect = () => {
    const rand1 = Math.floor(Math.random() * 9) + 1;
    const rand2 = Math.floor(Math.random() * rand1) + 0;
    this.setState({
      selectedCell: [rand1, rand2],
      surroundingCell: [[rand1-1, rand2-1],[rand1-1, rand2],[rand1-1, rand2+1], [rand1, rand2-1], [rand1, rand2+1], [rand1+1, rand2-1],[rand1+1, rand2],[rand1+1, rand2+1]]
    });
  }

  renderSVGBox() {
    const svgHeight = '401px';
    const svgWidth = '401px';
    const divHeight = '401px';
    const divWidth = '401px';
    return (<div className="App">
        <div style={{width: divWidth ,height:divHeight}}>
          <svg width={svgWidth} height={svgHeight} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" stroke-width="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)">
            </rect>
          </svg>
        </div>
      </div>)
  }

  createGridArray( row, column ) {
    const arr = new Array(row);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = new Array(column);
      for (var j = 0; j < arr[i].length; j++) {
        arr[i][j] = {row: i, column: j}
      }
    }
    return arr;
  }

  getCellClassName(row, column){
    if(this.state.selectedCell.toString() === [row,column].toString()){
      return 'table__selected';
    }else{
      const arr = this.state.surroundingCell.filter( item => {
        return (item.toString() === [row,column].toString());
      });
      return arr.length > 0 ? 'table__adjacent' : 'table__cell';
    }
  }

  createTableRowsColumns( arr ) {
    return arr.map( (p, row) =>{
      return (
          <tr className="table__td" key={row}>
              {Object.keys(p).map((k , column) => {
                  return (
                      <td className={ this.getCellClassName(row, column)} key={column}>
                      </td>
                  );
              })}
          </tr>
      );
    });
  }

  render() {
    return (
        <div className="container">
          <table cellSpacing="3" className="table">
            <tbody>{this.createTableRowsColumns(this.createGridArray(10,10))}</tbody>
          </table>
          <button className="button" onClick={this.onSelect}>Select Cells</button>
        </div>
    );
    // return this.renderSVGBox();
  }
}

export default App;
