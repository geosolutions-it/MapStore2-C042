/*
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {Grid, Row, Col} = require('react-bootstrap');
import PropTypes from 'prop-types';

const srcGeoSolutions = require("../../MapStore2/web/client/product/assets/img/geosolutions-brand.png");
const LOGO = require("../../assets/logo_distretto_scritta_orizzontale.jpg");
class Footer extends React.Component {
    static propTypes = {
        srcLogo: PropTypes.string,
        content: PropTypes.any,
        customText: PropTypes.any
    }
    render() {
        const { srcLogo = LOGO, content, customText } = this.props;
        return (
            <Grid>
                <Row>
                    <Col xs={12} className="text-center">
                        {content ||
                        <div>
                        <div>
                            <a target="_blank" href="http://www.appenninosettentrionale.it/itc/">
                                <img src={srcLogo} width="340" title="GeoSolutions" alt="GeoSolutions" />
                            </a>
                            </div>
                            <br />
                            <br />
                            <br />
                            <div>
                            <a target="_blank" href="http://www.geo-solutions.it/">
                                <img src={srcGeoSolutions} width="140" title="GeoSolutions" alt="GeoSolutions" />
                            </a>
                            </div>
                        </div>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="text-center">
                        {customText || <small>GeoSolutions S.a.s. | Via di Montramito 3/A, 55054 Massarosa (Lucca) - Italy info@geo-solutions.it | Tel: +39 0584 962313 | Fax: +39 0584 1660272</small>}
                    </Col>
                </Row>
            </Grid>
        );
    }
}

module.exports = {
    FooterPlugin: Footer
};
