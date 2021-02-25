import React from "react"
import Card from "../components/Card"
import $ from "jquery"
import "bootstrap/dist/js/bootstrap.bundle"

class kalender extends React.Component{
    constructor(){
        super() 
        this.state = {
            event: [
                {
                    namaevent: "Hari Peringatan Laut dan Samudera Nasional", tanggal:"15 Januari", cover:"https://images.unsplash.com/photo-1583946635841-397b73089648?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2FtdWRlcmElMjBzZWF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                    namaevent: "Hari Lahan Basah Sedunia", tanggal:"2 Februari", cover:"https://images.unsplash.com/photo-1585399365490-20ce9c4a73a6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8dGFuYWh8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                    namaevent: "Hari Peduli Sampah Nasional", tanggal:"21 Februari", cover:"https://images.unsplash.com/photo-1586041828039-b8d193d6d1dc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhc3RpY3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                    namaevent: "Hari Hutan Sedunia", tanggal:"21 Maret", cover:"https://images.unsplash.com/photo-1573702162460-91b6fe474bbc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aHV0YW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
            ],

            action: " ",
            namaevent: " ",
            tanggal: " ",
            cover: "",
            selectedItem: null,
            keyword: "",
            filterEvent: []
        }

        this.state.filterEvent = this.state.event
    }

    // fungsi menabah data
    Add = () => {
        //menampilkan komponen modal nya
        $("#modal_event").modal("show")

        //mengosong data setelah ditambahkan
        this.setState({
            namaevent: "",
            tanggal: "",
            cover: "",
            action: "insert"
        })
    }

    //fungsi edit
    Edit = (item) => {
        //menampilkan komponen modal nya
        $("#modal_event").modal("show")

        //form control
        this.setState({
            namaevent: item.namaevent,
            tanggal: item.tanggal,
            cover: item.cover,
            action: "update",
            selectedItem: item,   
        })
    }

    //fungsi save
    Save = (Event) => {
        Event.preventDefault();
        //perintah menampung data state buku
        let tempEvent = this.state.event

        //membagi kondisi 
        if (this.state.action === "insert") {
            //menambah data baru
            tempEvent.push({
                namaevent: this.state.namaevent,
                tanggal: this.state.tanggal,
                cover: this.state.cover,
            })
        } else if(this.state.action === "update"){
            //menyimpan perubahan baru
            let index = tempEvent.indexOf(this.state.selectedItem)
            tempEvent[index].namaevent = this.state.namaevent
            tempEvent[index].tanggal = this.state.tanggal
            tempEvent[index].cover = this.state.cover
        }
        //mengembalikan variabel buku
        this.setState({event: tempEvent})

        //menutup komponen modal_buku
        $("#modal_event").modal("hide")
    }

    //fungsi untuk menhapus
    Drop = (item) => {
        //beri konfirmasi untuk menghapus data
        if(window.confirm("apakah anda yakin ingin menghapus data ini?")){
            //menghapus data
            let tempEvent = this.state.event

            //posisi index data yang akan dihapus
            let index = tempEvent.indexOf(item)

            //settelah menemukan hapus data
            tempEvent.splice(index, 1)

            //kembalikan data ke state buku
            this.setState({event: tempEvent})
        }
    }

    //fungsi utnuk pencarian
    searching = event => {
        if(event.keyCode === 13){
            //13 adalah kode untuk tombol enter
            let keyword = this.state.keyword.toLocaleLowerCase()
            let tempEvent = this.state.event
            //menampung filter
            let result = tempEvent.filter(item => {
                return item.namaevent.toLocaleLowerCase().includes(keyword) || item.tanggal.toLocaleLowerCase().includes(keyword)
            })
            // menampilkan data dari variabel result
            this.setState({filterEvent: result})
        }
    }


    render(){
        return(
            <div className="container">
            <input type="text" className="form-control my-2" placeholder="pencarian" value={this.state.keyword} onChange={ev => this.setState({keyword: ev.target.value})} onKeyUp={ev => this.searching(ev)}/>
               <div className="row">
                    {this.state.filterEvent.map( (item, index) => (
                        <Card 
                            namaevent={ item.namaevent}
                            tanggal={ item.tanggal}
                            cover= {item.cover}
                            onEdit={ () => this.Edit(item)}
                            onDrop={ () => this.Drop(item)}
                        />
                    ))}
               </div>

               <button className="btn btn-success" onClick={() => this.Add()}>
                    Tambah Data
               </button>

               {/** component model sbg control manipulasi data */}
                <div className="modal" id="modal_event">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/** modal header */}
                            <div className="modal-header">
                                Kalender Hari Lingkungan Hidup
                            </div>

                            {/** modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Nama event
                                    <input type="text" className="form-control mb-2" value={this.state.namaevent} onChange={ev => this.setState({namaevent: ev.target.value})} required/>

                                    Tanggal
                                    <input type="text" className="form-control mb-2" value={this.state.tanggal} onChange={ev => this.setState({tanggal: ev.target.value})} required/>

                                    Cover Buku
                                    <input type="url" className="form-control mb-2" value={this.state.cover} onChange={ev => this.setState({cover: ev.target.value})} required/>

                                    <button className="btn btn-info btn-block" type="submit">Simpan</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default kalender;