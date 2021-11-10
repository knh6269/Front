import { WebView } from "react-native-webview";

export default class Location extends Component {
    render() {
        return (
            <WebView
                source={{url: "http://webview-domain/app/map"}}
        )
    }
}