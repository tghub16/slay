import React from 'react';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dmg: 0,
      num: 0,
      vul: false,
      frog: false,
      flight: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  handleClick() {
    let dmg = this.state.dmg;
    let num = this.state.num;
    let vul = this.state.vul;
    let frog = this.state.frog;
    let flight = this.state.flight;
    let vulVal;
    let flightVal;
    let totalDmg;

    switch (vul) {
      case false: 
        vulVal = 1;
        break;
      case true:
        switch (frog) {
          case false:
            vulVal = 1.5;
            break;
          case true:
            vulVal = 1.75;
            break;
          default: 
            console.log('unexpected value');
            break;
        }
        break;
      default:
        console.log('unexpected value');
        break;
    }

    if (flight === false) {
      flightVal = 1;
    } else {
      flightVal = 2;
    }

    totalDmg = Math.floor(Math.floor(Math.floor(dmg) * Math.abs(vulVal)) / Math.floor(flightVal)) * Math.floor(num);
    document.getElementById('totalDamage').innerHTML = totalDmg;
  }

  render() {
    return(
      <div>

        <h1>Slay The Spire Damage Calculator</h1>

        <form>
          <label>
            Damage:
            <input id="dmg" name="dmg" type="number" value={this.state.value} onChange={this.handleChange}/>
          </label>

          <label>
            Number of Hits:
            <input id="num" name="num" type="number" value={this.state.value} onChange={this.handleChange}/>
          </label>

          <label>
            Vulnerable:
            <input id="vul" name="vul" type="checkbox" checked={this.state.vul} onChange={this.handleChange} class="checkbox"/>
          </label>

          <label>
            Paper Frog:
            <input id="frog" name="frog" type="checkbox" checked={this.state.frog} onChange={this.handleChange} class="checkbox"/>
          </label>

          <label>
            Flight:
            <input id="flight" name="flight" type="checkbox" checked={this.state.flight} onChange={this.handleChange} class="checkbox"/>
          </label>
        </form>

        <button onClick={this.handleClick}>Calculate Total Damage</button>

        <p>Total Damage: <span id="totalDamage"></span></p>

      </div>
    )
  }
}

export default App;