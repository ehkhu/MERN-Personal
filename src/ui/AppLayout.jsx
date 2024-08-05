import { Outlet } from "react-router-dom";
import { MainNav } from "./main-nav";


function AppLayout() {
  return (
    <div className="container">
        <MainNav className="mx-6" />
    <section className="section full-height">
          <Outlet/>
            {/* <h1 className="title">Welcome to MySite</h1>
            <p className="content">
                This is the main content area. You can use Bulma's grid system and other classes to build your layout. 
                Bulma's flexbox-based grid system makes it easy to align and distribute space among items in a container.
            </p> */}
    </section>
      </div>
  );
}

export default AppLayout;