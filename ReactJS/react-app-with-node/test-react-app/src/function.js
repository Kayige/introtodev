import React, { useState } from 'react';

function CounterWithHooks(props) {

    /**
     * The following statement is a desconstrcuted assignment
     * useSatet should be giving me two outputs
     * 1. A variable -> count
     * 2. A fucntion that will set the count variable -> setCount
     */
	const [count, setCount] = useState(0);

	return (
		<div>
			<h2>This is a counter using hooks</h2>
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>Click to Increment</button>
		</div>
	);
}

export default CounterWithHooks;