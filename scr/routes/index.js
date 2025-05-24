import  { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '..pages/home';
import { Login } from '..pages/login';
import { Profile} from '..pages/Profile';
import { cart } from '..pages/cart';

const stack = createNativeStackNavigator();

export function Routes() {
    return (
        <stack.Navigator>
            <stack.Screen name="Home" component={Home} />
            <stack.Screen name="Login" component={Login} />
            <stack.Screen name="Profile" component={Profile} />
            <stack.Screen name="cart" component={cart} />
        </stack.Navigator>
    );
}