import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './component/intro';
import Props from './component/props';
import Color from './component/state';
import Form from './component/form';

function App() {
  return (
    <div className='container text-center'>
      <Intro/>
      <Props/>
      <Color/>
      <Form/>
    </div>
  );
}

export default App;
