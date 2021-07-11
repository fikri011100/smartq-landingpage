import React from 'react'

import {Form, Button, Row, Col} from 'react-bootstrap'

function SetelanProfileKhusus() {
    return (
        <div>

            {/* Form Email Baru */}
            <Form>
                <Form.Group controlId="formEmailBaru" >
                    <Form.Label>Email Baru</Form.Label>
                    <Form.Control type="email" placeholder="baru@mail.com" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Simpan
                </Button>
            </Form>

            <div style={{marginTop: 64}} >
                <Row>
                    <Col>
                        <Button className="btn-primary" style={{width: 200}} >
                            Ganti Password
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="danger" >
                            Logout
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default SetelanProfileKhusus
