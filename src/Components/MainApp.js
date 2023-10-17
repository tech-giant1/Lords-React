import NavBarComponent from "./NavBar/NavBar";

const MainApp = ({ children }) => {
    return (
        <div>
            <NavBarComponent />
            <div>
                {children}
            </div>
        </div>
    )
}

export default MainApp;