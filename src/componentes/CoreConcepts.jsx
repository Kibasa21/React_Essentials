import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data';

export default function CoreConcepts () {
    <section id='core-concepts'>
        <h2>Time to get started!</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))} {/* MELHOR AINDAAA Isso permite por a lista dinamicamente */} {/* key vai ser explicado depois, serve para diferenciar os elementos da lista */}
          {/* <CoreConcept 
            title="Components"
            description="The core UI building block."
            image = {componentsImg}/>
          <CoreConcept  
            title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
            image = {CORE_CONCEPTS[1].image}/> Serve para usar de outra forma, mais legal
          <CoreConcept {...CORE_CONCEPTS[2]}/> Muito melhor!
          <CoreConcept {...CORE_CONCEPTS[3]}/> */}
        </ul>
    </section>
}