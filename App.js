/**
 * <div id="parent">
 *         <div id="child1">
 *          <h1>I am a h1 Tag</h1>
 *          <h2>I am a h2 Tag</h2>
 *         </div>
 *     <div id="child2">
 *          <h1>I am a h1 Tag</h1>
 *          <h2>I am a h2 Tag</h2>
 *         </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am H1 Tag"),
    React.createElement("h2", {}, "I am h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 Tag"),
    React.createElement("h2", {}, "I am h2 Tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World,This Heading is from React"
// );

// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

console.log(parent);

root.render(parent);
