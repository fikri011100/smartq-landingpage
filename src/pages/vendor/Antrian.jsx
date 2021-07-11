import React, {useState} from 'react'
import 'reactjs-popup/dist/index.css';
import DrawerBar from '../../components/Drawer'

import {Button, Card, CardDeck, Modal, Row, Col} from 'react-bootstrap'
import { IoPersonAdd } from "react-icons/io5";
import './Antrian.css';
import {IoLogoWhatsapp} from "react-icons/io";

function Antrian() {

    // Data User
    const [nama, setNama] = useState("Tanfirul Roy");
    const [waktu, setWaktu] = useState("20:15");
    const [status, setStatus] = useState("Menunggu Konfirmasi");
    const [status2, setStatus2] = useState("Menunggu Giliran");
    const [profil, setProfil] = useState("https://www.nailseatowncouncil.gov.uk/wp-content/uploads/blank-profile-picture-973460_1280-300x300.jpg");
    
    // Data for Button
    const [modalTambahAntriShow, setModalTambahAntriShow] = useState(false);
    const [modalMintaNomorShow, setModalMintaNomorShow] = useState(false);
    const [modalSelesaiAntriShow, setModalSelesaiAntriShow] = useState(false);

    return (
        <div>
            <DrawerBar/>
            <div className="container-xl mt-4">

                <Row>
                    {/* Grid Kiri */}
                    <Col>
                        {/* Header Kiri */}
                        <h4 className="grid-title">Meminta Nomor Antrian</h4>

                        {/* Card Antrian */}
                        <Card className="card-antrian" onClick={() => setModalMintaNomorShow(true)}>
                            <Row className="card-no-mp">

                                {/* User Photo Profile */}
                                <Col md="auto" className="card-no-mp">
                                    <img className="user-photo" src={profil} alt="user photo profile" />
                                    <a classname="contact-user" 
                                        href="https://api.whatsapp.com/send?phone=6281335125677/?text=Selamat Malam"
                                        target="_blank"
                                    >
                                        <IoLogoWhatsapp className="contact-icon"/>
                                    </a>
                                </Col>

                                {/* User Description */}
                                <Col className="card-no-mp">
                                    <div className="card-body">

                                        {/* User Name */}
                                        <p className="card-title"><strong>{nama}</strong></p>
                                        
                                        {/* Additional Information */}
                                        <Row className="card-no-mp">

                                            {/* User Time */}
                                            <Col md="auto" className="card-no-mp">
                                                <p className="card-text">{waktu}</p>
                                            </Col>

                                            {/* User Status */}
                                            <Col className="card-no-mp">
                                                <p className="card-text" style={{textAlign:"right"}} >
                                                    <small className="text-muted">{status}</small>
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Card>

                    </Col>


                {/* Grid Kanan */}
                    <Col>
                        <h4 className="grid-title">Sedang Mengantri</h4>

                        {/* Card Antrian */}
                        <div className="card card-antrian" onClick={() => setModalSelesaiAntriShow(true)}>
                            <Row className="card-no-mp">
                                {/* User Photo Profile */}
                                <Col md="auto" className="card-no-mp">
                                    <img className="user-photo" src={profil} alt="user photo profile" />
                                    <a classname="contact-user" 
                                        href="https://api.whatsapp.com/send?phone=6281335125677/?text=Selamat Malam"
                                        target="_blank"
                                    >
                                        <IoLogoWhatsapp className="contact-icon"/>
                                    </a>
                                </Col>

                                {/* User Description */}
                                <Col className="card-no-mp">
                                    <div className="card-body">

                                        {/* User Name */}
                                        <p className="card-title"><strong>{nama}</strong></p>

                                        {/* Additional Information */}
                                        <Row className="card-no-mp">

                                            {/* User Time */}
                                            <Col md="auto" className="card-no-mp">
                                                <p className="card-text">{waktu}</p>
                                            </Col>

                                            {/* User Status */}
                                            <Col className="card-no-mp">
                                                <p className="card-text" style={{textAlign:"right"}} >
                                                    <small className="text-muted">{status2}</small>
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>

                                    {/* Nomor Antrian */}
                                    <div className="antrian-number">
                                        <p>12</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </Col>
                </Row>
            </div>

            {/* Button Tambah Antrian */}
            <Button variant="primary" id="antrian-button-main" onClick={() => setModalTambahAntriShow(true)}>
                <IoPersonAdd className="antrian-icon" />
            </Button>

            {/* Modal Tambah Antrian */}
            <TambahAntriModal
                show={modalTambahAntriShow}
                onHide={() => setModalTambahAntriShow(false)}
            />

            <MintaNomorModal
                show={modalMintaNomorShow}
                onHide={() => setModalMintaNomorShow(false)}
            />

            <SelesaiAntriModal
                show={modalSelesaiAntriShow}
                onHide={() => setModalSelesaiAntriShow(false)}
            />

        </div>
    )
}

//Modal Function untuk Button Tambah Antrian
function TambahAntriModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="antrian-modal-main">
                <Row>
                    <h4><strong>Ada yang Mau Mengantri?</strong></h4>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" id="antrian-modal-main-button">
                            Iya
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="secondary" id="antrian-modal-main-button" onClick={props.onHide}>
                            Batal
                        </Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

//Modal Function untuk Memberi Nomor Antrian
function MintaNomorModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="antrian-modal-main">
                <Row className="card-no-mp">

                    {/* User Photo Profile */}
                    <Col md="auto" className="card-no-mp">
                        <img 
                            className="user-photo" 
                            src="https://www.nailseatowncouncil.gov.uk/wp-content/uploads/blank-profile-picture-973460_1280-300x300.jpg" 
                            alt="user photo profile" 
                        />
                    </Col>

                    {/* User Description */}
                    <Col className="card-no-mp">
                        <div className="card-body">

                            {/* User Name */}
                            <p className="card-title"><strong>(Nama User)</strong></p>

                            {/* Additional Information */}
                            <Row className="card-no-mp">

                                {/* User Contact */}
                                <Col md="auto" className="card-no-mp">
                                    <p className="card-text">(Nomor Telepon)</p>
                                </Col>

                            </Row>
                        </div>
                    </Col>
                </Row>
                
                <form >
                    <Row >
                        <Col >
                            <Row >
                                <label for="nomorAntrian">Nomor</label>
                            </Row>
                            <Row>
                                <input type="number" id="nomor" name="nomor" />
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <label for="durasiAntrian">Durasi</label>
                            </Row>
                            <Row>
                                <input type="number" id="durasi" name="durasi" />
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button variant="primary" id="antrian-modal-main-button" type="submit">
                                Kirim Nomor
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="secondary" id="antrian-modal-main-button" onClick={props.onHide}>
                                Kembali
                            </Button>
                        </Col>
                    </Row>
                </form>
            </Modal.Body>
        </Modal>
    );
}

//Modal Function untuk Button Tambah Antrian
function SelesaiAntriModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="antrian-modal-main">
                <Row>
                    <h4><strong>Sudah Mengantri?</strong></h4>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" id="antrian-modal-main-button">
                            Iya
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="secondary" id="antrian-modal-main-button" onClick={props.onHide}>
                            Batal
                        </Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default Antrian
