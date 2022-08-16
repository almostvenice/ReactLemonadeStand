import styled from "styled-components";

const GlassBack = styled.div`
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid #BBB;
    border-top: 1ps solid #DDD;
    border-radius: 10px;
    padding: 3px 5px 40px 5px;
`

const GlassFront = styled.div`
    height: 400px;
    width: 300px;
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid #BBB;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
`

const Glass = ({ children }) => {
    return (
        <GlassBack>
            <GlassFront>{children}</GlassFront>
        </GlassBack>
    )
}

export default Glass