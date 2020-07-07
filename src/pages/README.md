### MateriFlexbox

Materi ini menggunakan icon dari Ionicons. Maka dari itu perlu menginstall package icon terlebih dahulu
```
$ npm install --save react-native-vector-icons
```

Setelah menginstall, perlu menambahkan sintaks (untuk penggunaan Android) pada file ```android/app/build.gradle```. Sintaks yang dimaksud sebagai berikut ```apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"```

Berikut cara penggunaannya:
```
import Icon from 'react-native-vector-icons/Ionicons'
const icon = <Icon name="airplane-sharp" size={30} color="#900" />
```

