import html from 'innerself';

export const HowItWorks = () => html`
  <div class="how-it-works-container">
    <div id="how-it-works">
      <div class="row">
        <h2 style="padding-left:10px;">How it works.</h2>
      </div>
      <div class="row">
        <div class="column">
          <p>
            The update cycle starts with the dispatch function which passes the action to the reducer and updates the state.
          </p>
          <p>
          When the state changes, the store compares the entire string output of top-level components (the ones attached to a root element in the DOM) with the output they produced last. This means that most of the time, even a slightest change in output will re-render the entire root.
          </p>
          <p>
            It's possible to dispatch actions which change the state and don't trigger re-renders. For instance in example01 the text input dispatches CHANGE_INPUT actions on keyup events. The current value of the input is then saved in the store. Crucially, this value is not used by the TaskInput component to populate the input element. The whole thing relies on the fact that the native HTML input element stores its own state when the user is typing into it.
          </p>
          <p>
            This limitation was fine for my use-case but it's worth pointing out that it badly hurts accessibility. Any change to the state which causes a re-render will make the currently focused element lose focus.
          </p>
        </div>
        <div class="column">
          <p>
            React is of course much smarter: the Virtual DOM is a lightweight representation of the render tree and updates to components produce an actual diff. React maps the items in the Virtual DOM to the elements in the real DOM and is able to only update what has really changed, regardless of its position in the tree.
          </p>
          <p>
            Here's an interesting piece of trivia that I learned about while working on this project. React only re-renders components when their local state changes, as signaled by this.setState(). The fact that it also looks like components re-render when their props change derives from that as well. Something needs to pass those props in, after all, and this something is the parent component which first needs to decide to re-render itself.
          </p>
          <p>
            When you think about how you can connect components with react-redux to avoid passing state to them from parents it becomes clear why behind the scenes it calls this.setState(dummyState) (which is an empty object) to trigger a re-render of the connected component :) It does this only when the sub-state as described by the selector (mapStateToProps) changes, which is easy to compute (and fast) if the reducers use immutability right. In the best case scenario it only needs to compare the identity of the sub-state to know that it's changed.
          </p>
        </div>
      </div>
    </div>
  </div>
`;