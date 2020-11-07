import React, { Component } from 'react'

export default class Render extends Component {
    render() {
        return (
            <div className="lacroixs">
                 <p className="lacroixs-id">Id: {this.props.lacroixsId}</p>
                <p className="lacroixs-name">Name: {this.props.lacroixsName}</p>
                <p className="cool-factor"> Cool Factor:{this.props.coolFactor}</p>
                <p className="lacroixs-category">Category:{this.props.lacroixsCategory}</p>
                {/* <p className="lacroixs-crisp">Is it crisssssp?{this.props.lacroixsCrisp : 'Yes' or 'No'}</p> */}
                <p className="owner-id">{this.props.ownerId}</p>
                
            </div>
        )
    }
}
