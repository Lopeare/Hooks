import { usePerson } from '../hooks/useCounter';

export const CounterCustomApp = () => {
    // Here we have our component clean
    const { name, points, location, ...tools } = usePerson('raul', 'españa');

    return (
        <>
            <h1>Custom Hook</h1 >
            <h3>Name: {name}</h3>
            <h3>Points: {points}</h3>
            <h3>Location: {location}</h3>

            <hr />
            <button className="btn btn-primary" onClick={() => tools.increment(1)}>Increase</button>
            <button className="btn btn-primary" onClick={tools.reset}>Reset</button>
            <button className="btn btn-primary" onClick={() => tools.decrement(1)}>Decrease</button>
        </>
    )
}
