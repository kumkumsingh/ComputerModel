import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class ModelDetails extends React.Component {
    static propTypes = {

        name: PropTypes.element.isRequired,
        manufacturer: PropTypes.element.isRequired,
        year: PropTypes.element.isRequired,
        origin: PropTypes.element.isRequired,
    }
    render() {
        return (
            <div>
                <ul>
                    <li>Name: {this.props.model[0].name}</li>
                    <li>Manufacturer: {this.props.model[0].manufacturer}</li>
                    <li>Year: {this.props.model[0].year}</li>
                    <li>Origin: {this.props.model[0].origin}Croatia</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        model: state
    }
}

export default connect(mapStateToProps)(ModelDetails)