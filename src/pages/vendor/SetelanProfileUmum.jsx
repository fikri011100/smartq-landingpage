import React from 'react'

import {Form, Button, Row, Col, Tabs, Tab} from 'react-bootstrap'

function SetelanProfileUmum() {
    return (
        <div>
                <Form>
                    <Form.Group controlId="formNamaUsaha" >
                        <Form.Label>Nama Usaha</Form.Label>
                        <Form.Control type="text" placeholder="Nama Usaha" />
                    </Form.Group>

                    <Form.Group controlId="formAlamat">
                        <Form.Label>Alamat</Form.Label>
                        <Form.Control type="text" placeholder="Alamat" />
                    </Form.Group>

                    <Form.Group controlId="formNomorTelepon">
                        <Form.Label>Nomor Telepon</Form.Label>
                        <Form.Control type="number" placeholder="081234567890" />
                    </Form.Group>

                    <Row>
                        <Col>
                            <Form.Group controlId="formJamBuka">
                                <Form.Label>Jam Buka</Form.Label>
                                <Form.Control type="text" placeholder="hh:mm" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formJamTutup">
                                <Form.Label>Jam Tutup</Form.Label>
                                <Form.Control type="text" placeholder="hh:mm" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group controlId="formHariBuka">
                        <Form.Label>Hari Buka</Form.Label>
                        <Form.Control type="text" placeholder="senin;selasa;rabu;kamis" />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{alignItem: "right"}}>
                        Simpan
                    </Button>
                </Form>
        </div>
    )
}

export default SetelanProfileUmum
