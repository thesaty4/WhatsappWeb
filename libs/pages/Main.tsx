import React, {useRef, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import WebView, {WebViewMessageEvent} from 'react-native-webview';

function Main() {
  const webViewRef = useRef<WebView | null>(null);

  const handleWebViewMessage = (event: WebViewMessageEvent) => {
    // Handle the message received from the WebView
    const data = event.nativeEvent.data;
    console.log('Message from WebView:', data);
  };

  useEffect(() => {
    const injectJavaScript = `
      var targetElement = document.querySelector('._8nE1Y');
      if (targetElement) {
        targetElement.addEventListener('click', function() {
          window.ReactNativeWebView.postMessage('clickEvent');
          console.log('clicked');
        });
      }
    `;

    // Inject JavaScript after the WebView has fully loaded
    webViewRef.current?.injectJavaScript(injectJavaScript);
  }, []); // Empty dependency array ensures that this effect runs only once after the initial render

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: 'https://web.whatsapp.com/'}}
        userAgent="Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:90.0) Gecko/20100101 Firefox/90.0"
        style={{flex: 1}}
        ref={ref => (webViewRef.current = ref)}
        onMessage={handleWebViewMessage}
      />
    </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
