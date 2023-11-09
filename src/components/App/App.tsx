import { Button } from '../ui/Button';

function App() {

  return (
    <div style={
      {
        margin: '0 auto',
        maxWidth: 'fit-content',
        marginTop: '80px'
      }
    }>
      <Button
        label="test"
        action={() => { console.log('click') }}
        customContainerStyles={{marginRight: '12px'}}
      />
      <Button
        label="test"
        action={() => { console.log('click') }}
        isGray={true}
      />
    </div>
  );
};

export { App };