import "../Resources/css/style.css";
import Header from "../Components/RoleSelection/Header";
import Content from "../Components/RoleSelection/Cnotent";

const RoleSelectionPage = () => {
    return (
        <div id="role-page" className="page active-page">
            <Header />
            <Content />
        </div>
    );
}

export default RoleSelectionPage;