// ============= one way to define props
// function CoreConcepts(props){
  //   return (
    //     <li>
    //       <img src={props.img} alt="" srcset="" />
    //       <h3>{props.title}</h3>
    //       <p>{props.description}</p>
    //     </li>
    //   )
    // }

// ============= other way to define props

import './CoreConcepts.css'
export default function CoreConcept({image, title, description}){
    return (
      <li>
        <img src={image} alt="" srcset="" />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  }

