import { useState } from "react";

export const CounterApp = () => {

  const [{ name, points, location }, setPerson] = useState({
    name: 'Raul',
    points: 1,
    location: 'Granada'
  });

  const increasePoints = () =>
    setPerson(oldProperties => (
      { ...oldProperties, points: points + 1 }
    )
    );

  /*//Complete declaration
    const increasePointsLong = () => {
      return (
        setPerson((oldProperties) => {
          return (
            { ...oldProperties, points: points + 1 }
          )
        })
      );
    } */

  /* // Without using SetPerson callback.
    // We could have getting the complete state instead of destructure it, so we could use it with spread operator:
    const[state, setPerson] = ...
    const increasePoints = () =>
      setPerson(
        { ...state, points: points + 1 }
      
      ); */


  return (
    <>
      <h2>Object State</h2>
      <hr />
      <h3>Name: {name}</h3>
      <h3>Points: {points}</h3>
      <h3>Location: {location}</h3>
      <hr />
      <button className="btn" onClick={increasePoints}>Increase Points</button>
    </>
  )
}
