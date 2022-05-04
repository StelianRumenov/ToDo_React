import React from "react";
import { Global } from "./GlobalState";
import Layout from "./components/Layout";

// Create an example component which both renders and modifies the GlobalState
// function SomeComponent() {
//   const { count } = useGlobalState();

//   // Create a function which mutates GlobalState
//   function incrementCount() {
//     GlobalState.set({
//       count: count + 1,
//     });
//   }

//   return <button onClick={incrementCount}>{count}</button>;
// }

export default function App() {
  // Note: within the Root function we can return any Component (not just SomeComponent, but also a Router for instance)
  return <Global Root={() => <Layout />} />;
}

// Expose the GlobalState object to the window (allowing GlobalState.set({ count: 'new' }) from anywhere in the code (even your console))
