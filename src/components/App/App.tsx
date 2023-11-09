import { Header } from '../global/Header';
import { Button } from '../ui/Button';

function App() {

  return (
    <div>
      <Header />
      <Button
        label="test"
        action={() => { console.log('click') }}
        customContainerStyles={{marginRight: '12px'}}
      />
      <Button
        label="test"
        action={() => { console.log('click') }}
        buttonStyles={'gray'}
        customContainerStyles={{marginRight: '12px'}}
      />
      <Button
        label="test"
        action={() => { console.log('click') }}
        buttonStyles={'orange'}
      />
    </div>
  );
};

export { App };