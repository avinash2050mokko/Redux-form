import React from 'react'
import styled, { withTheme } from 'styled-components/native'
import { View, Text } from 'react-native'

const StyledTextInput = styled.TextInput`
	padding: 10px;
	border-radius: 4px;
	background-color: #ddd;
	
`

class TextInput extends React.Component {
    state = {
        focused: false
    }

    onFocus = () => {
        this.setState({
            focused: true
        })
        if (this.props.onFocus) {
            this.props.onFocus()
        }
        if (this.props.input) {
            this.props.input.onFocus()
        }
    }

    onBlur = () => {
        this.setState({
            focused: false
        })

        if (this.props.onBlur) {
            this.props.onBlur()
        }

        if (this.props.input) {
            this.props.input.onBlur()
        }
    }

    onChangeText = value => {
        if (this.props.onChangeText) {
            this.props.onChangeText(value)
        }
        if (this.props.input) {
            this.props.input.onChange(value)
        }
    }

    render() {
        const {
            placeholder,
            meta: { touched, error, warning },
            ...rest
        } = this.props

        return (
            <View
                style={{
                    marginTop: 10,
                    marginBottom: 10,
                }}
            >

                <StyledTextInput
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    innerRef={input => (this.input = input)}
                    value={this.props.input.value}
                    onChangeText={this.onChangeText}
                    underlineColorAndroid="transparent"
                    secureTextEntry={this.props.password}
                    {...rest}
                />
                {touched &&
                ((!!error && (
                        <Text
                            type="small"
                            style={{ marginTop: 4, color: 'red' }}
                        >
                            {error}
                        </Text>
                    )) ||
                    (!!warning && (
                        <Text
                            type="small"
                            style={{ marginTop: 4, color: 'yellow' }}
                        >
                            {warning}
                        </Text>
                    )))}
            </View>
        )
    }
}
export default TextInput
