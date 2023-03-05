import React from "react"

import styled from "styled-components"


const Switch = () => {
    return (
        <SwitchContainer>

        <div className="container-switch">
            <span>Change Theme </span>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
            </label>
        </div>
        </SwitchContainer>
    )
}

export default Switch

const SwitchContainer = styled.nav`


`