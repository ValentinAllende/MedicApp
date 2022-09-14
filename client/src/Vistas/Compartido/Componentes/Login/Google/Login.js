import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script'
import axios from 'axios'

export default function Google(props) {
    const clientId = "31532081050-nrgri514im6srt8c3e4thvg2dg6ionem.apps.googleusercontent.com";
    useEffect(() => {
        gapi.load("client:auth2", () => {
            gapi.auth2.init({ clientId: clientId })
        })
    }, [])

    const responseGoogle = (response) => {
        console.log(response)
    }

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Ingresar con Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}
