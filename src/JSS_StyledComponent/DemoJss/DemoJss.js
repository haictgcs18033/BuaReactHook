import React, { Component } from 'react'
import {Button, TomatoButton} from '../Component/Button.js'
import { TextInput } from '../Component/Input.js'
import {StyledLink} from '../Component/Link.js'
export default class DemoJss extends Component {
    render() {
        return (
            <div>
                <Button className="button_style" primary padding>Primary</Button>
              <TomatoButton style={{marginLeft:8}}bg padding >Padding</TomatoButton>
              <StyledLink >Ahihhi</StyledLink>
              <TextInput primary="yellow"></TextInput>
            </div>
        )
    }
}
