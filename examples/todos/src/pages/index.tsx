import {graphql} from "gatsby"
import * as React from "react"
import {Text, View} from "react-native"
import MainLayout from "../layouts/MainLayout"

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
    data: {
        site: {
            siteMetadata: {
                siteName: string
            }
        }
    }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`


export default class IndexPage extends React.Component<IndexPageProps, {}> {
    render() {
        const {siteName} = this.props.data.site.siteMetadata
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
                    <Text>
                        This is an example of Gatsby using react-native-web
                    </Text>
                    <Text style={{fontWeight: "bold"}}>siteName={siteName}</Text>
                </View>
            </MainLayout>
        )
    }
}
