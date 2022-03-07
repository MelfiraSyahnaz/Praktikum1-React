import React, { Component } from 'react';

class Harga extends Component {
    constructor() {
        super();
        this.state = {
            hargaPembelian: 0,
            PPN: 0,
            diskon: 0,
            hargaAkhir: 0
        }
    }
    changeHargaPembelian = (event) => {
        this.setState({
            hargaPembelian: event.target.value
        });
    }
    changePPN = (event) => {
        this.setState({
            PPN: event.target.value
        });
    }
    changeDiskon = (event) => {
        this.setState({
            diskon: event.target.value
        });
    }
    calculateHargaAkhir = () => {
        let hargaPembelian = this.state.hargaPembelian;
        let PPN = this.state.PPN;
        let diskon = this.state.diskon;
        let hargaAkhir = ((+hargaPembelian - ((+ diskon / 100) * +hargaPembelian)) + ((+ PPN / 100) * +hargaPembelian));
        this.setState({
            hargaAkhir
        });
    }
    render() {
        return (

            <div className="container col-md-6">
                <div className="card">
                    <div className="card-header">
                        Harga Akhir
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Harga Pembelian</label>
                            <input type="number" className="form-control" onChange={this.changeHargaPembelian} />
                        </div>
                        <div className="form-group">
                            <label>PPN</label>
                            <input type="number" className="form-control" onChange={this.changePPN} />
                        </div>
                        <div className="form-group">
                            <label>Diskon</label>
                            <input type="number" className="form-control" onChange={this.changeDiskon} />
                        </div>
                        <div className="form-group">
                            <button onClick={this.calculateHargaAkhir} className="btn btn-primary">Hitung</button>
                        </div>
                        <div className="form-group">
                            <label>Harga Akhir</label>
                            <input type="number" className="form-control" value={this.state.hargaAkhir} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Harga;