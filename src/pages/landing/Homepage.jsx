import React, {Component, useState} from 'react'
import { Link } from 'react-router-dom';
import {MdArrowForward} from 'react-icons/md';
import Corosel from '../../components/Corosel'
import { FaInstagram, FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import {Button, Carousel, Card, CardDeck, Modal} from 'react-bootstrap'

import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';

import './Homepage.css'

function Homepage() {
    const [modalShow, setModalShow] = useState(false);
    
    return (
        <>
            <NavBar/>
            {/* Top Section */}
            <section className='landing-section' id="main">
                <div className='container'>
                    <div
                        className='landing-row'
                        style={{
                            display: 'flex',
                            flexDirection:  'row'
                        }}
                    >
                        <div className='landing-col col'>
                            <div className='landing-text-wrapper'>
                                <h1 className='heading dark'>
                                    <div>Mengantri Lebih Gampang dengan SmartQ</div>
                                </h1>
                                <p className='landing-subtitle dark'>
                                    Gunakan SmartQ untuk mendapatkan pengalaman 
                                    baru yang lebih menyenangkan dan mudah 
                                    dalam mengantri
                                </p>
                                <Link to='/sign-up'>
                                    <Button className="btn-primary" active id="hompage-button">
                                        Join Us
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className='landing-col col'>
                            <div className='landing-img-wrapper'>
                                <img src="images/queue.svg" alt="Antrian" className='landing-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section className='landing-section darkBg' id="about">
                <div className='container'>
                    <div
                        className='row landing-row'
                        style={{
                            display: 'flex',
                            flexDirection:  'row'
                        }}
                    >
                        <div className='landing-col col'>
                            <div className='landing-text-wrapper'>
                                <h1 className='heading'>
                                    Apa Itu SmartQ ?
                                </h1>
                                <p  className='landing-subtitle'>
                                    SmartQ merupakan sebuah aplikasi yang digunakan
                                    untuk melakukan booking dan antrian yang dapat 
                                    dilakukan secara mudah dan praktis
                                </p>
                                <Button clasname="btn-primary" id="hompage-button-dark" onClick={() => setModalShow(true)}>
                                    Pelajari Lebih Lanjut
                                </Button>

                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </div>
                        </div>
                        <div className='landing-col col'>
                            <div className='landing-img-wrapper'>
                                <img src="images/app.svg" alt="Antrian" className='landing-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

         <Corosel />

            {/* Layanan Section */}
            <section className='landing-section darkBg' id="layanan">
                <div className='container'>
                    <h1 className='heading'>
                            Layanan Kami
                        </h1>
                        <p className='landing-subtitle'>
                            Terdapat dua layanan yang ditawarkan
                            yaitu untuk masyarakat dan pemilik usaha
                        </p>
                    <CardDeck>
                        <Card text="primary">
                            <Card.Img variant="top" src="images/layanan_1.png" />
                            <Card.Body>
                                <Card.Title className='card-title'>SmartQ User</Card.Title>
                                <Card.Text>
                                    SmartQ User merupakan fasilitas yang diberikan
                                    kepada seluruh masyarakat untuk dapat menggunakan 
                                    fasilitas tersebut dengan tujuan dan harapan 
                                    dapat mempermudah dan memberikan cara serta pengalaman
                                    yang jauh lebih menyenangkan dalam mengantri
                                    pada suatu tempat.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card text="primary">
                            <Card.Img variant="top" src="images/layanan_2.png" />
                            <Card.Body>
                                <Card.Title className='card-title'>SmartQ Partner</Card.Title>
                                <Card.Text>
                                    SmartQ Partner merupakan pihak-pihak merchant yang
                                    telah bekerja sama dengan SmartQ dengan tujuan serta
                                    harapan dapat membantu pertumbuhan dan perkembangan
                                    juga meningkatkan kualitas pelayanan yang ada pada setiap 
                                    merchant yang telah bergabung.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
            </section>

            {/* Contact Section */}
            <section className='landing-section'id="contact">
                <div className='container' >
                    <div
                        className='row landing-row'
                        style={{
                            display: 'flex',
                            flexDirection:  'row-reverse'
                        }}
                    >
                        <div className='landing-col col'>
                            <div className='landing-text-wrapper'>
                                <h1 className='heading dark'>
                                    Hubungi Kami
                                </h1>
                                <p className= 'landing-subtitle dark'>
                                    Untuk informasi lebih lanjut 
                                    mengenai layanan SmartQ 
                                    silahkan menghubungi melalui 
                                    akun media sosial kami
                                </p>
                                <a href="https://api.whatsapp.com/send?phone=6281335125677/?text=Selamat Malam"><FaWhatsapp className="icon"/></a>
                                <a href="https://www.instagram.com/smartqofficial/?hl=en"><FaInstagram className="icon"/></a>
                                <a href="https://web.facebook.com/antrian.smartq"><FaFacebookSquare className="icon"/></a>
                            </div>
                        </div>
                        <div className='landing-col col'>
                            <div className='landing-img-wrapper'>
                                <img src="images/contact.svg" alt="Antrian" className='landing-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

// Modal Function for Second Section
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <strong>Apa Itu SmartQ?</strong> 
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    SmartQ merupakan sebuah aplikasi booking dan atau antrian yang dilakukan secara online 
                    dengan tujuan memberikan konsumen kemudahan, efisiensi, dan efektivitas waktu yang lebih 
                    baik. Selain itu SmartQ juga memberikan profitabilitas lebih bagi UMKM yang sampai hari 
                    ini masih memiliki kendala mengenai system antrian. Dengan adanya perbaikan system antrian 
                    yang ada di Indonesia diharapkan mampu menciptakan, menumbuhkan dan menerapkan kembali 
                    budaya antri yang sudah mulai menghilang di lingkungan masyarakat saat ini. Selain itu 
                    budaya antri merupakan sebuah kegiatan yang seharusnya diterapkan oleh setiap orang pada 
                    tempat dan waktu tertentu. Usaha layanan ini juga dapat mengintegrasikan UMKM yang 
                    membutuhkan solusi mengenai system antrian yang masih belum berjalan dengan baik sehingga 
                    dapat meningkatkan pelayanannya terhadap konsumen yang ada pada suatu tempat tersebut, 
                    sehingga mampu meningkatkan pelayanan yang jauh lebih baik dibandingkan dengan sebelumnya.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Homepage
