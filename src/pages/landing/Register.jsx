import React from 'react'
import './Register.css'

import Navbar from '../../components/Navbar';

import {Card, Button, Form} from 'react-bootstrap'

function Register() {
    return (
        <div>
            <Navbar/>

            <div className="container">
                <div className="register-form">
                    <Form>
                        <div className="register-form-header">
                            <h4 className="register-form-header-text">Mengisi Formulir</h4>
                        </div>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Nama Perusahaan</Form.Label>
                            <Form.Control type="text" placeholder="Contoh: Toko Rahma Jaya" />
                        </Form.Group>

                        <Form.Group controlId="formBasicText">
                            <Form.Label>Pemilik Perusahaan</Form.Label>
                            <Form.Control type="text" placeholder="Contoh: Dadang Sutrisna" />
                        </Form.Group>

                        <Form.Group controlId="formBasicText">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Contoh: admin_rahmanjaya" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password minimal 8 karakter" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Contoh: nama@mail.com" />
                        </Form.Group>

                        <Form.Group controlId="formBasicText">
                            <Form.Label>Nomor Telepon</Form.Label>
                            <Form.Control type="number" placeholder="Contoh: 081XXXXXXXXX" />
                        </Form.Group>

                        <Form.Group controlId="ControlTextarea1">
                            <Form.Label>Alamat</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Lanjut
                        </Button>
                    </Form>
                </div>

            </div>
            
        </div>
    )
}

export default Register
