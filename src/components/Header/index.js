import React, {useEffect, useContext} from "react";
import {ContextUser} from "store/context";

const Header = () => {
    const {user, setUser} = useContext(ContextUser)
        useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/1')
            .then(res => res.json())
            .then(res => setUser(res))
    }, [])
    return (
        <header>
            <h2>Test</h2>
        </header>
    )
}

export default Header;
