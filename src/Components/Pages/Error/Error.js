import React from 'react'
import Header from '../../Header/Header'
import PageTop from '../ReComp/PageTop'
import PageTopsvg from '../ReComp/PageTopsvg'
import './Error.css'

function Error() {
    return (
        <div className="error">
            <Header>
                <PageTop PageName="Error 404" ParentPage="Home" CurruntPage="Page Not Found" />
                <PageTopsvg />
            </Header>
            <div className="error_main">
                <div className="error_mainLeft">
                    <p className="error_mainLeftMessage">404!</p>
                </div>
                <div className="error_mainRight">
                    <p className="error_mainRightHeading">Oops! Page Not Found!</p>
                    <p className="error_mainRightDetail">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    <a href="" className="error_mainRightButton">Back To Home</a>
                </div>
            </div>
        </div>
    )
}

export default Error
