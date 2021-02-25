import React from "react"
import { string } from "prop-types";

class Cart extends React.Component{
    constructor(){
        super()
        this.state = {
            cart: [], //unruk menyimpan list cart
            user: "", //untuk menyimpan data namauser
            total: 0, //untuk menyimpan data total belanja
            selectedItem: null
        }
    }

    //memanggil data dengan fungsi baru
    initCart = () => {
        //memanggil data cart pada localstorage
        let tempCart = JSON.parse(localStorage.getItem("cart"))

        //memanggil data user
        let userName = localStorage.getItem("user")

        //kalkulasi total belanja
        let totalHarga = 0
        if(tempCart.length != 0){
            tempCart.map(item => { totalHarga += (item.harga * item.jumlahBeli)
        })}

        //memasukan data cart, total harga dan user pada state
        this.setState({
            cart: tempCart,
            user: userName,
            total: totalHarga
        })
    }

    //fungsi menghaupus dari cart
    Drop = (item) => {
        //beri konfirmasi untuk menghapus data
        if(window.confirm("apakah anda yakin ingin menghapus data ini?")){
            //menghapus data
            let tempCart = JSON.parse(localStorage.getItem("cart"))

            //posisi index data yang akan dihapus
            let index = tempCart.indexOf(item)

            //settelah menemukan hapus data
            tempCart.splice(index, 1)

            //kembalikan data ke state buku
            localStorage.setItem("cart", JSON.stringify(tempCart))
            this.setState({cart: tempCart})
            this.initCart()
        }
    }

    // menambahkan Fuction ADD cart
    Add = (item) => {
        let tempCart = this.state.cart
        let index = tempCart.indexOf(item)

        tempCart[index].jumlahBeli = parseInt(item.jumlahBeli) + 1

        this.setState({ cart: tempCart })

        let stringcart = JSON.stringify(this.state.cart)

        localStorage.setItem("cart", stringcart)
    }

    // fungsi untuk mengurangi item atau mendistract item
    substract = (item) => {
        let tempCart = this.state.cart
        let index = tempCart.indexOf(item)

        if (item.jumlahBeli <= 1) {
            if (window.confirm("apakah anda yakin menghapus barang dari keranjang? ")) {
                tempCart.splice({ cart: tempCart })
                this.setState({ cart: tempCart })
            } else {
                this.setState({ cart: tempCart })
            }
        } else {
            tempCart[index].jumlahBeli = parseInt(item.jumlahBeli) - 1
            this.setState({cart: tempCart})
        }

        //localstorage
        let stringcart = JSON.stringify(this.state.cart)
        localStorage.setItem("cart", stringcart)
    }

    //fungsi memanggil init cart setelah di render
    componentDidMount(){
        this.initCart()
    }

    render(){
        return(
            <div className="container">
                <div className="card col-12 mt-2">
                    <div className="card-header bg-primary text-white">
                        <h4>Data Keranjang Belanja</h4>
                    </div>

                    <div className="card-body">
                        <h5 className="text-primary">
                            Naama User : {this.state.user}
                        </h5>

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Nama Item</th>
                                    <th>Harga</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.state.cart.map((item, index) => (
                                    <tr key={index}>
                                        <td>{ item.judul}</td>
                                        <td>{ item.harga}</td>
                                        <td>{ item.jumlahBeli}</td>
                                        <td>
                                            Rp. {item.harga * item.jumlahBeli}
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-danger m-1"
                                                onClick={() => this.Drop(item)}>
                                                    Hapus
                                            </button>
                                            <button className="btn btn-sm btn-success m-1"
                                                onClick={() => this.Add(item)}>
                                                    Tambah
                                            </button>
                                            <button className="btn btn-sm btn-warning m-1"
                                                onClick={() => this.substract(item)}>
                                                    Kurang
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* utnuk total harga */}
                        <h4 className="text-danger">Total Harga : Rp {this.state.total}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;