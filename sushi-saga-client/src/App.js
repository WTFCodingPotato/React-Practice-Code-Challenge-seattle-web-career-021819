import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.moreButtonClick = this.moreButtonClick.bind(this)
    this.buySushi = this.buySushi.bind(this)
    this.state ={
      sushis: [],
      startIndex: 0,
      purchasedSushis: [],
      balance: 100
    }
  }

  componentDidMount(){
    fetch(API)
      .then(res => res.json())
      .then(json => {
        this.setState({sushis: json})
      })
  }

  sliceSushi(){
    return this.state.sushis.slice(this.state.startIndex, this.state.startIndex + 4)

  }

  buySushi(sushi){
    if((this.state.balance > sushi.price) && (!this.state.purchasedSushis.includes(sushi))){
      this.setState({balance: this.state.balance - sushi.price})
      this.setState({
        purchasedSushis: [...this.state.purchasedSushis, sushi]
      })
    }
  }

  moreButtonClick(){
    this.setState({startIndex: this.state.startIndex +4})
  }

  render() {
    let slicedSushi = this.sliceSushi()
    return (
      <div className="app">
        <SushiContainer
          sushis={slicedSushi}
          moreButtonClick={this.moreButtonClick}
          buySushi={this.buySushi}
          purchasedSushis = {this.state.purchasedSushis}
        />
        <Table
          balance={this.state.balance}
          purchasedSushis = {this.state.purchasedSushis}
          />
      </div>
    );
  }
}

export default App;
