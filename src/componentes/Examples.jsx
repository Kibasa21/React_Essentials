import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
import { EXAMPLES } from '../data';
import { useState, Fragment } from 'react'; //Todas as funções que começam com "use" são Hooks e vêm desse useState do react
//Fragment serve para envelopar algum return em html que tenha elementos irmãos sem precisar criar um div desnecessário para envelopar

export default function Examples () {

    const [selectedTopic, setSelectedTopic] = useState(); //Primeiro elemento da array é o valor atual do value e o segundo é a função que muda ele e pede para o componente ser lido de novo

    function handleSelect (selectedButton) {
      // selectedButton => 'components', 'jsx', 'props', 'state'
      setSelectedTopic(selectedButton);
    }
  
    let tabContent = <p>Please select a topic.</p>;
    const buttons = (
        <>
            <TabButton isSelected = {selectedTopic==='components'} onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected = {selectedTopic==='jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected = {selectedTopic==='props'} onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected = {selectedTopic==='state'} onClick={() => handleSelect('state')}>State</TabButton>
        </>
    );
  
    if (selectedTopic) {
      tabContent = (
        <div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3> {/* Para o title de data.js */}
          <p>{EXAMPLES[selectedTopic].description}</p> {/* Para o description de data.js */}
          <pre>
            <code> {/* Para o code de data.js */}
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
      );
    }
    
    return (
        <Section title = "Examples" id='examples'>
          <Tabs ButtonsContainer = "menu" buttons={buttons}>
          {tabContent}
          </Tabs>
        </Section>
    );
}