import React from 'react';

class Sort extends React.Component {
    state={
              char:["Z", "A", "Q", "B", "C", "Y", "S", "W" ]
            }

    render() {
        return (
            <div>
              <h1 >  {this.state.char.sort().join(' . ')}</h1>
            </div>
        );
    }

}
export default Sort;