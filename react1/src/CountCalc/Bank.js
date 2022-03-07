import React, { Component } from 'react';

class Bank extends Component {
    constructor() {
        super();
        this.state = {
            nominal: 0,
            bunga: 0,
            periode: ""
        }
    }
    changeNominal = (event) => {
        this.setState({
            nominal: event.target.value
        });
    }
    changeBunga = (event) => {
        this.setState({
            bunga: event.target.value
        });
    }
    changePeriode = (event) => {
        this.setState({
            periode: event.target.value
        });
    }
    calculate = () => {
        let nominal = this.state.nominal;
        let bunga = this.state.bunga;
        let periode = this.state.periode;
        let hasil = 0;
        //switch statement
        switch (periode) {
            case "6":
                hasil = nominal * (1 + bunga / 100) / 6;
                break;
            case "12":
                hasil = nominal * (1 + bunga / 100) / 12;
                break;
            case "24":
                hasil = nominal * (1 + bunga / 100) / 24;
                break;
            default:
                hasil = "Periode tidak valid";
                break;
        }
        this.setState({
            hasil
        });
    }
    render() {
        return (
            //make a bank calculator with react js


            <div className="container col-md-6">
                <div className='card'>
                    <div className="card-header">
                        BANK
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Nominal</label>
                            <input type="number" className="form-control" onChange={this.changeNominal} />
                        </div>
                        <div className="form-group">
                            <label>Bunga</label>
                            <input type="number" className="form-control" onChange={this.changeBunga} />
                        </div>
                        <div className="form-group">
                            <label>Periode</label>
                            <select className="form-control" onChange={this.changePeriode}>
                                <option value="6">6 Bulan</option>
                                <option value="12">12 Bulan</option>
                                <option value="24">24 Bulan</option>
                            </select>
                        </div>
                        <button className="btn btn-primary" onClick={this.calculate}>Hitung</button>
                        <h1>{this.state.hasil}</h1>
                    </div>
                </div>
            </div>

        );


    }

}
export default Bank;