import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom"

export const  useRedirect = (userAuthStatus) => {
    const history = useHistory();

    useEffect(() => {
        const handleMount = async () => {
            try {
                await axios.post('/dj-rest-auth/token/refresh/');
                // if the user is logged in then the code below will run
                if (userAuthStatus === "loggedIn") {
                    history.push('/');
                }
            } catch(err){
                // if user is not logged in then this code will run
                if (userAuthStatus === "loggedOut") {
                    history.push('/');
                }
            }
        };

        handleMount();
    }, [history, userAuthStatus]);    
};
