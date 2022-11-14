import React from "react";
import PropTypes from "prop-types"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function SearchEngine({keyword, keywordChange}){
    return(
        <div className="search-engine mt-3 ">
        <Container>
        <Row className="d-flex justify-content-end">
        <Col md={{span: 3}}>
        <Form>
              <Form.Control
                type="search"
                placeholder="Search"
                value={keyword}
                aria-label="Search"
                onChange={(event)=>keywordChange(event.target.value)}
              />
            </Form>
        </Col>
        
        </Row>
        </Container>
        </div>
    )
}

SearchEngine.propType = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchEngine