import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import EditNote from "./Components/EditNote.jsx"
import ViewNote from "./Components/ViewNote.jsx";
import "./App.css";

import AllNotes from "./Components/AllNotes.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar link="myNotes"/>
        <Home/>
      </div>
    ),
  },
  {
    path: '/notes',
    element : (
    <div>
      <Navbar link=""/>
<AllNotes/>
    </div>
    )
  },
  {
    path : '/notes/view/:id',
    element : (<div>

<Navbar link="myNotes"/>
<ViewNote/>

    </div>
    
    )
  },
  {
    path : '/notes/edit/:noteId',
    element : (<div>

<Navbar link="myNotes"/>
<EditNote/>
    </div>
    
    )
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
