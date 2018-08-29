import { Provider } from 'react-redux';
import store from '../store'
import AppCreator from "./AppCreator";
import LiveView from "./LiveView";

export default ({ }) => (<Provider store={store}>
    <div>
        <AppCreator />
        <LiveView />
    </div>
</Provider>);
