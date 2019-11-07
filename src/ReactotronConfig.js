import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

const reactotron =
  process.env.NODE_ENV === 'development'
    ? Reactotron.configure({ name: 'Vamos a China - Admin' })
        .use(reactotronRedux())
        .connect()
    : '';

export default reactotron;
