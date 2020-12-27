import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

export default function DemoTheme(propsComponent) {
    const configTheme = {
        darkColor: '#000',
        blueColor: '#3333CC'
    }
    const DivStyle=styled.div`
    color:${props=>props.inputColor || 'red'}
    `
    return (
        <ThemeProvider theme={configTheme}>
            <div>
                123
            </div>
        </ThemeProvider>

    )
}
