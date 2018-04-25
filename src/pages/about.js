import React from 'react'
import dogs from './images/dogs.png'
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>Programming</h2>
      I mostly deal in JavaScript technology, but like to try different
      languages and frameworks. Dealing mostly in React, makes me want to try
      different backend technologies. I’ve been interested in trying frameworks
      like Laravel, Rails, or ASP. I understand most syntax and smaller
      programming paradigms, but I want to learn morn about how to structure
      programs to allow programs to scale in both performance and flexibility.
      <h2>Dogs</h2>
      <img
        style={{ width: ' 50%', float: 'left', padding: ' 2%' }}
        src={dogs}
        alt="Two dogs laying on the bed"
      />
      <h3>Peyton</h3>
      <p>
        Peyton is a labradoodle mix with black wiry hair. Peyton is about 2
        years old and knows most basic commands very well. He is extremely
        social. He loves other dogs. We try to let him socialize, but he gets
        very hyper and very vocal when other dogs are around.
      </p>
      <h3>Harvey</h3>
      <p>
        Harvey is our newest dog. He is a blue heeler and is about 13 weeks old.
        He is learning some basic commands and obedience, but is still very much
        a puppy. He loves to eat. Apparently, they had so many puppies that the
        mother couldn’t’t produce enough milk for the entire litter. They were
        told to feed the dogs eggs and milk, so before we hot Harvey he was used
        to a heavy diet. When we feed him now, he hops or runs to the food bowl
        looking for his eggs and milk.
      </p>
      <p>
        Both dogs are still getting adjusted to each other, but enjoy each
        others company. They are jealous of each other though. They love being
        in the spotlight. If one is getting attention, the other will walk in
        front of the other.
      </p>
    </div>
  )
}

export default About
