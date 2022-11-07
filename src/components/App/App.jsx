import { Routes, Route } from "react-router-dom";
import Header from "components/Header";
import ContactsPage from "pages/ContactsPage";

import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<ContactsPage />} />
      </Routes>
    </div>
  );
}
