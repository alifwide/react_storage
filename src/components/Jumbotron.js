import React from 'react'
import { Jumbotron, Container } from 'reactstrap';

const Baner = (props) => {
    return (
      <div>
        <Jumbotron fluid style={{backgroundImage: 'url(https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)', backgroundSize: 'cover'}}>
            <div className="container">
            <Container fluid>
                <h1 className="display-3" >Fluid jumbotron</h1>
                <p className="lead">Adiwiyata adalah upaya membangun program atau wadah yang baik dan ideal untuk mendapatkan
                            ilmu pengetahuan dan berbagai norma serta etika yang dapat menjadi dasar manusia menuju
                            terciptanya kesejahteraan hidup untuk Cita-cita pembangunan berkelanjutan.</p>
            </Container>
            </div>
        </Jumbotron>
      </div>
    );
  };

//exports
export default Baner;

