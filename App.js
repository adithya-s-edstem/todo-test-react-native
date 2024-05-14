import { Provider } from 'react-redux';
import { Todo } from "./Todo";
import { store } from './app/store';

export default function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  )
}
