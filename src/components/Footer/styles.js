import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 30px;

    position: fixed;
    bottom: 0;

    padding: 8px;
    background: #6C63FF;

    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
        color: #FFF;
        font-size: 18px;
        
        span {
            color: #4F4F4F;

            a {
                color: #FFF;
                transition: color 200ms ease-in;

                &:hover {
                    color: #4F4F4F;
                }
            }
        }
    }
`