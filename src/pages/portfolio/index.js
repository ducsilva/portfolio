import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataportfolio, meta } from "utils/mockData";
import "./style.css";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> My Experience | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> My Experience </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5">
          {dataportfolio.map((data, i) => {
            return (
              <Row key={i}>
                <Col lg="5">
                  <div className="po_item">
                    <img src={data.img} alt="" />
                    <div className="content">
                      <p>{data.description}</p>
                      <a href={data.link} target="_blank">
                        View company
                      </a>
                    </div>
                  </div>
                </Col>
                <Col lg="7" className="d-flex align-items-center ">
                  <div>
                    <h3>{data.comany?.toUpperCase()}</h3>
                    <h6>{data.job.title}</h6>
                    <h6>{data.job.date}</h6>
                    <h5>{data.job.description}</h5>
                  </div>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
