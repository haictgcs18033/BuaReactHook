import styled from 'styled-components'


export const Link = ({className,children,...restProp}) => 
        (        
           
            <a className={className}  >
                {children}
            </a>
        )
;

export const StyledLink = styled(Link)`
 color:orange;
 font-weight:bold;

`