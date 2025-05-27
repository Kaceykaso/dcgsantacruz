import React, {useState} from "react";
import { Button, Counter, Frame } from "react95";
import styled from "styled-components";


const Wrapper = styled.div`
    padding: 5rem;
    background: ${({ theme }) => theme.desktopBackground};
`;

export function FunCounter() {
    const [ count, setCount ] = useState(0);
    const handleCountClick = () => setCount(count + 1);

    return (
        <Frame className="counter">
            <Counter value={831} minLength={5} size='lg' />
            <div className='interactive-counter'>
                <Counter value={count} minLength={3} />
                <Button onClick={handleCountClick}>Click!</Button>
            </div>
        </Frame>
    )
}