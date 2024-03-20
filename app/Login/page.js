import { AuthForm } from "../components/AuthForm/AuthForm";
import Styles from "./Login.module.css";

export default function LoginPage() {
    return (
        <main className={Styles["form"]}><AuthForm /></main>
    );
}