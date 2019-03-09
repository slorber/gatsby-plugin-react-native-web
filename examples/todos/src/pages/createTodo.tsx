import * as React from "react"
import {Text, View} from "react-native"
import MainLayout from "../layouts/MainLayout"



export default class CreateTodo extends React.Component {
    render() {
        return (
            <MainLayout>
                <View style={{
                    margin: `0 auto`,
                    marginBottom: 15,
                    marginTop: 15,
                    maxWidth: 650,
                    paddingLeft: 15,
                    paddingRight: 15,
                }}>
                    <Text>CreateTodo page</Text>
                </View>
            </MainLayout>
        )
    }
}
